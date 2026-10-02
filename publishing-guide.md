# Publishing Fred Koehler’s Portfolio

## Recommended hosting arrangement

Use **GitHub Pages** for hosting and **GoDaddy** only for domain registration and DNS. This site is a static Vite site: artwork and pages are served as files, while both the direct inquiry form and the mailing-list opt-in submit directly to the existing Google Apps Script web app. No web server, database, or paid hosting plan is required.

> **Recommended canonical address:** `https://www.ilikefred.com`
>
> Configure both the apex (`ilikefred.com`) and `www` DNS records. GitHub Pages will redirect the non-canonical version once both are configured.

## 1. Move the current project to a GitHub repository

This website currently uses a **Manus-managed repository**. Do not replace its `origin` remote manually.

The safest route is to have Manus connect this project to GitHub using the managed GitHub transfer flow. Provide:

- the GitHub account or organization that should own the repository;
- the desired repository name (for example, `fred-koehler-portfolio`); and
- approval to create the repository as a **private** GitHub repository.

That transfer preserves the project history and makes GitHub the working repository for future updates. After it is connected, the project’s `main` branch will be the deployment branch.

## 2. Add a GitHub Pages deployment workflow

After the repository exists on GitHub, add this file at `.github/workflows/deploy.yml`:

```yaml
name: Deploy Fred Koehler Portfolio to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Enable Corepack
        run: corepack enable

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm build

      - name: Set up Pages
        uses: actions/configure-pages@v5

      - name: Upload site
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

Then, on GitHub:

1. Open the repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push the workflow to `main`; GitHub will publish a first `github.io` preview URL after the action completes.

The current Vite configuration already works for a custom domain because its asset base is `/`. Do **not** change it to a repository-name path when the permanent site will use `www.ilikefred.com`.

## 3. Register the custom domain in GitHub first

Before changing DNS at GoDaddy:

1. In the GitHub repository, open **Settings → Pages**.
2. Enter `www.ilikefred.com` in **Custom domain** and save it.
3. If GitHub offers domain verification, complete it. GitHub recommends verification before DNS changes as protection against domain takeover.

Do this first: GitHub explicitly advises adding the custom domain in repository settings before pointing DNS to GitHub Pages.

## 4. Update DNS records in GoDaddy

In GoDaddy, open **My Products → Domains → ilikefred.com → DNS → Manage DNS**.

Preserve all existing **MX**, **TXT**, **SPF**, and **DKIM** records. Those may be used by email and are unrelated to this website.

Create or update these website records:

| Type | Host / Name | Value / Points to | Notes |
|---|---|---|---|
| `A` | `@` | `185.199.108.153` | GitHub Pages apex record 1 |
| `A` | `@` | `185.199.109.153` | GitHub Pages apex record 2 |
| `A` | `@` | `185.199.110.153` | GitHub Pages apex record 3 |
| `A` | `@` | `185.199.111.153` | GitHub Pages apex record 4 |
| `CNAME` | `www` | `<YOUR-GITHUB-USERNAME>.github.io` | Use the GitHub user or organization name only—do not append the repository name. |

Remove only conflicting existing website records for `@` or `www` (for example, an old A record, forwarding target, or `www` CNAME). Do **not** use a wildcard `*` DNS record.

### DNS propagation and verification

- DNS changes can take up to **24 hours** to propagate, although they often resolve much faster.
- When DNS is live, return to **GitHub → Settings → Pages** and enable **Enforce HTTPS**. That option may take time to appear while GitHub issues the certificate.
- Check both `https://ilikefred.com` and `https://www.ilikefred.com`. GitHub should redirect the non-canonical host to the custom domain selected in Pages.

Optional terminal checks:

```bash
# Apex should return all four GitHub Pages A records.
dig ilikefred.com +noall +answer -t A

# www should resolve to your GitHub Pages host.
dig www.ilikefred.com +noall +answer -t CNAME
```

## 5. Final checks after the domain is live

1. Confirm the site loads under HTTPS on `www.ilikefred.com`.
2. Submit one test inquiry and one test mailing-list email; confirm both arrive in the connected Google Sheet / notification flow.
3. Test the portfolio lightbox, book shelf, and mobile layout.
4. After you confirm the permanent canonical address, add the final site-level SEO tags:
   - canonical URL;
   - Open Graph image, title, and description;
   - Twitter card metadata;
   - sitemap and robots document.

The current site already includes contextual `alt` and `title` metadata for all content images: the hero, headshot, book covers, portfolio images, and work-in-progress art. The only intentionally empty `alt` is the small decorative fish mark in the navigation, because the adjacent wordmark already names the site.

## Why GitHub Pages works well here

- Static hosting is fast and free for a small portfolio site.
- A commit to `main` automatically rebuilds and redeploys the site.
- The Google Apps Script endpoint continues to handle inquiry and subscriber submissions directly; GitHub Pages does not need server code.
- GoDaddy remains your registrar and DNS manager, without requiring GoDaddy web hosting.

## Official references

- [GitHub: Managing a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Vite: Deploying a static site to GitHub Pages](https://vite.dev/guide/static-deploy)
