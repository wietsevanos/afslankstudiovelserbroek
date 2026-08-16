/**
 * Centrale contentbron voor de website.
 * Pas hier behandelingen, prijzen, de maandactie, contactgegevens,
 * openingstijden en social media links aan.
 */

import treatmentSlim from "@/assets/treatment-slim.jpg";
import treatmentBody from "@/assets/treatment-body.jpg";
import treatmentFace from "@/assets/treatment-face.jpg";
import treatmentWellness from "@/assets/treatment-wellness.jpg";
import treatmentBeauty from "@/assets/treatment-beauty.jpg";
import treatmentCoaching from "@/assets/treatment-coaching.jpg";

export type Treatment = {
  id: string;
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

export const treatments: Treatment[] = [
  {
    id: "figuurbehandeling",
    name: "Figuurbehandeling",
    category: "Afslanken",
    short:
      "Een behandeling gericht op het figuur, waarbij we samen kijken naar jouw wensen en doelen.",
    price: "Prijs op aanvraag",
    duration: "± 60 minuten",
    image: treatmentSlim,
    imageAlt: "Rustige, natuurlijke spa-stilleven bij de figuurbehandeling in Velserbroek",
    description:
      "Placeholder tekst. Deze behandeling richt zich op het figuur en lichaamsomvang. Tijdens een intakegesprek bespreken we jouw wensen en stellen we samen een passend traject op. De definitieve omschrijving wordt later aangeleverd.",
    forWho: [
      "Je wilt gericht werken aan je figuur",
      "Je zoekt begeleiding met persoonlijke aandacht",
      "Je wilt eerst rustig advies voordat je start",
    ],
    includes: [
      "Intakegesprek en het bepalen van jouw doelen",
      "Metingen en een persoonlijk behandelplan",
      "De figuurbehandeling zelf, rustig en op jouw tempo",
      "Nazorg en voedings- of leefstijladvies",
    ],
    expect: [
      "Een persoonlijk intakegesprek",
      "Een behandeling in een rustige omgeving",
      "Advies voor de periode na de behandeling",
    ],
    extra:
      "Placeholder — voorwaarden, aantal aanbevolen behandelingen en pakketprijzen worden later aangeleverd.",
  },
  {
    id: "lichaamsbehandeling",
    name: "Lichaamsbehandeling",
    category: "Lichaamsverzorging",
    short:
      "Verzorgende behandeling voor het lichaam, gericht op een verzorgde en soepele huid.",
    price: "Prijs op aanvraag",
    duration: "± 45 minuten",
    image: treatmentBody,
    imageAlt: "Zachte handdoeken en verzorgende olie voor de lichaamsbehandeling",
    description:
      "Placeholder tekst. Een verzorgende behandeling voor het lichaam waarbij de huid wordt gereinigd, verzorgd en gevoed. De definitieve omschrijving en productinformatie worden later aangeleverd.",
    forWho: [
      "Je wilt je huid extra verzorgen",
      "Je zoekt een moment van ontspanning",
      "Je hebt een droge of vermoeide huid",
    ],
    includes: [
      "Reiniging van de huid",
      "Een verzorgende scrub of peeling",
      "Verzorging met voedende producten",
      "Afsluitend advies voor thuis",
    ],
    expect: [
      "Een rustige, warme behandelruimte",
      "Aandacht voor jouw huidtype",
      "Verzorgingsadvies voor thuis",
    ],
    extra:
      "Placeholder — productlijn en eventuele combinatiemogelijkheden worden later aangeleverd.",
  },
  {
    id: "gezichtsbehandeling",
    name: "Gezichtsbehandeling",
    category: "Huid",
    short:
      "Een complete gezichtsbehandeling, afgestemd op jouw huid en wat die op dat moment nodig heeft.",
    price: "Prijs op aanvraag",
    duration: "± 60 minuten",
    image: treatmentFace,
    imageAlt: "Elegante huidverzorgingsproducten voor de gezichtsbehandeling in Velserbroek",
    description:
      "Placeholder tekst. Tijdens deze gezichtsbehandeling wordt de huid gereinigd, verzorgd en tot rust gebracht. We stemmen de stappen af op jouw huid. De definitieve omschrijving wordt later aangeleverd.",
    forWho: [
      "Je wilt je huid laten analyseren en verzorgen",
      "Je huid voelt droog, gevoelig of vermoeid",
      "Je wilt een ontspannen moment voor jezelf",
    ],
    includes: [
      "Korte huidanalyse en wensen bespreken",
      "Reiniging en peeling",
      "Eventueel onzuiverheden verwijderen",
      "Masker, serum en afsluitende verzorging",
    ],
    expect: [
      "Een korte huidanalyse",
      "Een behandeling op maat",
      "Persoonlijk advies over huidverzorging",
    ],
    extra:
      "Placeholder — uitbreidingen zoals massage of extra masker worden later aangeleverd.",
  },
  {
    id: "ontspanningsmassage",
    name: "Ontspanningsmassage",
    category: "Welzijn",
    short: "Even helemaal tot rust komen met een rustgevende massage.",
    price: "Prijs op aanvraag",
    duration: "± 45 minuten",
    image: treatmentWellness,
    imageAlt: "Kaars en zachte deken bij de ontspanningsmassage",
    description:
      "Placeholder tekst. Een rustgevende massage waarbij ontspanning centraal staat. De definitieve omschrijving en mogelijkheden worden later aangeleverd.",
    forWho: [
      "Je wilt even helemaal niets hoeven",
      "Je voelt spanning in nek, schouders of rug",
      "Je zoekt regelmatig een rustmoment",
    ],
    includes: [
      "Kort gesprek over spanning en voorkeuren",
      "Massage van rug, nek en schouders",
      "Aandacht voor tempo en druk naar wens",
      "Rustig nakomen met een glas water",
    ],
    expect: ["Rustige muziek en zacht licht", "Een massage in jouw tempo", "Tijd om na te komen"],
    extra:
      "Placeholder — mogelijkheid tot een langere massage wordt later aangeleverd.",
  },
  {
    id: "beauty-details",
    name: "Beauty & details",
    category: "Beauty",
    short:
      "Kleine behandelingen met een groot effect, zoals wenkbrauwen en wimpers verzorgen.",
    price: "Prijs op aanvraag",
    duration: "± 30 minuten",
    image: treatmentBeauty,
    imageAlt: "Beautytools voor wenkbrauw- en wimperbehandelingen",
    description:
      "Placeholder tekst. Verfijnde beautybehandelingen voor de details in je gezicht. De definitieve lijst met behandelingen en prijzen wordt later aangeleverd.",
    forWho: [
      "Je wilt een verzorgde, natuurlijke look",
      "Je hebt weinig tijd maar wil wel resultaat",
      "Je combineert dit graag met een andere behandeling",
    ],
    includes: [
      "Bespreken van de gewenste vorm en kleur",
      "Wenkbrauwen modelleren",
      "Eventueel verven van wenkbrauwen of wimpers",
      "Advies over onderhoud",
    ],
    expect: ["Een korte, zorgvuldige behandeling", "Natuurlijk resultaat", "Advies over onderhoud"],
    extra:
      "Placeholder — losse tarieven per onderdeel worden later aangeleverd.",
  },
  {
    id: "persoonlijk-advies",
    name: "Persoonlijk adviesgesprek",
    category: "Advies",
    short:
      "Nog niet zeker wat bij je past? In een adviesgesprek kijken we samen naar de mogelijkheden.",
    price: "Kosteloos",
    duration: "± 20 minuten",
    image: treatmentCoaching,
    imageAlt: "Notitieboek en fris water tijdens een persoonlijk adviesgesprek",
    description:
      "Placeholder tekst. In een rustig gesprek bespreken we jouw wensen en welke behandeling daar het beste bij past. Zonder verplichtingen.",
    forWho: [
      "Je bent nieuw en wilt eerst kennismaken",
      "Je weet nog niet welke behandeling past",
      "Je hebt vragen over een traject",
    ],
    includes: [
      "Kennismaking en jouw wensen bespreken",
      "Uitleg over de behandelingen",
      "Samen een passend voorstel maken",
      "Vrijblijvend een vervolgafspraak plannen",
    ],
    expect: ["Een open gesprek", "Uitleg over de mogelijkheden", "Een advies op maat"],
    extra:
      "Placeholder — kosteloos en zonder verplichtingen.",
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
