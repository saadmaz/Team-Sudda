import { useSEO } from "./useSEO";

export const SITE_URL = "https://www.teamsudda.lk";

export interface PageHead {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: Record<string, unknown>;
}

/**
 * Head data captured while pre-rendering on the server, where effects don't run.
 * The pre-render script reads it after each page renders.
 */
export const ssrHead: { collecting: boolean; current: PageHead | null } = {
  collecting: false,
  current: null,
};

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
  const head: PageHead = {
    title: title.includes("Team Sudda") ? title : `${title} | Team Sudda`,
    description,
    canonical: `${SITE_URL}${path}`,
    jsonLd,
  };
  if (ssrHead.collecting) ssrHead.current = head;

  useSEO({ ...head });
}
