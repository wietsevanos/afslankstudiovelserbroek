/**
 * Centrale contentbron voor de website.
 * Pas hier behandelingen, prijzen, de maandactie, contactgegevens,
 * openingstijden en social media links aan.
 */

import ledFacialAsset from "@/assets/led-facial.png.asset.json";
import pdrnAsset from "@/assets/pdrn-meso-cocktail-v2.png.asset.json";
import tCryoAsset from "@/assets/t-cryo.png.asset.json";
import tCryoPlusAsset from "@/assets/t-cryo-plus.png.asset.json";
import tEmsAsset from "@/assets/t-ems.png.asset.json";
import tStarvacAsset from "@/assets/t-starvac.png.asset.json";
import tBallancerAsset from "@/assets/t-ballancer.png.asset.json";
import tVacustepAsset from "@/assets/t-vacustep.png.asset.json";
import tTanitaAsset from "@/assets/t-tanita.png.asset.json";
import pBioHcgAsset from "@/assets/p-biohcg.png.asset.json";
import pRedulastiqueAsset from "@/assets/p-redulastique.png.asset.json";


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
  /** Uitgebreide tekstsecties in de popup (optioneel). */
  details?: TreatmentDetailSection[];
};

export type TreatmentDetailSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

export const treatmentGroups: { id: TreatmentGroupId; label: string; intro?: string }[] = [
  {
    id: "afslanken",
    label: "Afslanken",
    intro: "Behandelingen gericht op gewichtsverlies, huidverstrakking en huidverbetering.",
  },
  {
    id: "beauty",
    label: "Beauty",
    intro: "Verzorgende gezichtsbehandelingen voor een jongere en stralende huid.",
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
      "De Hydrogen LED Facial combineert meerdere technieken in één uitgebreide gezichtsbehandeling, gericht op een grondig gereinigde, verzorgde en stralende huid. Afhankelijk van jouw huid en wensen kunnen verschillende technieken worden gecombineerd.",
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
    extra:
      "Na de behandeling voelt de huid doorgaans schoon, verzorgd en fris aan. De combinatie van technieken maakt deze behandeling geschikt wanneer je jouw huid een extra boost wilt geven.",
    details: [
      {
        title: "Mogelijke technieken",
        list: [
          "Hydro dermabrasie voor een intensieve reiniging",
          "Skin scrubber en water oxygen spray",
          "Radio frequency en ultrasound",
          "LED lichttherapie en een verkoelende afsluiting",
        ],
      },
    ],
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
      "Een verfijnde huidbehandeling waarbij een meso cocktail met PDRN wordt gebruikt. PDRN (polydeoxyribonucleotide) is een werkstof die in de huidverzorging wordt toegepast ter ondersteuning van de huidkwaliteit. Tijdens de intake bespreken we of deze behandeling bij jouw huid en wensen past.",
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
    extra:
      "De behandeling wordt altijd voorafgegaan door een intake en huidanalyse. Welke aanpak past, hangt af van jouw huidconditie en wensen.",
    details: [
      {
        title: "Hoe werkt de behandeling?",
        paragraphs: [
          "Na reiniging wordt de meso cocktail met PDRN zorgvuldig op de huid aangebracht. Voor een optimaal resultaat kan een kuur van meerdere behandelingen worden geadviseerd.",
        ],
      },
    ],
  },

  // ── AFSLANKEN ─────────────────────────────────────────────────────────────
  {
    id: "tc-cryo",
    group: "afslanken",
    kind: "behandeling",
    name: "TC Cryo",
    category: "Afslanken",
    short: "Een figuurbehandeling met koudetechniek, gericht op specifieke zones.",
    image: tCryoAsset.url,
    imageAlt: "Zachte witte handdoeken in een rustige, crèmekleurige behandelruimte",
    description:
      "De TC Cryo is een medisch gecertificeerd apparaat dat gebruikmaakt van gecontroleerde temperatuurwisselingen. De behandeling kan worden ingezet voor verschillende lichaamszones en richt zich onder andere op lokale vetophopingen, huidverbetering en lichaamscontouring.",
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
    extra:
      "Welke behandeling en intensiteit geschikt zijn, hangt af van het te behandelen gebied en jouw persoonlijke situatie. Tijdens een intake bespreken we jouw wensen en bekijken we welke behandeling het beste bij je past.",
    details: [
      {
        title: "Hoe werkt TC Cryo?",
        paragraphs: [
          "Het te behandelen gebied wordt afwisselend gekoeld en verwarmd, waardoor het onderliggende weefsel gericht wordt gestimuleerd. Niet-invasief, zonder injecties of operaties.",
        ],
      },
      {
        title: "Inzetbaar bij",
        list: ["Lokale vetophopingen", "Lichaamscontouring", "Cellulite", "Huidverbetering"],
      },
    ],
  },
  {
    id: "tc-cryo-plus",
    group: "afslanken",
    kind: "behandeling",
    name: "TC Cryo Plus",
    category: "Afslanken",
    short: "De uitgebreide variant van de TC Cryo behandeling.",
    image: tCryoPlusAsset.url,
    imageAlt: "Behandelbank met crèmekleurige handdoeken en een modern behandelapparaat",
    description:
      "De TC Cryo Plus is de uitgebreidere variant van de TC Cryo behandeling, met dezelfde gecontroleerde temperatuurwisselingen maar met meer mogelijkheden qua zones en intensiteit. Tijdens de intake bespreken we welke variant het beste bij jouw wensen past.",
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
    extra:
      "De TC Cryo Plus is niet-invasief; er zijn geen injecties of operaties nodig. Welke instellingen geschikt zijn, hangt af van het gebied en jouw persoonlijke situatie.",
    details: [
      {
        title: "Hoe werkt TC Cryo Plus?",
        paragraphs: [
          "Dezelfde temperatuurwisselingen als de TC Cryo, met ruimere mogelijkheden voor grotere of meerdere zones. Na afloop kun je je dagelijkse activiteiten doorgaans hervatten.",
        ],
      },
    ],
  },
  {
    id: "ems-bodysculpting-pro",
    group: "afslanken",
    kind: "behandeling",
    name: "EMS Bodysculpting Pro",
    category: "Afslanken",
    short: "Een bodysculpting behandeling waarbij de spieren worden geactiveerd.",
    image: tEmsAsset.url,
    imageAlt: "EMS-pads op de buik tijdens een behandeling in een warme, rustige studio",
    description:
      "Wil je je buik, billen, benen of armen extra verstevigen en meer vorm geven? Met BodySculpting PRO worden de spieren intensief gestimuleerd door middel van krachtige elektromagnetische pulsen — vergelijkbaar met spiercontracties tijdens een intensieve training.",
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
    extra:
      "Het uiteindelijke resultaat verschilt per persoon en is onder andere afhankelijk van je uitgangssituatie en leefstijl. BodySculpting PRO is een mooie aanvulling op een gezonde leefstijl en regelmatige beweging.",
    details: [
      {
        title: "Hoe werkt BodySculpting PRO?",
        paragraphs: [
          "Applicatoren stimuleren de spieren met krachtige elektromagnetische pulsen, waardoor ze herhaaldelijk samentrekken — zonder dat je zelf actief beweegt.",
        ],
      },
      {
        title: "Behandelbare zones",
        list: ["Buik", "Billen", "Benen", "Armen"],
      },
    ],
  },
  {
    id: "starvac",
    group: "afslanken",
    kind: "behandeling",
    name: "Starvac",
    category: "Afslanken",
    short: "Een vacuümmassage behandeling voor lichaam en huid.",
    image: tStarvacAsset.url,
    imageAlt: "Handstuk van een vacuümmassage-apparaat tijdens een beenbehandeling",
    description:
      "De Starvac UX 100 is een lichaamsbehandeling waarbij gebruik wordt gemaakt van vacuümtechnologie en massage. De behandeling stimuleert de doorbloeding van het behandelde gebied en kan worden ingezet bij lokale vetophopingen en cellulite.",
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
    extra:
      "Een behandelplan wordt afgestemd op jouw wensen en het gebied dat je wilt laten behandelen.",
    details: [
      {
        title: "Hoe werkt de Starvac?",
        paragraphs: [
          "Met gecontroleerde vacuümdruk worden huid en weefsel gemasseerd, waardoor de lokale doorbloeding wordt gestimuleerd. Inzetbaar op verschillende lichaamszones.",
        ],
      },
    ],
  },
  {
    id: "ballancer-lymfedrainage",
    group: "afslanken",
    kind: "behandeling",
    name: "Ballancer lymfedrainage",
    category: "Afslanken",
    short: "Een rustgevende drainagebehandeling met de Ballancer.",
    image: tBallancerAsset.url,
    imageAlt: "Ontspannen benen onder een zachte deken in een warme behandelruimte",
    description:
      "De Ballancer 606 is een vorm van compressietherapie waarbij verschillende delen van het lichaam afwisselend worden samengedrukt. De behandeling stimuleert de bloed- en lymfecirculatie en kan helpen bij het afvoeren van overtollig vocht.",
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
    extra:
      "De Ballancer is niet alleen gericht op lichaamsverbetering, maar is ook een heerlijk ontspannend moment voor jezelf.",
    details: [
      {
        title: "Hoe werkt de Ballancer?",
        paragraphs: [
          "Je neemt plaats in een speciaal pak waarvan de compressiezones zich ritmisch met lucht vullen. Het voelt als een uitgebreide massage en wordt als zeer ontspannend ervaren.",
        ],
      },
    ],
  },
  {
    id: "vacu-step",
    group: "afslanken",
    kind: "behandeling",
    name: "Vacu step",
    category: "Afslanken",
    short: "Rustig bewegen in de Vacu step, onder persoonlijke begeleiding.",
    image: tVacustepAsset.url,
    imageAlt: "Modern stepapparaat in een lichte studio met eikenhouten vloer",
    description:
      "De Vacustep combineert actief bewegen met vacuümtechnologie. Tijdens de behandeling wandel je op een speciaal apparaat terwijl het onderlichaam zich in een gecontroleerde vacuümruimte bevindt. De behandeling richt zich voornamelijk op de buik, billen en benen.",
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
    extra:
      "De intensiteit en duur van de behandeling worden afgestemd op jouw conditie en persoonlijke doelen.",
    details: [
      {
        title: "Hoe werkt Vacustep?",
        paragraphs: [
          "Je wandelt op een speciaal apparaat terwijl het onderlichaam zich in een gecontroleerde vacuümruimte bevindt. Zo combineer je bewegen met stimulatie van de doorbloeding.",
        ],
      },
    ],
  },
  {
    id: "tanita-weegschaal",
    group: "afslanken",
    kind: "behandeling",
    name: "Tanita weegschaal",
    category: "Afslanken",
    short: "Een meting met de Tanita weegschaal als vertrekpunt van je traject.",
    image: tTanitaAsset.url,
    imageAlt: "Elegante witte weegschaal op een eikenhouten vloer in een lichte ruimte",
    description:
      "Alleen je gewicht vertelt niet het hele verhaal. Met een Tanita lichaamsanalyse krijg je meer inzicht in de samenstelling van je lichaam — naast je gewicht kan een meting onder andere inzicht geven in je vetmassa en spiermassa.",
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
    extra:
      "Zo kijk je niet alleen naar het getal op de weegschaal, maar naar het grotere geheel. Wordt vaak gecombineerd met een intake of behandeltraject.",
    details: [
      {
        title: "Waarom een lichaamsanalyse?",
        paragraphs: [
          "Naast je gewicht geeft een meting inzicht in onder andere je vet- en spiermassa. Zo heb je een duidelijk vertrekpunt en kun je je voortgang volgen.",
        ],
      },
    ],
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
    imageAlt: "Beter in Balans Bio HCG afslankkuur verpakking met tabletten",
    description:
      "De Bio HCG+ afslankkuur is een afslankprogramma waarbij een caloriearm voedingsprogramma centraal staat. Tijdens de kuur volg je een vooraf opgesteld voedingsschema en wordt je voortgang begeleid.",
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
    extra:
      "Afvallen is afhankelijk van meerdere factoren, waaronder voeding, beweging en leefstijl. Resultaten verschillen daarom per persoon. Wil je weten of deze kuur bij jou past? Tijdens een kennismaking bespreken we jouw wensen en situatie.",
    details: [
      {
        title: "Hoe werkt de kuur?",
        paragraphs: [
          "De kuur draait om een caloriearm voedingsprogramma met duidelijke richtlijnen. Je wordt begeleid en de Tanita meting kan je voortgang inzichtelijk maken.",
        ],
      },
    ],
  },
  {
    id: "redulastique-slimming-creme",
    group: "producten",
    kind: "product",
    name: "Redulastique slimming crème",
    category: "Product",
    short: "Een verzorgende crème voor het lichaam, voor dagelijks gebruik thuis.",
    image: pRedulastiqueAsset.url,
    imageAlt: "Redulastique slimming en firming gel tube met hyaluron booster",
    description:
      "Redulastique is een verzorgende crème voor het lichaam, bedoeld voor dagelijks gebruik thuis. De formule met onder andere hyaluronzuur ondersteunt de dagelijkse verzorging van de huid, bijvoorbeeld als aanvulling op een behandeltraject in de studio.",
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
    extra:
      "Wij adviseren je graag over de juiste toepassing, afgestemd op jouw huid en behandeltraject. Vraag ernaar tijdens je behandeling of intake.",
    details: [
      {
        title: "Hoe gebruik je de crème?",
        paragraphs: [
          "Breng de crème dagelijks aan op een gereinigde huid en masseer zachtjes in. Voor advies over de combinatie met behandelingen kun je altijd bij ons terecht.",
        ],
      },
    ],
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
  address: "Klompenmakerstraat 7, 1991 JJ Velserbroek",
  phone: "023 549 0556",
  email: "info@afslankstudiovelserbroek.nl",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  hours: [
    { day: "Maandag", time: "09:00 – 17:00" },
    { day: "Dinsdag", time: "09:00 – 17:00" },
    { day: "Woensdag", time: "09:00 – 13:00" },
    { day: "Donderdag", time: "09:00 – 17:00" },
    { day: "Vrijdag", time: "09:00 – 17:00" },
    { day: "Zaterdag", time: "09:30 – 13:00" },
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
