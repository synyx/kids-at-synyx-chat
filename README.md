# Girls’ Day 2023 - Bau deinen eigenen Chat

Hier kannst du spielerisch HTML und CSS entdecken und so deinen eigenen Chat gestalten.  
Eine Hilfe findest du [hier](girls_day_cheatsheet.pdf).

Wenn der Server auf einem anderen Rechner ist, ändere die IP in '.'

## Voraussetzungen
1. `Node` und `npm` installiert ==> [Download](https://nodejs.org/de/)
2. Ein TextEditor (z.B. [Atom](https://atom.io/) oder Editor)
3. Ein Browser (z.B. Firefox, Google Chrome, Microsoft Edge,...)

## Ausführen (Windows)
### Den Chat Server starten:
  1. Doppelklick auf die Datei `startServerWindows` um sie auszuführen  
    * je nach Einstellung von Windows kann die Datei auch `startServerWindows.bat` heißen
  2. Eine [Kommandozeile](https://de.wikipedia.org/wiki/Kommandozeile) wird sich öffnen und den Chat-Server lokal starten
  3. Das Dashboard vom Chat-Server im Browser öffnen: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
### Client Anwendung starten:
  1. Doppelklick auf die Datei `startClientWindows` um sie auszuführen  
    * je nach Einstellung von Windows kann die Datei auch `startClientWindows.bat` heißen
  2. Eine [Kommandozeile](https://de.wikipedia.org/wiki/Kommandozeile) wird sich öffnen und den Server für den Client lokal starten
  3. Den Client im Browser öffnen: [http://localhost:8080](http://localhost:8080)

## Ausführen (Linux/Mac OSX)
### Den Chat Server starten:  
  1. Ein Terminal öffnen  
  2. Die Datei ausführen: `./startServer.sh`  
  3. Das Dashboard im Browser öffnen: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)  
### Client Anwendung starten:  
  1. Ein anderes Terminal-Fenster öffnen  
  2. Die Datei ausführen: `./startClient.sh`  
  3. Den Client im Browser öffnen: [http://localhost:8080](http://localhost:8080)  


## Client entwickeln
  1. Die Dateien `index.html` im Editor öffnen
  2. Detain nach Belieben bearbeiten
  3. Datei Speichern
  4. Im Browser den Client neu laden auf [http://localhost:8080](http://localhost:8080) und das Resultat begutachten
