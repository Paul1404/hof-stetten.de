export const SITE = {
  name: "Hofstetten",
  domain: "hof-stetten.de",
  description:
    "Ein unabhängiges Ortsporträt über Hofstetten, Kirchdorf der Stadt Königsberg i.Bay. im Landkreis Haßberge.",
  latitude: 50.070278,
  longitude: 10.641667,
} as const;

export const HISTORY = [
  {
    year: "1135",
    title: "Indirekte Nennung",
    text: "Ein Hermann von „hoffenstetten“ erscheint als Zeuge in einer Urkunde des Bamberger Bischofs Otto. Die Zuordnung gilt als indirekte erste Nennung des Ortes.",
    sourceId: "ortsnamenbuch",
  },
  {
    year: "1244",
    title: "„Houesteten“ in einer Urkunde",
    text: "Ludwig von Raueneck übergibt dem Würzburger Bischof Güter in „Houesteten“. Damit ist der Ort ausdrücklich in einer Urkunde greifbar.",
    sourceId: "ortsnamenbuch",
  },
  {
    year: "1744",
    title: "Bau der Kapelle St. Anna",
    text: "Die spätbarocke Kapelle erhält ihre heutige Gestalt. Das Sandsteinportal trägt die Jahreszahl 1744, das Relief der Vierzehn Nothelfer wird auf 1751 datiert.",
    sourceId: "denkmalliste",
  },
  {
    year: "1870",
    title: "171 Einwohner mit Bühl",
    text: "Bei einer amtlichen Visitation zählt die Landgemeinde Hofstetten mit dem Weiler Bühl 171 Einwohner. Der Bericht beschreibt eine einzige Hauptstraße mit gepflasterten, sauber gehaltenen Gräben, aber auch karge Felder und eine Gemeinde ohne eigenes Vermögen.",
    sourceId: "visitation-1870",
  },
  {
    year: "1965",
    title: "Gründung der Blaskapelle",
    text: "Die Blaskapelle Hofstetten wird gegründet. 2025 feierte der Verein sein 60-jähriges Bestehen.",
    sourceId: "blaskapelle",
  },
  {
    year: "1972",
    title: "Eingemeindung nach Königsberg",
    text: "Die bis dahin selbstständige Gemeinde Hofstetten wird am 1. Juli nach Königsberg i.Bay. eingegliedert. Der frühere Landkreis Ebern geht im Landkreis Haßberge auf.",
    sourceId: "gemeindehandbuch",
  },
  {
    year: "2010",
    title: "Skulptur vor St. Anna",
    text: "Vor der Kapelle wird eine Sandsteinskulptur der Heiligen Familie aufgestellt.",
    sourceId: "stadt-hofstetten",
  },
] as const;

export const POPULATION = [
  { year: 1871, people: 148 },
  { year: 1925, people: 139 },
  { year: 1950, people: 187 },
  { year: 1970, people: 166 },
  { year: 1987, people: 117 },
  { year: 2021, people: 138 },
] as const;

export const VILLAGE_YEAR = [
  { date: "30. April", title: "Maibaumaufstellen", detail: "in der Dorfmitte" },
  { date: "Im Frühjahr", title: "Wallfahrt", detail: "zum Zeiler Käppele" },
  { date: "Mitte Juli", title: "Brunnenfest", detail: "in Hofstetten" },
  { date: "Rund um St. Anna", title: "Annatag", detail: "mit Prozession an der Kapelle" },
] as const;

export const SOURCES = [
  {
    id: "ortsnamenbuch",
    title: "Historisches Ortsnamenbuch von Bayern, Unterfranken, Band 2",
    detail: "Werner Schmiedel, Landkreise Ebern und Hofheim, München 1973, Seite 24. Bibliografische Grundlage für die frühen Namensformen und Urkundennennungen; online derzeit nicht vollständig zugänglich.",
  },
  {
    id: "denkmalliste",
    title: "Bayerische Denkmalliste",
    detail: "Bayerisches Landesamt für Denkmalpflege, Denkmal D-6-74-164-112. Grundlage für Datierung und Baubeschreibung von St. Anna.",
    href: "https://www.geodaten.bayern.de/denkmal_static_data/externe_denkmalliste/pdf/denkmalliste_merge_674164.pdf",
  },
  {
    id: "einwohner-2021",
    title: "Amtsblatt der Stadt Königsberg i.Bay., 01/2021",
    detail: "Amtliche Einwohnerstatistik mit 138 Einwohnern zum 1. Januar 2021.",
    href: "https://www.koenigsberg.de/sites/default/files/2021-01/01-2021.pdf",
  },
  {
    id: "gemeindehandbuch",
    title: "Handbuch der bayerischen Ämter, Gemeinden und Gerichte 1799 bis 1980",
    detail: "Herausgegeben von Wilhelm Volkert, München 1983. Grundlage für die kommunale Neuordnung von 1972.",
  },
  {
    id: "blaskapelle",
    title: "Blaskapelle Hofstetten e.V.",
    detail: "Vereinsseite mit Angaben zur Blaskapelle und ihrem Wirken im Ort.",
    href: "https://www.blaskapelle-hofstetten.de/",
  },
  {
    id: "visitation-1870",
    title: "Landgemeinde Hofstetten im Jahr 1870",
    detail: "Albin Schorn, inFranken.de, 6. Dezember 2021. Auswertung des Visitationsberichts des königlichen Bezirksamts Ebern vom 11. Juli 1870.",
    href: "https://www.infranken.de/lk/gem/hassberge/landgemeinde-hofstetten-im-jahr-1870-art-5349176",
  },
  {
    id: "kirchliche-zuordnung",
    title: "Stadt Königsberg i.Bay.: Kirchen und Pfarrämter",
    detail: "Amtliche Zuordnung von Jesserndorf mit Hofstetten und Bühl.",
    href: "https://koenigsberg.de/kirchen-pfarraemter?field_districts_target_id=All&field_religion_target_id=231",
  },
  {
    id: "wahlraum-schule",
    title: "Königsberger Nachrichten, Ausgabe 09/2019",
    detail: "Amtlicher Nachweis der ehemaligen Schule als Wahlraum für Hofstetten, Köslau und Bühl sowie der Anschrift Hofstetten 31.",
    href: "https://www.koenigsberg.de/sites/default/files/2019-05/09-2019.docx1_.pdf",
  },
  {
    id: "jagdgenossenschaft",
    title: "Königsberger Nachrichten, Ausgabe 06/2026",
    detail: "Amtliche Einladung der Jagdgenossenschaft Hofstetten zur Jahreshauptversammlung in der ehemaligen Schule.",
    href: "https://koenigsberg.de/wp-content/uploads/2026/03/Amtsblatt-06-2026.pdf",
  },
  {
    id: "feuerwehr",
    title: "Stadt Königsberg i.Bay.: Feuerwehren",
    detail: "Übersicht der Stützpunktfeuerwehr Königsberg und der Feuerwehren in den Stadtteilen, darunter Hofstetten.",
    href: "https://koenigsberg.de/home-rathaus-gemeinde/stadt-gemeinde/feuerwehren/",
  },
  {
    id: "commons",
    title: "Wikimedia Commons: Hofstetten",
    detail: "Ortsbezogene Landschafts- und Denkmalfotografien rund um Hofstetten.",
    href: "https://commons.wikimedia.org/wiki/Category:Hofstetten_(K%C3%B6nigsberg_in_Bayern)",
  },
  {
    id: "stadt-hofstetten",
    title: "Stadt Königsberg i.Bay.: Hofstetten mit Bühl",
    detail: "Amtliche Ortsbeschreibung mit Angaben zu Straßendorf, Feuerwehr, Förderverein, Dorfjahr, Dorfzeichen und ehemaliger Schule.",
    href: "https://koenigsberg.de/home-rathaus-gemeinde/stadt-gemeinde/stadt-und-stadtteile/hofstetten-mit-buehl/",
  },
  {
    id: "ebelsbach-lfu",
    title: "Bayerisches Landesamt für Umwelt: Der Ebelsbach",
    detail: "Gewässerbeschreibung mit Quelle bei Hofstetten, rund 16 Kilometern Länge und Mündung in den Main.",
    href: "https://www.lfu.bayern.de/wasser/gewaessernachbarschaften/themen/wrrl/doc/arbeitshilfe.pdf",
  },
  {
    id: "einwohner-historisch",
    title: "Bavarikon: Hofstetten",
    detail: "Historische Einwohnerzahlen für den Gemeindeteil Hofstetten von 1871 bis 1987.",
    href: "https://www.bavarikon.de/object/odb:BSB-ODB_S00003585",
  },
  {
    id: "schulgeschichte",
    title: "Festschrift der Regiomontanus-Grundschule",
    detail: "Schulgeschichte mit dem Hinweis auf ausgelagerte Klassen in Hofstetten im Schuljahr 1975/76.",
    href: "https://www.grundschule-koenigsberg.de/wp-content/uploads/2023/04/Festschrift.pdf",
  },
  {
    id: "spielplatz",
    title: "Stadt Königsberg i.Bay.: Spielplätze",
    detail: "Amtliche Beschreibung des Spielplatzes neben dem ehemaligen Schulhaus in Hofstetten.",
    href: "https://koenigsberg.de/home-tourismus-freizeit/aktiv-und-freizeit/spielplaetze/",
  },
] as const;

export const PHOTO_CREDITS = [
  {
    file: "hofstetten-luftbild-herbst.webp",
    title: "Luftbild von Hofstetten",
    author: "veröffentlicht durch die Stadt Königsberg i.Bay.",
    license: "nicht ausgewiesen",
    source: "https://koenigsberg.de/home-rathaus-gemeinde/stadt-gemeinde/stadt-und-stadtteile/hofstetten-mit-buehl/",
    sourceLabel: "Stadt Königsberg i.Bay.",
  },
  {
    file: "st-anna.jpg",
    title: "St. Anna in Hofstetten",
    author: "Tilman2007",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Hofstetten_27_K%C3%B6nigsberg_in_Bayern_20201129_001.jpg",
    sourceLabel: "Wikimedia Commons",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    file: "st-anna-portal.jpg",
    title: "Portal der Kapelle St. Anna",
    author: "Stephan van Helden",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:D-6-74-164-112_Kapelle_St_Anna_Hofstetten,_Portal.jpg",
    sourceLabel: "Wikimedia Commons",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    file: "heilige-familie.jpg",
    title: "Statue der Heiligen Familie",
    author: "Stephan van Helden",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Statue_der_Heiligen_Familie_vor_der_Kirche_St_Anna_in_Hofstetten.jpg",
    sourceLabel: "Wikimedia Commons",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    file: "ebelsbach.jpg",
    title: "Der Ebelsbach nordwestlich von Hofstetten",
    author: "Stephan van Helden",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Der_Ebelsbach_nordwestlich_von_Hofstetten_(3).jpg",
    sourceLabel: "Wikimedia Commons",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    file: "moenchsberg.jpg",
    title: "Weg zur Wolfsgrube am Mönchsberg",
    author: "Stephan van Helden",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Weg_zur_Wolfsgrube_am_M%C3%B6nchsberg.jpg",
    sourceLabel: "Wikimedia Commons",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
] as const;
