/**
 * Centrale contentbron voor de website.
 * Pas hier behandelingen, prijzen, de maandactie, contactgegevens,
 * openingstijden en social media links aan.
 */

import ledFacialAsset from "@/assets/led-facial.png.asset.json";
import pdrnAsset from "@/assets/pdrn-meso-cocktail.png.asset.json";
import tCryo from "@/assets/t-cryo.jpg";
import tCryoPlus from "@/assets/t-cryo-plus.jpg";
import tEms from "@/assets/t-ems.jpg";
import tStarvac from "@/assets/t-starvac.jpg";
import tBallancer from "@/assets/t-ballancer.jpg";
import tVacustep from "@/assets/t-vacustep.jpg";
import tTanita from "@/assets/t-tanita.jpg";
import pBioHcgAsset from "@/assets/p-biohcg.png.asset.json";
import pRedulastiqueAsset from "@/assets/p-redulastique.png.asset.json";
import pMarcInbaneAsset from "@/assets/p-marcinbane.png.asset.json";

/** Groepen waarin de kaarten op de website worden verdeeld. */
export type TreatmentGroupId = "beauty" | "afslanken" | "producten";

export type Treatment = {
  id: string;
  /** Bepaalt onder welke categorie-subtitel de kaart valt. */
  group: TreatmentGroupId;
  /** Behandeling of product — bepaalt het label van de CTA. */
  kind: "behandeling" | "product";
  name: string;
  category: string;
  short: string;
  price?: string;
  duration?: string;
  image: string;
  imageAlt: string;
  description: string;
  forWho: string[];
  expect: string[];
  /** Wat de behandeling inhoudt — stap voor stap. */
  includes: string[];
  /** Optionele aanvullende informatie (voorwaarden, tips, opmerkingen). */
  extra?: string;
};

export const treatmentGroups: { id: TreatmentGroupId; label: string; intro?: string }[] = [
  {
    id: "afslanken",
    label: "Afslanken",
    intro: "Behandelingen gericht op figuur, huid en lichaamsomvang.",
  },
  {
    id: "beauty",
    label: "Beauty",
    intro: "Verzorgende gezichtsbehandelingen voor een verzorgde, stralende huid.",
  },
  {
    id: "producten",
    label: "Producten",
    intro: "Producten die je behandeling thuis ondersteunen.",
  },
];

export const treatments: Treatment[] = [
  // ── BEAUTY ────────────────────────────────────────────────────────────────
  {
    id: "led-facial",
    group: "beauty",
    kind: "behandeling",
    name: "Led facial",
    category: "Beauty",
    short: "Een rustige gezichtsbehandeling met ledlicht, afgestemd op jouw huid.",
    image: ledFacialAsset.url,
    imageAlt: "Vrouw ontspannen tijdens een led facial behandeling in een luxe studio",
    description:
      "Een gezichtsbehandeling waarbij ledlicht wordt gecombineerd met een zorgvuldige verzorging van de huid. De behandeling wordt rustig en op jouw tempo uitgevoerd. De definitieve omschrijving wordt later aangeleverd.",
    forWho: [
      "Je wilt je huid verzorgen en verwennen",
      "Je zoekt een rustige behandeling zonder hersteltijd",
      "Je wilt persoonlijk advies over je huid",
    ],
    includes: [
      "Korte huidanalyse en wensen bespreken",
      "Reiniging van de huid",
      "Behandeling met ledlicht",
      "Afsluitende verzorging en advies",
    ],
    expect: [
      "Een rustige behandelruimte",
      "Een behandeling op maat",
      "Advies over verzorging thuis",
    ],
    extra: "Duur, prijs en aantal aanbevolen behandelingen worden later aangeleverd.",
  },
  {
    id: "pdrn-meso-cocktail",
    group: "beauty",
    kind: "behandeling",
    name: "PDRN meso cocktail",
    category: "Beauty",
    short: "Een verfijnde huidbehandeling met een meso cocktail, gericht op huidverzorging.",
    image: pdrnAsset.url,
    imageAlt: "Meso PDRN cocktail ampullen voor een luxe huidbehandeling",
    description:
      "Een huidbehandeling waarbij een meso cocktail met PDRN wordt gebruikt. Tijdens de intake bespreken we of deze behandeling bij jouw huid en wensen past. De definitieve omschrijving wordt later aangeleverd.",
    forWho: [
      "Je wilt je huid gericht laten verzorgen",
      "Je zoekt een behandeling met persoonlijke begeleiding",
      "Je wilt eerst rustig advies voordat je start",
    ],
    includes: [
      "Intake en huidanalyse",
      "Voorbereiding en reiniging van de huid",
      "De behandeling met de meso cocktail",
      "Nazorgadvies",
    ],
    expect: [
      "Een persoonlijke intake",
      "Een zorgvuldige behandeling",
      "Duidelijke uitleg over de nazorg",
    ],
    extra: "Duur, prijs en voorwaarden worden later aangeleverd.",
  },

  // ── AFSLANKEN ─────────────────────────────────────────────────────────────
  {
    id: "tc-cryo",
    group: "afslanken",
    kind: "behandeling",
    name: "TC Cryo",
    category: "Afslanken",
    short: "Een figuurbehandeling met koudetechniek, gericht op specifieke zones.",
    image: tCryo,
    imageAlt: "Zachte witte handdoeken in een rustige, crèmekleurige behandelruimte",
    description:
      "Een behandeling met koudetechniek die gericht wordt ingezet op de zones die je wilt behandelen. Tijdens de intake bepalen we samen een passend plan. De definitieve omschrijving wordt later aangeleverd.",
    forWho: [
      "Je wilt gericht werken aan je figuur",
      "Je zoekt begeleiding met persoonlijke aandacht",
      "Je wilt eerst een intake en advies",
    ],
    includes: [
      "Intakegesprek en doelen bespreken",
      "Metingen en een behandelplan",
      "De behandeling zelf, rustig en op jouw tempo",
      "Nazorg- en leefstijladvies",
    ],
    expect: ["Een persoonlijke intake", "Een rustige behandeling", "Advies voor de periode erna"],
    extra: "Duur, prijs en het aantal aanbevolen behandelingen worden later aangeleverd.",
  },
  {
    id: "tc-cryo-plus",
    group: "afslanken",
    kind: "behandeling",
    name: "TC Cryo Plus",
    category: "Afslanken",
    short: "De uitgebreide variant van de TC Cryo behandeling.",
    image: tCryoPlus,
    imageAlt: "Behandelbank met crèmekleurige handdoeken en een modern behandelapparaat",
    description:
      "Een uitgebreidere variant van de TC Cryo behandeling. Tijdens de intake bespreken we welke variant het beste bij jouw wensen past. De definitieve omschrijving wordt later aangeleverd.",
    forWho: [
      "Je wilt een uitgebreider traject",
      "Je hebt meerdere zones die je wilt behandelen",
      "Je zoekt begeleiding van begin tot eind",
    ],
    includes: [
      "Intakegesprek en doelen bespreken",
      "Metingen en een behandelplan",
      "De uitgebreide behandeling",
      "Nazorg- en leefstijladvies",
    ],
    expect: [
      "Een persoonlijke intake",
      "Een uitgebreidere behandeling",
      "Begeleiding tijdens het traject",
    ],
    extra: "Duur, prijs en voorwaarden worden later aangeleverd.",
  },
  {
    id: "ems-bodysculpting-pro",
    group: "afslanken",
    kind: "behandeling",
    name: "EMS Bodysculpting Pro",
    category: "Afslanken",
    short: "Een bodysculpting behandeling waarbij de spieren worden geactiveerd.",
    image: tEms,
    imageAlt: "EMS-pads op de buik tijdens een behandeling in een warme, rustige studio",
    description:
      "Een behandeling waarbij met EMS-technologie de spieren worden geactiveerd terwijl jij rustig ligt. Tijdens de intake bespreken we jouw wensen. De definitieve omschrijving wordt later aangeleverd.",
    forWho: [
      "Je wilt aan je lichaam werken met begeleiding",
      "Je zoekt een behandeling die je rustig ondergaat",
      "Je combineert dit graag met andere behandelingen",
    ],
    includes: [
      "Intake en doelen bespreken",
      "Plaatsing van de applicators",
      "De behandeling in een opgebouwd programma",
      "Advies voor de periode erna",
    ],
    expect: ["Een persoonlijke intake", "Een comfortabele behandeling", "Advies op maat"],
    extra: "Duur, prijs en het aantal aanbevolen sessies worden later aangeleverd.",
  },
  {
    id: "starvac",
    group: "afslanken",
    kind: "behandeling",
    name: "Starvac",
    category: "Afslanken",
    short: "Een vacuümmassage behandeling voor lichaam en huid.",
    image: tStarvac,
    imageAlt: "Handstuk van een vacuümmassage-apparaat tijdens een beenbehandeling",
    description:
      "Een behandeling met vacuümmassage, gericht op het lichaam en de huid. De behandeling wordt afgestemd op jouw wensen. De definitieve omschrijving wordt later aangeleverd.",
    forWho: [
      "Je wilt je lichaam laten verzorgen",
      "Je zoekt een behandeling gericht op huid en figuur",
      "Je wilt eerst advies over de mogelijkheden",
    ],
    includes: [
      "Intake en wensen bespreken",
      "De vacuümmassage van de gekozen zones",
      "Aandacht voor tempo en intensiteit",
      "Afsluitend advies",
    ],
    expect: ["Een rustige behandeling", "Aandacht voor jouw comfort", "Advies voor thuis"],
    extra: "Duur, prijs en voorwaarden worden later aangeleverd.",
  },
  {
    id: "ballancer-lymfedrainage",
    group: "afslanken",
    kind: "behandeling",
    name: "Ballancer lymfedrainage",
    category: "Afslanken",
    short: "Een rustgevende drainagebehandeling met de Ballancer.",
    image: tBallancer,
    imageAlt: "Ontspannen benen onder een zachte deken in een warme behandelruimte",
    description:
      "Een rustgevende behandeling met de Ballancer, waarbij je comfortabel ligt terwijl de behandeling zijn werk doet. De definitieve omschrijving wordt later aangeleverd.",
    forWho: [
      "Je wilt een rustige, comfortabele behandeling",
      "Je combineert dit graag met een figuurbehandeling",
      "Je zoekt een moment voor jezelf",
    ],
    includes: [
      "Kort gesprek over jouw wensen",
      "De behandeling met de Ballancer",
      "Aandacht voor comfort en tempo",
      "Rustig nakomen met een glas water",
    ],
    expect: ["Zacht licht en rustige muziek", "Een comfortabele behandeling", "Tijd om na te komen"],
    extra: "Duur, prijs en combinatiemogelijkheden worden later aangeleverd.",
  },
  {
    id: "vacu-step",
    group: "afslanken",
    kind: "behandeling",
    name: "Vacu step",
    category: "Afslanken",
    short: "Rustig bewegen in de Vacu step, onder persoonlijke begeleiding.",
    image: tVacustep,
    imageAlt: "Modern stepapparaat in een lichte studio met eikenhouten vloer",
    description:
      "Bij de Vacu step beweeg je in een rustig tempo onder begeleiding. Tijdens de intake bespreken we of dit bij jouw wensen past. De definitieve omschrijving wordt later aangeleverd.",
    forWho: [
      "Je wilt rustig en begeleid bewegen",
      "Je combineert dit graag met een behandeltraject",
      "Je wilt eerst uitleg en advies",
    ],
    includes: [
      "Intake en uitleg over het apparaat",
      "Instellen op jouw niveau",
      "De sessie onder begeleiding",
      "Advies voor het vervolg",
    ],
    expect: ["Duidelijke uitleg", "Begeleiding tijdens de sessie", "Een sessie in jouw tempo"],
    extra: "Duur, prijs en het aantal aanbevolen sessies worden later aangeleverd.",
  },
  {
    id: "tanita-weegschaal",
    group: "afslanken",
    kind: "behandeling",
    name: "Tanita weegschaal",
    category: "Afslanken",
    short: "Een meting met de Tanita weegschaal als vertrekpunt van je traject.",
    image: tTanita,
    imageAlt: "Elegante witte weegschaal op een eikenhouten vloer in een lichte ruimte",
    description:
      "Met de Tanita weegschaal brengen we jouw uitgangspunt in kaart, zodat we jouw traject goed kunnen volgen. De definitieve omschrijving wordt later aangeleverd.",
    forWho: [
      "Je wilt je voortgang inzichtelijk maken",
      "Je start met een behandeltraject",
      "Je wilt een duidelijk vertrekpunt",
    ],
    includes: [
      "Uitleg over de meting",
      "De meting zelf",
      "Bespreken van de uitkomsten",
      "Vastleggen als vertrekpunt van jouw traject",
    ],
    expect: ["Een korte, zorgvuldige meting", "Rustige uitleg", "Inzicht in jouw vertrekpunt"],
    extra: "Wordt vaak gecombineerd met een intake of behandeltraject.",
  },

  // ── PRODUCTEN ─────────────────────────────────────────────────────────────
  {
    id: "bio-hcg-afslankkuur",
    group: "producten",
    kind: "product",
    name: "Bio HCG afslankkuur",
    category: "Product",
    short: "Een kuur die je traject thuis ondersteunt, met begeleiding vanuit de studio.",
    image: pBioHcgAsset.url,
    imageAlt: "Elegant druppelflesje met gouden dop op een crèmekleurige sokkel",
    description:
      "Een kuur die je in overleg met ons kunt gebruiken naast je behandelingen. Wij geven uitleg over het gebruik en begeleiden je gedurende de kuur. De definitieve omschrijving wordt later aangeleverd.",
    forWho: [
      "Je volgt een traject in de studio",
      "Je wilt thuis ondersteuning bij je traject",
      "Je wilt begeleiding en uitleg",
    ],
    includes: [
      "Uitleg over de kuur",
      "Persoonlijk gebruiksadvies",
      "Begeleiding tijdens de kuur",
      "Evaluatie en vervolgadvies",
    ],
    expect: ["Duidelijke uitleg", "Persoonlijke begeleiding", "Advies op maat"],
    extra: "Prijs en verkrijgbaarheid worden later aangeleverd.",
  },
  {
    id: "redulastique-slimming-creme",
    group: "producten",
    kind: "product",
    name: "Redulastique slimming crème",
    category: "Product",
    short: "Een verzorgende crème voor het lichaam, voor dagelijks gebruik thuis.",
    image: pRedulastiqueAsset.url,
    imageAlt: "Witte crèmepot op crèmekleurige zijde in zacht licht",
    description:
      "Een verzorgende crème die je thuis kunt gebruiken naast je behandelingen. Wij leggen uit hoe je de crème het beste toepast. De definitieve omschrijving wordt later aangeleverd.",
    forWho: [
      "Je wilt je huid thuis verzorgen",
      "Je volgt een behandeltraject",
      "Je zoekt een eenvoudige dagelijkse routine",
    ],
    includes: [
      "Uitleg over het product",
      "Advies over de juiste toepassing",
      "Afstemming op jouw huid",
      "Vervolgadvies",
    ],
    expect: ["Persoonlijk advies", "Uitleg over het gebruik", "Een eenvoudige routine"],
    extra: "Prijs en inhoud worden later aangeleverd.",
  },
  {
    id: "marc-inbane-natural-tanning",
    group: "producten",
    kind: "product",
    name: "Marc Inbane natural tanning",
    category: "Product",
    short: "Een natuurlijke tanning voor een egale, warme gloed zonder zon.",
    image: pMarcInbaneAsset.url,
    imageAlt: "Bronskleurige tanning-fles met applicatiehandschoen op crèmekleurig linnen",
    description:
      "Een natuurlijke tanning waarmee je een egale, warme gloed geeft aan je huid. Wij geven uitleg over het aanbrengen en onderhoud. De definitieve omschrijving wordt later aangeleverd.",
    forWho: [
      "Je wilt een natuurlijke gloed zonder zon",
      "Je hebt een gelegenheid of vakantie op de planning",
      "Je wilt advies over het aanbrengen",
    ],
    includes: [
      "Uitleg over het product",
      "Advies over het voorbereiden van de huid",
      "Tips voor een egaal resultaat",
      "Advies over onderhoud",
    ],
    expect: ["Persoonlijk advies", "Uitleg over het aanbrengen", "Een natuurlijk resultaat"],
    extra: "Prijs en verkrijgbaarheid worden later aangeleverd.",
  },
];

export const actie = {
  title: "Voorbeeldactie van de maand",
  subtitle: "Placeholder — vervang dit iedere maand door de actuele actie.",
  description:
    "Een korte omschrijving van de actie van deze maand. Vertel in twee of drie regels wat de behandeling inhoudt en voor wie deze fijn is.",
  oldPrice: "€ 00,00",
  newPrice: "€ 00,00",
  period: "Geldig van 1 t/m 31 deze maand",
  highlights: ["Inclusief intakegesprek", "Op afspraak", "Zolang de agenda het toelaat"],
};

export const contact = {
  studio: "Afslankstudio Velserbroek",
  address: "Straatnaam 00, 1991 XX Velserbroek",
  phone: "0000 - 000 000",
  email: "info@afslankstudiovelserbroek.nl",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  hours: [
    { day: "Maandag", time: "Op afspraak" },
    { day: "Dinsdag", time: "09:00 – 17:00" },
    { day: "Woensdag", time: "09:00 – 17:00" },
    { day: "Donderdag", time: "09:00 – 21:00" },
    { day: "Vrijdag", time: "09:00 – 17:00" },
    { day: "Zaterdag", time: "Op afspraak" },
    { day: "Zondag", time: "Gesloten" },
  ],
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Behandelingen", href: "#behandelingen" },
  { label: "Actie", href: "#actie" },
  { label: "Over ons", href: "#over-ons" },
  { label: "Contact", href: "#contact" },
];
