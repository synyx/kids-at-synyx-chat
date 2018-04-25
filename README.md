# GirlsDay 2018 -  Chat Anwendung

## Vorraussetzungen
1. `Node` und `npm` installiert ==> [Download](https://nodejs.org/de/)
1. Ein TextEditor (z.B. [Atom](https://atom.io/) oder Editor)
1. Ein Browser (z.B. Firefox, Google Chrome, Microsoft Edge,...)

## Ausführen (Windows)
1. Den Chat Server starten:
  1. Doppel Klick auf die Datei `startServerWindows` um sie Auszuführen
    * je nach Einstellung von Windows kann die Datei auch `startServerWindows.bat` heißen
  1. Eine [Kommandozeile](https://de.wikipedia.org/wiki/Kommandozeile) wird sich öffnen und den Chat-Server lokal starten
  1. Das Dashboard vom Chat-Server im Browser öffnen: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
1. Client Anwendung starten:
  1. Doppel Klick auf die Datei `startClientWindows` um sie Auszuführen
    * je nach Einstellung von Windows kann die Datei auch `startClientWindows.bat` heißen
  1. Eine [Kommandozeile](https://de.wikipedia.org/wiki/Kommandozeile) wird sich öffnen und den Server für den Client lokal starten
  1. Den Client im Browser öffnen: [http://localhost:8080](http://localhost:8080)

## Ausführen (Linux/OSX)
  1. Den Chat Server starten:
    1. Ein Terminal öffnen
    1. Sich mit `cd` in dieses Verzeichnis begeben
    1. Die Datei ausführen: `./startServer.sh`
    1. Das Dashboard im Browser öffnen: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
  1. Client Anwendung starten:
    1. Ein anderes Terminal-Fenster öffnen
    1. Sich mit `cd` in dieses Verzeichnis begeben
    1. Die Datei ausführen: `./startClient.sh`
    1. Den Client im Browser öffnen: [http://localhost:8080](http://localhost:8080)


## Client entwickeln
  1. Die Dateien `index.html` im Editor öffnen
  1. Datein nach belieben bearbeiten
  1. Datei Speichern
  1. Im Browser den Client neu laden auf [http://localhost:8080](http://localhost:8080) und das Resultat begutachten
