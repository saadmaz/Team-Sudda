// Pre-renders every public route into static HTML after `vite build`.
// Each page gets its full markup plus its own title, description, canonical,
// Open Graph tags and structured data, so search engines and link previews
// see real content. The browser then hydrates the page as normal.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const { render, ALL_ROUTES, routePriority, SITE_URL } = await import(
  pathToFileURL(join(ssrDir, "entry-server.js")).href
);
const template = await readFile(join(dist, "index.html"), "utf8");

const escapeAttr = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escapeText = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function setMeta(html, attr, key, value) {
  const re = new RegExp(`<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*/?>`, "s");
  const tag = `<meta ${attr}="${key}" content="${escapeAttr(value)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function applyHead(html, head) {
  if (!head) return html;
  html = html.replace(/<title>.*?<\/title>/s, `<title>${escapeText(head.title)}</title>`);
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escapeAttr(head.canonical)}" />`,
  );
  html = setMeta(html, "name", "description", head.description);
  html = setMeta(html, "property", "og:title", head.title);
  html = setMeta(html, "property", "og:description", head.description);
  html = setMeta(html, "property", "og:url", head.canonical);
  html = setMeta(html, "name", "twitter:title", head.title);
  html = setMeta(html, "name", "twitter:description", head.description);
  if (head.jsonLd) {
    // Escape "<" so content can never close the script tag.
    const json = JSON.stringify(head.jsonLd).replace(/</g, "\\u003c");
    html = html.replace(
      "</head>",
      `    <script type="application/ld+json" id="site-jsonld">${json}</script>\n  </head>`,
    );
  }
  return html;
}

const outFile = (route) =>
  route === "/" ? join(dist, "index.html") : join(dist, `${route.slice(1)}.html`);

let count = 0;
for (const route of ALL_ROUTES) {
  const { html, head } = await render(route);
  if (!head) throw new Error(`No page metadata for ${route}. Call usePageMeta on that page.`);
  if (!html.includes("<h1")) throw new Error(`Pre-rendered ${route} has no <h1>.`);
  const page = applyHead(template, head).replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`,
  );
  const file = outFile(route);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, page);
  count++;
}

const today = new Date().toISOString().split("T")[0];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ALL_ROUTES.map(
  (r) =>
    `  <url><loc>${SITE_URL}${r}</loc><lastmod>${today}</lastmod><priority>${routePriority(r).toFixed(1)}</priority></url>`,
).join("\n")}
</urlset>
`;
await writeFile(join(dist, "sitemap.xml"), sitemap);
await rm(ssrDir, { recursive: true, force: true });

console.log(`Pre-rendered ${count} pages and wrote sitemap.xml`);
