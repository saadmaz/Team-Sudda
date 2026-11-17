import { useEffect, useRef, useState } from "react";
import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants/contact";
import { NAV_GROUPS, NAV_TOP_LINKS, type NavGroup } from "@/lib/content/navigation";
import { cn } from "@/lib/utils";

const DesktopGroup = ({
  group,
  open,
  onOpen,
  onClose,
}: {
  group: NavGroup;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) => {
  const wide = group.links.length > 5;
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => (open ? onClose() : onOpen())}
        className={cn(
          "flex items-center gap-1 text-sm font-medium transition-colors py-2",
          open ? "text-yellow-brand" : "text-white/85 hover:text-yellow-brand",
        )}
      >
        {group.label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
          <div
            className={cn(
              "rounded-2xl bg-white shadow-navy-glow border border-border p-3",
              wide ? "w-[40rem] grid grid-cols-2 gap-1" : "w-80 grid gap-1",
            )}
          >
            {group.links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="rounded-xl px-3 py-2.5 hover:bg-muted transition-colors"
              >
                <div className="text-sm font-semibold text-navy">{l.label}</div>
                {l.desc && (
                  <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{l.desc}</div>
                )}
              </Link>
            ))}
            {group.footer && (
              <Link
                to={group.footer.href}
                className={cn(
                  "rounded-xl px-3 py-2.5 bg-navy text-white text-sm font-semibold hover:bg-navy/90",
                  wide && "col-span-2",
                )}
              >
                {group.footer.label} →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const closeTimer = useRef<number>();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenGroup(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = (label: string) => {
    window.clearTimeout(closeTimer.current);
    setOpenGroup(label);
  };
  const close = () => {
    closeTimer.current = window.setTimeout(() => setOpenGroup(null), 120);
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-navy-glow" : "bg-navy/80 backdrop-blur-sm",
      )}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between gap-6">
        <Link
          to="/"
          className="font-display font-extrabold text-white text-lg tracking-tight hover:text-yellow-brand transition-colors shrink-0"
        >
          Team <span className="text-yellow-brand">Sudda</span>
        </Link>

        <nav className="hidden xl:flex items-center gap-7" aria-label="Main">
          {NAV_GROUPS.slice(0, 3).map((g) => (
            <DesktopGroup
              key={g.label}
              group={g}
              open={openGroup === g.label}
              onOpen={() => open(g.label)}
              onClose={close}
            />
          ))}
          {NAV_TOP_LINKS.map((l) => (
            <RouterNavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
                  isActive ? "text-yellow-brand" : "text-white/85 hover:text-yellow-brand",
                )
              }
            >
              {l.label}
            </RouterNavLink>
          ))}
          <DesktopGroup
            group={NAV_GROUPS[3]}
            open={openGroup === NAV_GROUPS[3].label}
            onOpen={() => open(NAV_GROUPS[3].label)}
            onClose={close}
          />
        </nav>

        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <a
            href={`tel:${CONTACT.phone}`}
            className="flex items-center gap-2 text-sm font-semibold text-white hover:text-yellow-brand"
          >
            <Phone className="h-4 w-4" /> {CONTACT.phoneFormatted}
          </a>
          <Button asChild variant="hero">
            <Link to="/quote">Get a Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="xl:hidden text-white p-2 -mr-2"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-navy-deep border-t border-white/10 max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <nav className="container-x py-4 flex flex-col" aria-label="Mobile">
            {NAV_GROUPS.map((g) => {
              const expanded = mobileGroup === g.label;
              return (
                <div key={g.label} className="border-b border-white/10">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setMobileGroup(expanded ? null : g.label)}
                    className="w-full flex items-center justify-between py-3.5 text-white font-medium"
                  >
                    {g.label}
                    <ChevronDown
                      className={cn("h-5 w-5 transition-transform", expanded && "rotate-180")}
                    />
                  </button>
                  {expanded && (
                    <div className="pb-3 grid gap-0.5">
                      {[...g.links, ...(g.footer ? [g.footer] : [])].map((l) => (
                        <Link
                          key={l.href + l.label}
                          to={l.href}
                          className="py-2 pl-3 text-sm text-white/75 hover:text-yellow-brand"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            {NAV_TOP_LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="py-3.5 border-b border-white/10 text-white font-medium hover:text-yellow-brand"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild variant="hero" className="mt-5">
              <Link to="/quote">Get a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
