# Node CI/CD Demo — GitHub Actions → Docker Hub

This repo contains a minimal **Node.js + Express** app containerized with **Docker** and automated with **GitHub Actions** to **build, test, and push** an image to **Docker Hub** on every push to `main`.

---

## 📦 What you get
- `server.js` — simple Express app (`/` and `/health`)
- `Dockerfile` — builds a production image
- `.github/workflows/main.yml` — CI/CD pipeline
- Basic test using Node's built-in `node:test`
- Ready-to-push project structure + instructions

---

## 🚀 CI/CD Flow
Trigger: **push to `main`** (or manual run)

1. **Build & Test** (Node 20)
   - `npm ci`
   - `npm test` (uses `node --test`)
2. **Build & Push Docker image** to Docker Hub
   - Tags: `latest` and short commit SHA

---

## 📂 Project Structure
```plaintext
node-cicd-demo/
│── server.js
│── package.json
│── Dockerfile
│── .dockerignore
│── .gitignore
│── test/
│   └── health.test.js
└── .github/
    └── workflows/
        └── main.yml
```

---

## 🧪 Run Locally
```bash
# Install deps
npm ci

# Run tests
npm test

# Start app
npm start
# Open http://localhost:3000
```

## 🐳 Build & Run with Docker (local)
```bash
docker build -t node-cicd-demo:local .
docker run -p 3000:3000 node-cicd-demo:local
# Open http://localhost:3000
```

---

## 🔐 Required GitHub Secrets
In your GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**

- `DOCKERHUB_USERNAME` → your Docker Hub username
- `DOCKERHUB_TOKEN` → a Docker Hub **Access Token**
  - Create at https://hub.docker.com/settings/security

> The workflow will push to: `docker.io/${DOCKERHUB_USERNAME}/node-cicd-demo`

**Optional:** Pre-create a **public** repo on Docker Hub named `node-cicd-demo`. (Docker Hub may auto-create on first push, but creating it yourself avoids permissions issues.)

---

## ✅ Step-by-step: Push this to GitHub and run the pipeline
1. **Create a GitHub repo** named `node-cicd-demo` (empty, no README).
2. **Create Docker Hub access token** and copy it.
3. **Add repo secrets** in GitHub:
   - `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN`
4. **Push code (Git Bash):**
   ```bash
   cd /h/node-cicd-demo
   git init
   git add .
   git commit -m "CI/CD: Node app + Docker + GitHub Actions"
   git branch -M main
   git remote add origin https://github.com/<your-username>/node-cicd-demo.git
   git push -u origin main
   ```
5. **Watch Actions run:** GitHub → Actions → select workflow → see logs.
6. **Verify image on Docker Hub:** look for `node-cicd-demo:latest`.

---

## ℹ️ Notes
- Node 20 is used in CI and the base image.
- Tests use built-in `node:test` — no extra libs.
- Change the image/repo name by editing `tags` in `.github/workflows/main.yml`.

---

## 📝 License
MIT
