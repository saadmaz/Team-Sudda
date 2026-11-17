import { useSEO } from "./useSEO";

export const SITE_URL = "https://www.teamsudda.lk";

/**
 * Per-page title, description, canonical URL and optional JSON-LD.
 * `path` is the route, e.g. "/services/office-cleaning".
 */
export function usePageMeta({
  title,
  description,
  path,
  jsonLd,
}: {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>;
}) {
  useSEO({
    title: title.includes("Team Sudda") ? title : `${title} | Team Sudda`,
    description,
    canonical: `${SITE_URL}${path === "/" ? "/" : path}`,
    jsonLd,
  });
}
