# Reishi Root Website

A static Reishi Root storefront landing page built with `index.html` and `styles.css`.

## Where the website files are

- `index.html` — the website page structure and content.
- `styles.css` — the full visual design and responsive styling.

## Easiest way to view on iPhone

### Option 1: Use GitHub Pages after this repo is pushed

This is the easiest option for an iPhone because it gives you a normal website link.

1. Push this project to GitHub.
2. In GitHub, open the repository settings.
3. Go to **Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: the current branch
   - Folder: `/root`
5. Save the settings.
6. GitHub will provide a public website URL. Open that URL in Safari on your iPhone.

### Option 2: Preview from your computer on the same Wi-Fi

Use this if you want to preview before publishing.

1. On your computer, open a terminal in this project folder.
2. Start a local web server:

   ```bash
   python3 -m http.server 8000
   ```

3. Find your computer's local Wi-Fi IP address.
   - On macOS, run:

     ```bash
     ipconfig getifaddr en0
     ```

   - On Linux, run:

     ```bash
     hostname -I
     ```

4. On your iPhone, make sure you are connected to the same Wi-Fi network.
5. Open Safari and visit:

   ```text
   http://YOUR-COMPUTER-IP:8000/
   ```

   Example:

   ```text
   http://192.168.1.25:8000/
   ```

## Quick desktop preview

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/
```
