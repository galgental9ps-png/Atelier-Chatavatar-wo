# Pinselia · Atelier Schwarzenberger

Weibliche Variante von [Pinselio](https://github.com/galgental9ps-png/atelier-chatavatar), erstellt am 19.11.2026. Eigene Figur im gleichen Malstil, eigene Lauf- und Aktionsbilder und ein unabhängiges Wissensstudio. Das dunkle Chatfenster mit violettem und cyanfarbenem Neon bleibt im gleichen Stil. Die 57 Atelier-Antworten wurden übernommen; ihre ursprünglichen Quellen- und Prüfdaten bleiben erhalten.

Eine animierte Kunstmagierin mit Sternenmantel, Hut, Palette und Zauberpinsel. Gezeichnete Einzelbilder und acht Laufphasen, 57 hinterlegte Atelier-Antworten, Suche, anklickbare Fragen, Folgefragen und direkte Shoplinks. Ohne LLM, Backend oder KI-Schlüssel.

- Demo: https://galgental9ps-png.github.io/Atelier-Chatavatar-wo/
- Wissensstudio: https://galgental9ps-png.github.io/Atelier-Chatavatar-wo/admin.html
- Einbindungsbeispiele: https://galgental9ps-png.github.io/Atelier-Chatavatar-wo/embed-beispiel.html
- Download: https://github.com/galgental9ps-png/Atelier-Chatavatar-wo/archive/refs/heads/main.zip

Die Seitenlinks funktionieren nach erfolgreicher Pages-Veröffentlichung. Unter **Settings → Pages → Source** einmal **GitHub Actions** wählen. Danach veröffentlicht der Workflow jeden Push auf main.

## Auf einer Webseite einbinden

In den Bereich für eigenes HTML/JavaScript einfügen:

```html
<script src="https://galgental9ps-png.github.io/Atelier-Chatavatar-wo/avatar.js" defer></script>
```

Die Figur lädt alle Dateien von GitHub Pages. Es muss nichts auf den IONOS-Server hochgeladen werden. Shadow DOM isoliert ihre Gestaltung. Nur Figur, Sprechblase und Antwortfenster nehmen Mausaktionen an.

Wenn der Baukasten ausschließlich eingebettete Bereiche unterstützt:

```html
<iframe src="https://galgental9ps-png.github.io/Atelier-Chatavatar-wo/embed.html"
  title="Pinselia – Kunstbegleiterin" width="100%" height="740"
  style="border:0;max-width:100%"></iframe>
```

In einem iframe bewegt sie sich innerhalb des Rahmens. Freies Laufen über die gesamte Webseite setzt voraus, dass das Script im Seitendokument ausgeführt werden darf. [IONOS-Hinweise](docs/IONOS.md).

## Wissen verwalten

1. Wissensstudio öffnen. Für die zentrale Veröffentlichung zuerst unter **GitHub-Zugang** den aktuellen Stand laden.
2. Antworten bearbeiten oder JSON, Markdown, TXT oder CSV hochladen (maximal 4 MB je Datei).
3. JSON ersetzt den Browserentwurf; andere Formate ergänzen zunächst deaktivierte Einträge zur Prüfung.
4. Antworten testen und **im Browser speichern**. Danach **auf GitHub speichern**.
5. Erfolgreichen Pages-Workflow abwarten und die Webseite neu laden.

Ein Browserentwurf allein ändert die öffentliche Figur nicht. Der öffentliche Editor benötigt zum Veröffentlichen einen Fine-grained GitHub-Token für genau dieses Repository mit **Contents: Read and write**. Tokens bleiben im Arbeitsspeicher; niemals in den Einbindungscode oder in Wissensdateien schreiben. Ohne Schreibberechtigung können Besucher keine zentralen Daten ändern. JSON und Offlinepaket werden gemeinsam in einem Commit gespeichert, mit Prüfung auf zwischenzeitliche Änderungen.

Alternativ knowledge/atelier.json direkt auf GitHub bearbeiten. Der Workflow synchronisiert daraus das Offlinepaket.

## Bedienung

Klicken öffnet die Antworten; Ziehen versetzt die Figur mit eigener Haltepose. Sie läuft, winkt und zeigt Zauberposen. Das Antwortfenster pausiert das Laufen. Pause, Ausblenden, Tastaturbedienung, Escape und reduzierte Bewegung werden unterstützt. Vorlesen wird erst auf Wunsch aktiviert, sofern der Browser Sprachsynthese unterstützt; je nach Stimme kann dabei ein Dienst des Browseranbieters genutzt werden.

## Lokaler Start und Entwicklung

Unter Windows Start-Atelier.cmd bzw. Start-Wissensstudio.cmd öffnen. Nach vollständigem Download funktioniert auch file:// mit dem mitgelieferten Offlinepaket. Onlineänderungen sind lokal erst nach erneutem Download enthalten.

```sh
python -m http.server 8080
node --test tests/core.test.cjs
node tools/sync-knowledge.cjs
node tools/build-site.cjs
```

tools/build-knowledge.cjs dokumentiert die ursprüngliche Recherche. Dieses Script wird nicht beim Deployment ausgeführt und überschreibt daher keine späteren redaktionellen Änderungen. tools/sync-knowledge.cjs synchronisiert ausschließlich die aktuelle JSON-Datei ins Offlinepaket.

## Inhalt und Quellen

Recherche am **15.11.2026**, Quellen und Prüftermine an jeder Antwort. Inhalte: Mario, Otto, Patrik, einzelne Werke, Bildformate, Kontakt, Shop, AR-Galerie und historische Ausstellungen. Ottos Werke führen zur Anfrage; 0-Euro-Angaben werden nicht als kostenloses Angebot ausgegeben. Vergangene Termine sind so gekennzeichnet; unbestätigte Rabattcodes werden nicht empfohlen. Preise und Bestände werden auf der jeweiligen Shopseite geprüft.

Das Paket wird redaktionell gepflegt und liest den Shop nicht automatisch aus. Keine frei erzeugten Antworten, keine Analytics und keine LLM-Verbindung. Öffentliche Dateien werden beim Hosting geladen. Im Wissensstudio werden nach aktivem Verbinden Anfragen an GitHub gesendet.


## Dunkles Neon-Fenster

Pinselias Chatfenster verwendet ein dunkles Atelier-Design mit violetten und cyanfarbenen Neon-Akzenten. Kopfzeile, Themen, Suche, Antworten, Quellen, Hinweise und die minimierte Ansicht sind darauf abgestimmt. Die weibliche Figur verwendet eigene Grafiken für 16 Posen und acht Laufphasen. Cache-Version: `pinselia-1`; vorhandene Script-Einbindungen laden dasselbe aktualisierte Fenster.

## Eigene Schnittstelle

Die JavaScript-Schnittstelle heißt `PinseliaChatAvatar`, zum Beispiel `PinseliaChatAvatar.instance.open()`. Pinselia verwendet eigene globale Namen, DOM-Ereignisse (`pinselia:ready`, `pinselia:answer`, `pinselia:error`) und einen eigenen Browserentwurf. Dadurch kann sie auch auf einer Seite mit Pinselio eingebunden werden.
