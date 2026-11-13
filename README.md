# hof-stetten.de

Ein redaktionelles Ortsporträt über Hofstetten, Stadtteil von Königsberg i.Bay. im Landkreis Haßberge.

Die Website erzählt Ortsgeschichte, Landschaft, St. Anna und Dorfleben als statische, schnelle und barrierearme Multi-Page-Site. Sie ist inhaltlich und technisch eigenständig, orientiert sich aber am Qualitätsanspruch von `untereuerheim.com`.

## Technik

- Astro 7 mit statischer Ausgabe
- Tailwind CSS 4
- Bun als Paketmanager und Produktionsserver
- Responsive Bilder über `astro:assets`
- Docker-Deployment auf Vertex RKE2 mit Fleet
- GitHub Actions mit `astro check` und Produktions-Build
- Keine Datenbank, kein CMS, keine Client-Bibliothek
- Keine Cookies und derzeit keine Reichweitenmessung

## Entwicklung

```sh
bun install --frozen-lockfile
bun run dev
```

Qualitätsprüfung:

```sh
bun run check
bun run build
```

Produktionsserver:

```sh
bun run start
```

## Inhalte und Bilder

Die Recherchegrundlagen stehen auf `/quellen`. Alle Fotografien stammen aus Wikimedia Commons und sind mit Urheber, Originaldatei und Lizenz dokumentiert. Die lokalen, für das Web optimierten Bearbeitungen bleiben unter der jeweiligen CC-BY-SA-Lizenz. Details stehen in `LICENSES.md`.

## Deployment

Das Dockerfile baut die statische Ausgabe und liefert sie über einen kleinen Bun-Server mit Sicherheits- und Cache-Headern aus. Kubernetes prüft `/health.json`.

Die Anwendung läuft auf Vertex RKE2 und wird von Fleet verwaltet. CloudFront liefert `hof-stetten.de` aus und schützt den Vertex-Ursprung mit einem Verifizierungsheader. `www.hof-stetten.de` leitet am CloudFront-Edge auf die Hauptdomain um. Die AWS-Konfiguration liegt in `infra/cloudfront.yaml`; die Deployment-Manifeste liegen im privaten Repository `vertex-fleet`.
