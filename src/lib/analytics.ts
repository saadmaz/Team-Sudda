/**
 * Google Analytics 4, loaded only when VITE_GA_MEASUREMENT_ID is set.
 * With no ID every function is a no-op, so development and previews send nothing.
 */
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

let started = false;

export function initAnalytics() {
  if (!GA_ID || started || typeof window === "undefined") return;
  started = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag expects the arguments object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  // Page views are sent manually on each route change.
  window.gtag("config", GA_ID, { send_page_view: false });

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(s);

  // Count phone and WhatsApp taps anywhere on the site as contact events.
  document.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement | null)?.closest?.("a");
    const href = a?.getAttribute("href") ?? "";
    if (href.startsWith("tel:")) track("contact", { method: "phone" });
    else if (href.includes("wa.me")) track("contact", { method: "whatsapp" });
    else if (href.startsWith("mailto:")) track("contact", { method: "email" });
  });
}

export function track(event: string, params: Record<string, unknown> = {}) {
  window.gtag?.("event", event, params);
}

export function trackPageView(path: string) {
  track("page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
