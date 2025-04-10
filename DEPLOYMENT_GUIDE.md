# TikTok Shop Integration - Deployment Guide

Diese Anleitung führt Sie durch den Prozess der Bereitstellung der TikTok Shop Integration Plattform auf permanenten Hosting-Diensten.

## Voraussetzungen

- Ein Render.com-Konto (kostenlose Registrierung möglich)
- Git installiert auf Ihrem Computer
- Grundlegende Kenntnisse der Befehlszeile

## Schritt-für-Schritt Anleitung

### 1. Repository klonen

```bash
git clone https://github.com/your-username/tiktok-shop-integration.git
cd tiktok-shop-integration
```

### 2. Deployment auf Render.com

Render.com bietet eine einfache Möglichkeit, sowohl das Backend als auch das Frontend zu hosten:

1. Melden Sie sich bei [Render.com](https://render.com) an
2. Klicken Sie auf "New" und wählen Sie "Blueprint"
3. Verbinden Sie Ihr GitHub-Repository
4. Wählen Sie das Repository aus und klicken Sie auf "Apply"
5. Render wird automatisch das Backend und Frontend basierend auf der render.yaml-Konfiguration bereitstellen

### 3. Alternativ: Manuelles Deployment

#### Backend (Heroku)

1. Melden Sie sich bei [Heroku](https://heroku.com) an
2. Erstellen Sie eine neue App
3. Verbinden Sie Ihr GitHub-Repository oder verwenden Sie die Heroku CLI:
   ```bash
   cd backend
   heroku login
   git init
   heroku git:remote -a your-app-name
   git add .
   git commit -m "Initial commit"
   git push heroku master
   ```

#### Frontend (Vercel)

1. Melden Sie sich bei [Vercel](https://vercel.com) an
2. Klicken Sie auf "New Project"
3. Importieren Sie Ihr GitHub-Repository oder verwenden Sie die Vercel CLI:
   ```bash
   cd frontend
   npm install -g vercel
   vercel login
   vercel
   ```

### 4. Umgebungsvariablen konfigurieren

Stellen Sie sicher, dass Sie die folgenden Umgebungsvariablen in Ihrem Hosting-Dienst konfigurieren:

#### Backend
- `MONGODB_URI`: Ihre MongoDB-Verbindungszeichenfolge
- `NODE_ENV`: "production"
- `PORT`: 8080 (oder der von Ihrem Hosting-Dienst zugewiesene Port)

#### Frontend
- `REACT_APP_API_URL`: Die URL Ihres Backend-API-Endpunkts

### 5. Überprüfen der Bereitstellung

Nach erfolgreicher Bereitstellung können Sie auf Ihre Anwendung über die folgenden URLs zugreifen:

- Frontend: https://tiktok-shop-integration.onrender.com
- Backend API: https://tiktok-shop-integration-backend.onrender.com/api

## Fehlerbehebung

Wenn Sie auf Probleme stoßen:

1. Überprüfen Sie die Logs in Ihrem Hosting-Dashboard
2. Stellen Sie sicher, dass alle Umgebungsvariablen korrekt konfiguriert sind
3. Überprüfen Sie, ob die MongoDB-Verbindung funktioniert

## Support

Bei Fragen oder Problemen wenden Sie sich bitte an den Support unter support@tiktok-platform.com
