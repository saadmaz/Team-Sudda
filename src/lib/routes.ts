import { SERVICES, servicePath } from "./content/services";
import { INDUSTRIES, industryPath } from "./content/industries";
import { AREAS, areaPath } from "./content/areas";
import { BLOG_ARTICLES } from "./constants/blog";

/** Every public page. Used for pre-rendering, the sitemap and route tests. */
export const STATIC_ROUTES = [
  "/",
  "/homes",
  "/business",
  "/services",
  "/industries",
  "/areas",
  "/how-we-work",
  "/pricing",
  "/about",
  "/careers",
  "/faq",
  "/quote",
  "/book",
  "/business-quote",
  "/contact",
  "/feedback",
  "/blog",
  "/gallery",
  "/privacy-policy",
  "/terms",
] as const;

export const ALL_ROUTES: string[] = [
  ...STATIC_ROUTES,
  ...SERVICES.map(servicePath),
  ...INDUSTRIES.map(industryPath),
  ...AREAS.map(areaPath),
  ...BLOG_ARTICLES.map((a) => `/blog/${a.slug}`),
];

/** Sitemap priority by route depth and importance. */
export const routePriority = (path: string) =>
  path === "/"
    ? 1
    : ["/homes", "/business", "/quote", "/book", "/business-quote"].includes(path)
      ? 0.9
      : path.startsWith("/services/")
        ? 0.8
        : ["/privacy-policy", "/terms", "/feedback"].includes(path)
          ? 0.3
          : 0.6;
