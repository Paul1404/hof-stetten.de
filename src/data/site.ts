export const SITE = {
  name: "Hofstetten",
  domain: "hof-stetten.de",
  description:
    "Hofstetten, Kirchdorf der Stadt Königsberg i.Bay. im Landkreis Haßberge. Geschichte, Landschaft, St. Anna und das Dorfleben zwischen Ebern und Haßfurt.",
  latitude: 50.070278,
  longitude: 10.641667,
} as const;

export const HISTORY = [
  {
    year: "1135",
    title: "Ein Name tritt hervor",
    text: "Ein Hermann von „hoffenstetten“ erscheint als Zeuge in einer Urkunde des Bamberger Bischofs Otto. Die Zuordnung gilt als indirekte erste Nennung des Ortes.",
  },
  {
    year: "1244",
    title: "Houesteten",
    text: "Ludwig von Raueneck übergibt dem Würzburger Bischof Güter in „Houesteten“. Der Ort ist nun ausdrücklich in einer Urkunde greifbar.",
  },
  {
    year: "1744",
    title: "St. Anna entsteht",
    text: "Die spätbarocke Kapelle erhält ihre heutige Gestalt. Das Sandsteinportal trägt die Jahreszahl 1744, das Relief der Vierzehn Nothelfer wird auf 1751 datiert.",
  },
  {
    year: "1965",
    title: "Die Blaskapelle wird gegründet",
    text: "Aus Hofstetten wächst eine Kapelle, die das musikalische Leben im Ort und weit darüber hinaus bis heute prägt.",
  },
  {
    year: "1972",
    title: "Teil der Stadt Königsberg",
    text: "Die bis dahin selbstständige Gemeinde Hofstetten wird am 1. Juli nach Königsberg i.Bay. eingegliedert. Der frühere Landkreis Ebern geht im Landkreis Haßberge auf.",
  },
  {
    year: "2010",
    title: "Die Heilige Familie",
    text: "Vor St. Anna wird eine Sandsteinskulptur aufgestellt. Sie ergänzt den historischen Mittelpunkt um ein zeitgenössisches Zeichen.",
  },
] as const;

export const SOURCES = [
  {
    title: "Historisches Ortsnamenbuch von Bayern, Unterfranken, Band 2",
    detail: "Werner Schmiedel, Landkreise Ebern und Hofheim, München 1973, Seite 24. Grundlage für die frühen Namensformen und Urkundennennungen.",
    href: "https://www.bavarikon.de/object/odb:BSB-ODB_S00003585",
  },
  {
    title: "Bayerische Denkmalliste",
    detail: "Bayerisches Landesamt für Denkmalpflege, Denkmal D-6-74-164-112. Grundlage für Datierung und Baubeschreibung von St. Anna.",
    href: "https://geoportal.bayern.de/denkmalatlas/",
  },
  {
    title: "Amtsblatt der Stadt Königsberg i.Bay., 01/2021",
    detail: "Amtliche Einwohnerstatistik mit 138 Einwohnern zum 1. Januar 2021.",
    href: "https://www.koenigsberg.de/sites/default/files/2021-01/01-2021.pdf",
  },
  {
    title: "Handbuch der bayerischen Ämter, Gemeinden und Gerichte 1799 bis 1980",
    detail: "Herausgegeben von Wilhelm Volkert, München 1983. Grundlage für die kommunale Neuordnung von 1972.",
  },
  {
    title: "Blaskapelle Hofstetten e.V.",
    detail: "Vereinsseite und aktueller Veranstaltungskalender.",
    href: "https://www.blaskapelle-hofstetten.de/",
  },
  {
    title: "Naturpark Haßberge und Wikimedia Commons",
    detail: "Ortsbezogene Landschaftsfotografien und Geodaten rund um Ebelsbach und Mönchsberg.",
    href: "https://commons.wikimedia.org/wiki/Category:Hofstetten_(K%C3%B6nigsberg_in_Bayern)",
  },
] as const;

export const PHOTO_CREDITS = [
  {
    file: "st-anna.jpg",
    title: "St. Anna in Hofstetten",
    author: "Tilman2007",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Hofstetten_27_K%C3%B6nigsberg_in_Bayern_20201129_001.jpg",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    file: "st-anna-portal.jpg",
    title: "Portal der Kapelle St. Anna",
    author: "Stephan van Helden",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:D-6-74-164-112_Kapelle_St_Anna_Hofstetten,_Portal.jpg",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    file: "heilige-familie.jpg",
    title: "Statue der Heiligen Familie",
    author: "Stephan van Helden",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Statue_der_Heiligen_Familie_vor_der_Kirche_St_Anna_in_Hofstetten.jpg",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    file: "ebelsbach.jpg",
    title: "Der Ebelsbach nordwestlich von Hofstetten",
    author: "Stephan van Helden",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Der_Ebelsbach_nordwestlich_von_Hofstetten_(3).jpg",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    file: "moenchsberg.jpg",
    title: "Weg zur Wolfsgrube am Mönchsberg",
    author: "Stephan van Helden",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Weg_zur_Wolfsgrube_am_M%C3%B6nchsberg.jpg",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
] as const;
