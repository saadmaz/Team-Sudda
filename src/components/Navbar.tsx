import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-navy-glow" : "bg-navy/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <a href="#home" className="flex items-center text-white">
          <span className="font-display font-extrabold text-lg md:text-xl tracking-tight">
            Team <span className="text-yellow-brand">Sudda</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/85 hover:text-yellow-brand transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="hero">
            <a href="#contact">Get Free Quote</a>
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
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-white/90 font-medium hover:text-yellow-brand"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="hero" className="mt-3">
              <a href="#contact" onClick={() => setOpen(false)}>Get Free Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
