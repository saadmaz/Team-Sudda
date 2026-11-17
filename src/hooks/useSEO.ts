import { useEffect } from "react";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
  jsonLd?: Record<string, unknown>;
}

export function useSEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  canonical,
  jsonLd,
}: SEOConfig) {
  // Compare by value so a new object literal each render does not re-run the effect.
  const jsonLdText = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("og:title", ogTitle ?? title, "property");
    setMeta("og:description", ogDescription ?? description, "property");
    setMeta("og:type", "website", "property");
    if (canonical) setMeta("og:url", canonical, "property");

    if (canonical !== undefined) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical || window.location.href;
    }

    // Replace the previous page's structured data, or clear it if this page has none.
    const id = "site-jsonld";
    document.getElementById(id)?.remove();
    if (jsonLdText) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      script.text = jsonLdText;
      document.head.appendChild(script);
    }
  }, [title, description, keywords, ogTitle, ogDescription, canonical, jsonLdText]);
}
