# hof-stetten.de

Ein redaktionelles Ortsporträt über Hofstetten, Stadtteil von Königsberg i.Bay. im Landkreis Haßberge.

Die Website erzählt Ortsgeschichte, Landschaft, St. Anna und Dorfleben als statische, schnelle und barrierearme Multi-Page-Site. Sie ist inhaltlich und technisch eigenständig, orientiert sich aber am Qualitätsanspruch von `untereuerheim.com`.

## Technik

- Astro 7 mit statischer Ausgabe
- Tailwind CSS 4
- Bun als Paketmanager und Produktionsserver
- Responsive Bilder über `astro:assets`
- Docker-Deployment auf Railway
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

Das Dockerfile baut die statische Ausgabe und liefert sie über einen kleinen Bun-Server mit Sicherheits- und Cache-Headern aus. Railway prüft `/health.json`.

Die Anwendung läuft auf Railway. Da Route 53 keinen CNAME am Zonen-Apex unterstützt, liefert CloudFront `hof-stetten.de` per A- und AAAA-Alias aus und verwendet die Railway-Domain als Ursprung. `www.hof-stetten.de` zeigt direkt auf Railway. Die reproduzierbare AWS-Konfiguration liegt in `infra/cloudfront.yaml`.
