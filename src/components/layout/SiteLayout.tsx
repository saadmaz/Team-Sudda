import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { MobileCtaBar } from "./MobileCtaBar";

/** Scrolls to the top on navigation, or to the #hash target when there is one. */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

export const SiteLayout = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <ScrollManager />
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-yellow-brand focus:text-navy focus:px-4 focus:py-2 focus:rounded-lg font-semibold"
    >
      Skip to content
    </a>
    <Navbar />
    <main id="main" className="flex-1 pb-16 md:pb-0">
      <Outlet />
    </main>
    <Footer />
    <WhatsAppFab />
    <MobileCtaBar />
  </div>
);
