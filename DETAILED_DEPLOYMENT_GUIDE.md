# Detaillierte Anleitung zur Bereitstellung der TikTok Shop Integration Plattform

Diese Schritt-für-Schritt-Anleitung führt Sie durch den Prozess der Bereitstellung Ihrer TikTok Shop Integration Plattform mit GitHub und Render.com.

## Voraussetzungen
- GitHub-Account (Vital9292)
- Render.com-Account (bereits vorhanden)
- Die heruntergeladene ZIP-Datei mit dem Quellcode

## Schritt 1: GitHub-Repository erstellen

1. Melden Sie sich bei GitHub an (https://github.com/login)
   ![GitHub Login](https://i.imgur.com/example1.png)

2. Klicken Sie auf das "+" Symbol in der oberen rechten Ecke und wählen Sie "New repository"
   ![Neues Repository](https://i.imgur.com/example2.png)

3. Geben Sie folgende Informationen ein:
   - Repository name: `tiktok-shop-integration`
   - Description (optional): `TikTok Shop Integration Plattform für Trend-Erkennung und Produktempfehlungen`
   - Visibility: Wählen Sie "Public" oder "Private" (Public empfohlen für einfacheres Deployment)
   - Initialisieren Sie das Repository NICHT mit README, .gitignore oder Lizenz
   
4. Klicken Sie auf "Create repository"
   ![Repository erstellen](https://i.imgur.com/example3.png)

## Schritt 2: Code in das Repository hochladen

1. Auf der Repository-Seite sehen Sie Anweisungen zum Hochladen von Code. Klicken Sie auf "uploading an existing file"
   ![Dateien hochladen](https://i.imgur.com/example4.png)

2. Entpacken Sie die ZIP-Datei, die Sie heruntergeladen haben

3. Ziehen Sie alle Dateien und Ordner aus dem entpackten Verzeichnis in den Upload-Bereich auf GitHub oder klicken Sie auf "choose your files" und wählen Sie die Dateien aus
   ![Dateien auswählen](https://i.imgur.com/example5.png)

4. Geben Sie eine Commit-Nachricht ein, z.B. "Initial commit - TikTok Shop Integration Platform"

5. Klicken Sie auf "Commit changes"
   ![Änderungen committen](https://i.imgur.com/example6.png)

## Schritt 3: Render.com für das Deployment einrichten

1. Melden Sie sich bei Render.com an (https://dashboard.render.com/login)
   ![Render Login](https://i.imgur.com/example7.png)

2. Klicken Sie auf "New" und wählen Sie "Blueprint"
   ![Neues Blueprint](https://i.imgur.com/example8.png)

3. Wenn Sie aufgefordert werden, Render.com Zugriff auf Ihr GitHub-Konto zu gewähren, klicken Sie auf "Authorize Render"
   ![Render autorisieren](https://i.imgur.com/example9.png)

4. Wählen Sie das Repository "tiktok-shop-integration" aus der Liste aus
   ![Repository auswählen](https://i.imgur.com/example10.png)

5. Render erkennt automatisch die render.yaml-Datei im Repository und zeigt die zu erstellenden Dienste an. Klicken Sie auf "Apply"
   ![Blueprint anwenden](https://i.imgur.com/example11.png)

6. Render beginnt nun mit dem Deployment-Prozess. Dies kann einige Minuten dauern.
   ![Deployment-Prozess](https://i.imgur.com/example12.png)

## Schritt 4: Zugriff auf die bereitgestellte Anwendung

1. Nach Abschluss des Deployments sehen Sie zwei Dienste in Ihrem Render-Dashboard:
   - backend: Die Backend-API
   - frontend: Die Frontend-Anwendung
   
2. Klicken Sie auf den Frontend-Dienst, um die Details anzuzeigen
   ![Frontend-Dienst](https://i.imgur.com/example13.png)

3. Oben auf der Seite finden Sie die URL Ihrer bereitgestellten Anwendung (z.B. https://tiktok-shop-integration.onrender.com)
   ![Anwendungs-URL](https://i.imgur.com/example14.png)

4. Klicken Sie auf diese URL, um Ihre TikTok Shop Integration Plattform zu öffnen
   ![Fertige Anwendung](https://i.imgur.com/example15.png)

## Schritt 5: Überprüfen der Backend-Verbindung

1. Gehen Sie zurück zum Render-Dashboard und klicken Sie auf den Backend-Dienst
   ![Backend-Dienst](https://i.imgur.com/example16.png)

2. Stellen Sie sicher, dass der Status "Live" ist
   ![Backend-Status](https://i.imgur.com/example17.png)

3. Notieren Sie sich die URL des Backend-Dienstes (z.B. https://tiktok-shop-integration-backend.onrender.com)

4. Wenn Sie auf Ihrer TikTok Shop Integration Plattform auf Daten zugreifen können, ist die Verbindung zwischen Frontend und Backend erfolgreich hergestellt

## Fehlerbehebung

Falls Probleme auftreten:

1. **Frontend zeigt keine Daten an**:
   - Überprüfen Sie, ob das Backend erfolgreich bereitgestellt wurde
   - Überprüfen Sie die Logs des Backend-Dienstes in Render.com

2. **Deployment-Fehler**:
   - Überprüfen Sie die Logs in Render.com für detaillierte Fehlermeldungen
   - Stellen Sie sicher, dass alle Dateien korrekt hochgeladen wurden

3. **Datenbank-Verbindungsprobleme**:
   - Render erstellt automatisch eine MongoDB-Datenbank. Überprüfen Sie die Umgebungsvariablen im Backend-Dienst

## Nächste Schritte

Nach erfolgreicher Bereitstellung können Sie:

1. Die URL Ihrer Anwendung mit anderen teilen
2. Ihre eigene Domain mit dem Dienst verbinden (über die Render.com-Einstellungen)
3. Anpassungen am Code vornehmen und erneut deployen

Ihre TikTok Shop Integration Plattform ist nun vollständig einsatzbereit und über einen permanenten Link zugänglich!
