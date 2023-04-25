# Girls’ Day 2023 - Bau deinen eigenen Chat

Hier kannst du spielerisch HTML und CSS entdecken und so deinen eigenen Chat gestalten.  
Eine Hilfe findest du [hier][cheatsheet].

Wenn der Server auf einem anderen Rechner ist, ändere die IP in der ersten Zeile von [client/public/js/chat.js][chat.js]

## Voraussetzungen
1. `Node` und `npm` installiert ==> [Download](nodejs)
   1. Getestet mit node 18.12.0 und npm 8.9.12
2. Ein TextEditor (z.B. [Atom][atom] oder Editor)
3. Ein Browser (z.B. Firefox, Google Chrome, Microsoft Edge,...)

## Ausführen (Windows)
### Den Chat Server starten:
  1. Doppelklick auf die Datei `startServerWindows` um sie auszuführen  
    * je nach Einstellung von Windows kann die Datei auch `startServerWindows.bat` heißen
  2. Eine [Kommandozeile][kommandozeile] wird sich öffnen und den Chat-Server lokal starten
  3. Das [Dashboard][dashboard] vom Chat-Server im Browser öffnen
### Client Anwendung starten:
  1. Doppelklick auf die Datei `startClientWindows` um sie auszuführen  
    * je nach Einstellung von Windows kann die Datei auch `startClientWindows.bat` heißen
  2. Eine [Kommandozeile][kommandozeile] wird sich öffnen und den Server für den Client lokal starten
  3. Den [Client][client] im Browser öffnen

## Ausführen (Linux/Mac OSX)
### Den Chat Server starten:  
  1. Ein Terminal öffnen  
  2. Die Datei ausführen: `./startServer.sh`  
  3. Das [Dashboard][dashboard] im Browser öffnen
### Client Anwendung starten:  
  1. Ein anderes Terminal-Fenster öffnen  
  2. Die Datei ausführen: `./startClient.sh`  
  3. Den [Client][client] im Browser öffnen


## Client entwickeln
  1. Die Dateien `index.html` im Editor öffnen
  2. Dateien nach Belieben bearbeiten
  3. Speichern
  4. Im Browser den [Client][client] neu laden und das Resultat begutachten

[cheatsheet]: girls_day_cheatsheet.pdf
[kommandozeile]: https://de.wikipedia.org/wiki/Kommandozeile
[nodejs]: https://nodejs.org/de/
[atom]: https://atom.io/
[client]: http://localhost:8080
[dashboard]: http://localhost:3000/dashboard
[chat.js]: client/public/js/chat.js