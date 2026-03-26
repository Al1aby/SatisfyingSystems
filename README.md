# Flow Foundry

Flow Foundry is a lightweight browser puzzle game where you rotate tiles to connect sources and receivers.

## Play locally

Because this project is plain HTML/CSS/JS, you can run it with any static server.

### Option 1: Python

```bash
python3 -m http.server 8080
```

Then open: `http://localhost:8080`

### Option 2: Node

```bash
npx serve .
```

## Deploy on GitHub Pages

This repo includes a GitHub Actions workflow at:

- `.github/workflows/deploy-pages.yml`

### One-time setup in GitHub

1. Go to your repository **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or `master`).

After a push, GitHub Actions will deploy the site automatically.

## Project structure

- `index.html` – App shell
- `src/styles.css` – Game styles
- `src/game.js` – Core game logic
- `src/levels.js` – Level definitions
- `src/audio.js` – Sound effects
