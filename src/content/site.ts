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

export type TreatmentDetailSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

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
  /** Hoofdtekst in de popup. Meerdere alinea's scheiden met "\n\n". */
  description: string;
  /** Uitgebreide tekstsecties in de popup. */
  details: TreatmentDetailSection[];
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
    short: "Complete gezichtsbehandeling voor huidverbetering",
    image: ledFacialAsset.url,
    imageAlt: "Vrouw ontspannen tijdens een led facial behandeling in een luxe studio",
    description:
      "De Hydrogen LED Facial combineert meerdere technieken in één uitgebreide gezichtsbehandeling. De behandeling is gericht op een grondig gereinigde, verzorgde en stralende huid.\n\nAfhankelijk van jouw huid en wensen kunnen verschillende technieken worden gecombineerd.",
    details: [
      {
        title: "De behandeling",
        paragraphs: ["De Hydrogen LED Facial kan verschillende technieken bevatten, waaronder:"],
        list: [
          "Hydro dermabrasie — een intensieve reiniging waarbij de huid wordt gereinigd en verzorgd.",
          "Skin scrubber — een behandeling met ultrasone trillingen die helpt bij het reinigen en verzorgen van de huid.",
          "Water oxygen spray — een zachte behandeling die vooral prettig kan zijn voor een gevoelige of vochtarme huid.",
          "Ultrasound — maakt gebruik van hoogfrequente geluidsgolven en kan worden ingezet om verzorgende werkstoffen te ondersteunen.",
          "Radio frequency — gebruikt radiofrequente energie om warmte in de huidlagen op te wekken. Dit wordt toegepast voor huidverzorging en het ondersteunen van een stevigere uitstraling.",
          "LED lichttherapie — verschillende kleuren LED licht worden gebruikt voor verschillende huiddoelen. De gekozen kleur en toepassing worden afgestemd op de huid.",
          "Koude hamer — een verkoelende behandeling die de huid na de andere technieken helpt kalmeren.",
        ],
      },
      {
        title: "Wat kun je verwachten?",
        paragraphs: [
          "Na de behandeling voelt de huid doorgaans schoon, verzorgd en fris aan. De combinatie van technieken maakt de Hydrogen LED Facial geschikt als uitgebreide behandeling wanneer je jouw huid een extra boost wilt geven.",
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
    short: "Huidverzorging met een meso cocktail met PDRN",
    image: pdrnAsset.url,
    imageAlt: "Meso PDRN cocktail ampullen voor een luxe huidbehandeling",
    description:
      "Een huidbehandeling waarbij een meso cocktail met PDRN (polydeoxyribonucleotide) wordt gebruikt. PDRN is een werkstof die in de huidverzorging wordt toegepast ter ondersteuning van de huidkwaliteit.",
    details: [
      {
        title: "Hoe werkt de behandeling?",
        paragraphs: [
          "Na reiniging van de huid wordt de meso cocktail zorgvuldig aangebracht. De behandeling wordt altijd voorafgegaan door een intake en huidanalyse, zodat de aanpak wordt afgestemd op jouw huidconditie en wensen.",
        ],
      },
      {
        title: "Goed om te weten",
        paragraphs: [
          "Voor een optimaal resultaat kan een kuur van meerdere behandelingen worden geadviseerd. Tijdens een intake bespreken we of deze behandeling bij jouw huid en wensen past.",
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
    short: "Gerichte lichaamsbehandeling met temperatuurwisselingen",
    image: tCryoAsset.url,
    imageAlt: "Zachte witte handdoeken in een rustige, crèmekleurige behandelruimte",
    description:
      "De TC Cryo is een medisch gecertificeerd apparaat dat gebruikmaakt van gecontroleerde temperatuurwisselingen. De behandeling kan worden ingezet voor verschillende lichaamszones en richt zich onder andere op lokale vetophopingen, huidverbetering en lichaamscontouring.",
    details: [
      {
        title: "Hoe werkt TC Cryo?",
        paragraphs: [
          "Tijdens de behandeling wordt het te behandelen gebied afwisselend gekoeld en verwarmd. Door deze temperatuurwisselingen wordt het onderliggende weefsel gericht gestimuleerd.",
          "De behandeling is niet-invasief en er zijn geen injecties of operaties nodig.",
        ],
      },
      {
        title: "Waarvoor kan TC Cryo worden ingezet?",
        paragraphs: [
          "De TC Cryo kan worden toegepast op verschillende lichaamsdelen en wordt onder andere gebruikt bij:",
        ],
        list: [
          "lokale vetophopingen",
          "lichaamscontouring",
          "cellulite",
          "huidverbetering",
          "ondersteuning van herstel en doorbloeding",
        ],
      },
      {
        title: "Wat kun je verwachten?",
        paragraphs: [
          "Een behandeling duurt relatief kort en je kunt na afloop je dagelijkse activiteiten doorgaans weer hervatten. Voor een optimaal resultaat kan een behandelkuur worden geadviseerd.",
          "Welke behandeling en intensiteit geschikt zijn, hangt af van het te behandelen gebied en jouw persoonlijke situatie. Tijdens een intake bespreken we jouw wensen en bekijken we welke behandeling het beste bij je past.",
        ],
      },
    ],
  },
  {
    id: "tc-cryo-plus",
    group: "afslanken",
    kind: "behandeling",
    name: "TC Cryo Plus",
    category: "Afslanken",
    short: "De uitgebreide variant van de TC Cryo behandeling",
    image: tCryoPlusAsset.url,
    imageAlt: "Behandelbank met crèmekleurige handdoeken en een modern behandelapparaat",
    description:
      "De TC Cryo Plus werkt met dezelfde gecontroleerde temperatuurwisselingen als de TC Cryo, maar biedt ruimere mogelijkheden qua zones en intensiteit. De behandeling is niet-invasief; er zijn geen injecties of operaties nodig.",
    details: [
      {
        title: "Hoe werkt TC Cryo Plus?",
        paragraphs: [
          "Tijdens de behandeling wordt het te behandelen gebied afwisselend gekoeld en verwarmd, waardoor het onderliggende weefsel gericht wordt gestimuleerd. Door de uitgebreidere opzet kunnen grotere of meerdere zones in één behandeling worden meegenomen.",
        ],
      },
      {
        title: "Waarvoor kan TC Cryo Plus worden ingezet?",
        list: [
          "lokale vetophopingen",
          "lichaamscontouring",
          "cellulite",
          "huidverbetering",
          "versteviging van de huid",
        ],
      },
      {
        title: "Wat kun je verwachten?",
        paragraphs: [
          "Je kunt na afloop je dagelijkse activiteiten doorgaans weer hervatten. Voor een optimaal resultaat kan een behandelkuur worden geadviseerd.",
          "Welke instellingen en intensiteit geschikt zijn, hangt af van het te behandelen gebied en jouw persoonlijke situatie. Tijdens een intake bespreken we welke variant het beste bij jouw wensen past.",
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
    short: "Intensieve spierbehandeling voor een strakker lichaam",
    image: tEmsAsset.url,
    imageAlt: "EMS-pads op de buik tijdens een behandeling in een warme, rustige studio",
    description:
      "Wil je je buik, billen, benen of armen extra verstevigen en meer vorm geven? Met BodySculpting PRO worden de spieren intensief gestimuleerd door middel van krachtige elektromagnetische pulsen.\n\nDe behandeling is gericht op spiercontracties die je normaal gesproken tijdens een intensieve training uitvoert.",
    details: [
      {
        title: "Hoe werkt BodySculpting PRO?",
        paragraphs: [
          "Tijdens de behandeling worden speciale applicatoren op het te behandelen lichaamsdeel geplaatst. Deze stimuleren de spieren met krachtige elektromagnetische pulsen, waardoor de spieren herhaaldelijk samentrekken.",
          "Hierdoor worden de spieren intensief geactiveerd, zonder dat je zelf actief hoeft te bewegen.",
        ],
      },
      {
        title: "Welke lichaamsdelen kunnen worden behandeld?",
        paragraphs: ["BodySculpting PRO kan worden ingezet voor:"],
        list: ["buik", "billen", "benen", "armen"],
      },
      {
        title: "Wanneer zie je resultaat?",
        paragraphs: [
          "Na een behandeling kan het behandelde gebied direct anders aanvoelen. Voor zichtbare resultaten zijn meerdere behandelingen nodig. Het uiteindelijke resultaat verschilt per persoon en is onder andere afhankelijk van je uitgangssituatie en leefstijl.",
          "De behandeling kan worden gebruikt om spieren te verstevigen en het lichaam meer vorm te geven. BodySculpting PRO is een mooie aanvulling op een gezonde leefstijl en regelmatige beweging.",
        ],
      },
    ],
  },
  {
    id: "starvac",
    group: "afslanken",
    kind: "behandeling",
    name: "Starvac",
    category: "Afslanken",
    short: "Lichaamsbehandeling met vacuümtechniek",
    image: tStarvacAsset.url,
    imageAlt: "Handstuk van een vacuümmassage-apparaat tijdens een beenbehandeling",
    description:
      "De Starvac UX 100 is een lichaamsbehandeling waarbij gebruik wordt gemaakt van vacuümtechnologie en massage. De behandeling stimuleert de doorbloeding van het behandelde gebied en kan worden ingezet bij lokale vetophopingen en cellulite.",
    details: [
      {
        title: "Hoe werkt de Starvac?",
        paragraphs: [
          "Tijdens de behandeling wordt met gecontroleerde vacuümdruk op het weefsel gewerkt. Hierdoor worden de huid en het onderliggende weefsel gemasseerd en wordt de lokale circulatie gestimuleerd.",
          "De behandeling kan worden toegepast op verschillende lichaamszones.",
        ],
      },
      {
        title: "Waarvoor wordt de Starvac gebruikt?",
        paragraphs: ["De Starvac UX 100 wordt onder andere ingezet voor:"],
        list: [
          "lokale vetophopingen",
          "cellulite",
          "huidverbetering",
          "stimulatie van de doorbloeding",
          "lichaamscontouring",
        ],
      },
      {
        title: "Goed om te weten",
        paragraphs: [
          "Een behandelplan wordt afgestemd op jouw wensen en het gebied dat je wilt laten behandelen.",
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
    short: "Compressietherapie voor een ontspannen en licht gevoel",
    image: tBallancerAsset.url,
    imageAlt: "Ontspannen benen onder een zachte deken in een warme behandelruimte",
    description:
      "De Ballancer 606 is een vorm van compressietherapie waarbij verschillende delen van het lichaam afwisselend worden samengedrukt.\n\nDe behandeling stimuleert de bloed- en lymfecirculatie en kan helpen bij het afvoeren van overtollig vocht.",
    details: [
      {
        title: "Hoe werkt de Ballancer?",
        paragraphs: [
          "Je neemt plaats in een speciaal pak waarin verschillende compressiezones zitten. Deze zones vullen zich achter elkaar met lucht, waardoor een aangename, ritmische druk ontstaat.",
          "De behandeling voelt als een uitgebreide massage en wordt door veel mensen als zeer ontspannend ervaren.",
        ],
      },
      {
        title: "Waarvoor kan de Ballancer worden ingezet?",
        paragraphs: ["De Ballancer kan onder andere worden gebruikt voor:"],
        list: [
          "stimulatie van de lymfecirculatie",
          "ondersteuning bij vochtophoping",
          "stimulatie van de bloedsomloop",
          "zware of vermoeide benen",
          "ontspanning na het sporten",
          "ondersteuning bij lichaamsbehandelingen",
        ],
      },
      {
        title: "Goed om te weten",
        paragraphs: [
          "De Ballancer is daarmee niet alleen gericht op lichaamsverbetering, maar is ook een heerlijk ontspannend moment voor jezelf.",
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
    short: "Bewegen in een gecontroleerde vacuümomgeving",
    image: tVacustepAsset.url,
    imageAlt: "Modern stepapparaat in een lichte studio met eikenhouten vloer",
    description:
      "De Vacustep combineert actief bewegen met vacuümtechnologie. Tijdens de behandeling wandel je op een speciaal apparaat terwijl het onderlichaam zich in een gecontroleerde vacuümruimte bevindt.\n\nDe behandeling richt zich voornamelijk op de buik, billen en benen.",
    details: [
      {
        title: "Hoe werkt Vacustep?",
        paragraphs: [
          "Het vacuüm stimuleert de doorbloeding van het behandelde gebied terwijl je tegelijkertijd actief beweegt. Hierdoor ontstaat een combinatie van beweging en vacuümstimulatie.",
        ],
      },
      {
        title: "Wat kun je verwachten?",
        paragraphs: [
          "De Vacustep is geschikt voor mensen die gericht aan hun conditie en lichaamsvorm willen werken. Regelmatige behandelingen kunnen worden gecombineerd met gezonde voeding en voldoende beweging.",
          "De intensiteit en duur van de behandeling worden afgestemd op jouw conditie en persoonlijke doelen.",
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
    short: "Inzicht in je lichaamssamenstelling",
    image: tTanitaAsset.url,
    imageAlt: "Elegante witte weegschaal op een eikenhouten vloer in een lichte ruimte",
    description:
      "Alleen je gewicht vertelt niet het hele verhaal. Met een Tanita lichaamsanalyse krijg je meer inzicht in de samenstelling van je lichaam.\n\nNaast je gewicht kan een meting onder andere inzicht geven in je vetmassa en spiermassa.",
    details: [
      {
        title: "Waarom een lichaamsanalyse?",
        paragraphs: [
          "Een lichaamsanalyse is vooral interessant wanneer je bezig bent met afvallen, fitter worden of je lichaamssamenstelling wilt verbeteren.",
          "Door metingen op verschillende momenten met elkaar te vergelijken, kun je beter zien welke veranderingen er plaatsvinden.",
        ],
      },
      {
        title: "Een handig startpunt",
        paragraphs: [
          "De Tanita meting kan worden gebruikt als uitgangspunt voor een persoonlijk traject en om je voortgang gedurende een behandeling of leefstijlverandering te volgen. Zo kijk je niet alleen naar het getal op de weegschaal, maar naar het grotere geheel.",
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
    short: "Persoonlijke begeleiding bij afvallen",
    image: pBioHcgAsset.url,
    imageAlt: "Beter in Balans Bio HCG afslankkuur verpakking met tabletten",
    description:
      "De Bio HCG+ afslankkuur is een afslankprogramma waarbij een caloriearm voedingsprogramma centraal staat.\n\nTijdens de kuur volg je een vooraf opgesteld voedingsschema en wordt je voortgang begeleid.",
    details: [
      {
        title: "Hoe werkt de kuur?",
        paragraphs: [
          "De aanpak draait voornamelijk om een gecontroleerde calorie-inname en duidelijke voedingsrichtlijnen. Het doel is om op een gestructureerde manier gewicht te verliezen.",
          "Tijdens het traject is het belangrijk om de voorgeschreven voedingsrichtlijnen goed te volgen en voldoende aandacht te besteden aan je dagelijkse leefstijl.",
        ],
      },
      {
        title: "Persoonlijke begeleiding",
        paragraphs: [
          "Iedereen begint vanuit een andere situatie. Daarom wordt tijdens het traject gekeken naar jouw doelstellingen en voortgang.",
          "De Tanita lichaamsanalyse kan hierbij eventueel worden gebruikt om veranderingen in je lichaamssamenstelling inzichtelijk te maken.",
        ],
      },
      {
        title: "Belangrijk om te weten",
        paragraphs: [
          "Afvallen is uiteindelijk afhankelijk van meerdere factoren, waaronder voeding, beweging en leefstijl. Resultaten verschillen daarom per persoon.",
          "Wil je weten of deze afslankkuur bij jou past? Tijdens een kennismaking kunnen we jouw wensen en situatie bespreken.",
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
    short: "Verzorgende lichaamscrème voor dagelijks gebruik",
    image: pRedulastiqueAsset.url,
    imageAlt: "Redulastique slimming en firming gel tube met hyaluron booster",
    description:
      "Redulastique is een verzorgende crème voor het lichaam, bedoeld voor dagelijks gebruik thuis. De formule met onder andere hyaluronzuur ondersteunt de dagelijkse verzorging van de huid, bijvoorbeeld als aanvulling op een behandeltraject in de studio.",
    details: [
      {
        title: "Hoe gebruik je de crème?",
        paragraphs: [
          "Breng de crème dagelijks aan op een gereinigde huid en masseer zachtjes in. De crème is eenvoudig te combineren met een behandeltraject in de studio.",
        ],
      },
      {
        title: "Goed om te weten",
        paragraphs: [
          "Wij adviseren je graag over de juiste toepassing, afgestemd op jouw huid en eventueel behandeltraject. Vraag ernaar tijdens je behandeling of intake.",
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
