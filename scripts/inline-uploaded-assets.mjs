// Post-build step for the static (DirectAdmin) build.
//
// Uploaded images normally load from Lovable's asset proxy path
// (/__l5e/assets-v1/...), which only exists on Lovable hosting. This script
// downloads every referenced upload into dist/client/media/ and rewrites the
// references, so the exported site works on any plain web host.
import { readdir, readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const DIST = "dist/client";
const MEDIA_DIR = join(DIST, "media");
const SOURCES = [
  process.env.ASSET_SOURCE_ORIGIN,
  "https://afslankstudio.lovable.app",
  "https://id-preview--74adbadc-98b5-4eb7-91c0-67c27439c7e9.lovable.app",
].filter(Boolean);

const TEXT_EXT = new Set([".html", ".js", ".css", ".json", ".txt", ".map"]);
const ASSET_RE = /\/__l5e\/assets-v1\/[A-Za-z0-9-]+\/[^"'`)\s\\]+/g;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

async function download(path) {
  for (const origin of SOURCES) {
    const res = await fetch(origin + path);
    if (res.ok) return Buffer.from(await res.arrayBuffer());
  }
  throw new Error(`Could not download uploaded asset: ${path}`);
}

const files = await walk(DIST);
const textFiles = files.filter((f) => TEXT_EXT.has(extname(f)));

const referenced = new Set();
const contents = new Map();
for (const file of textFiles) {
  const text = await readFile(file, "utf8");
  const matches = text.match(ASSET_RE);
  if (!matches) continue;
  contents.set(file, text);
  matches.forEach((m) => referenced.add(m));
}

if (referenced.size === 0) {
  console.log("[assets] no uploaded assets referenced — nothing to inline");
  process.exit(0);
}

await mkdir(MEDIA_DIR, { recursive: true });

const replacements = new Map();
for (const path of referenced) {
  const [, , , assetId, filename] = path.split("/");
  const localName = `${assetId.slice(0, 8)}-${filename}`;
  const target = join(MEDIA_DIR, localName);
  let cached = false;
  try {
    cached = (await stat(target)).size > 0;
  } catch {
    cached = false;
  }
  if (!cached) {
    const buffer = await download(path);
    await writeFile(target, buffer);
    console.log(`[assets] downloaded ${localName} (${buffer.length} bytes)`);
  }
  replacements.set(path, `/media/${localName}`);
}

for (const [file, text] of contents) {
  const rewritten = text.replace(ASSET_RE, (match) => replacements.get(match) ?? match);
  await writeFile(file, rewritten);
}

console.log(`[assets] inlined ${replacements.size} uploaded assets into ${MEDIA_DIR}`);
