# Shubham Thakar — Portfolio

A simple, fast, and responsive static portfolio site built with HTML, CSS, and a sprinkle of JS.

## Structure

- `index.html` — main page with sections
- `assets/css/styles.css` — styles and theming
- `assets/js/main.js` — theme toggle and smooth scrolling

## Run locally

Open `index.html` directly, or start a tiny dev server:

```bash
# Python
python -m http.server 9000
# or Node (if installed)
npx serve .
```

Then visit `http://localhost:9000`.

## Customization

- Update contact details in the Contact section.
- Replace social links in the Hero section with your actual LinkedIn/GitHub/Resume links.
- Tweak colors by editing CSS variables in `:root` and `.light` in `assets/css/styles.css`.

## License

MIT

## Deployment

### GitHub Pages (recommended for static)
1. Create a new repo and push this folder.
2. In repo Settings → Pages, select branch `main` and `/ (root)`.
3. Update canonical and OG URLs in `index.html` to your GitHub Pages URL.
4. Add a `CNAME` file if using a custom domain.

### Netlify
1. Drag-and-drop this folder into Netlify, or connect the repo.
2. Build command: none; Publish directory: `/`.
3. Add a custom domain and enable HTTPS.

### Custom domain
1. Point your domain DNS A/AAAA to host or use CNAME to GitHub Pages.
2. Replace `https://your-domain.example/` in `index.html`, `robots.txt`, and `sitemap.xml`.
3. Upload an `og-image.jpg` at project root or adjust the path in meta tags.


