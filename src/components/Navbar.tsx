import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Anchor links on the homepage; prefix with / so they work from any page
const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/about", label: "About", isRoute: true },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-navy-glow" : "bg-navy/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <Link
          to="/"
          className="font-display font-extrabold text-white text-lg tracking-tight hover:text-yellow-brand transition-colors"
        >
          Team Sudda
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) =>
            l.isRoute ? (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === l.href
                    ? "text-yellow-brand"
                    : "text-white/85 hover:text-yellow-brand"
                }`}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/85 hover:text-yellow-brand transition-colors"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="hero">
            <Link to="/book">Get Free Quote</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-deep border-t border-white/10">
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) =>
              l.isRoute ? (
                <Link
                  key={l.href}
                  to={l.href}
                  className="py-3 text-white/90 font-medium hover:text-yellow-brand"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className="py-3 text-white/90 font-medium hover:text-yellow-brand"
                >
                  {l.label}
                </a>
              ),
            )}
            <Button asChild variant="hero" className="mt-3">
              <Link to="/book">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
