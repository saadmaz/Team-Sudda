import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants/contact";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href?: string;
}

export const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Breadcrumb" className="text-xs text-white/60">
    <ol className="flex flex-wrap items-center gap-1">
      <li>
        <Link to="/" className="hover:text-yellow-brand">
          Home
        </Link>
      </li>
      {items.map((c) => (
        <li key={c.label} className="flex items-center gap-1">
          <ChevronRight className="h-3 w-3" aria-hidden="true" />
          {c.href ? (
            <Link to={c.href} className="hover:text-yellow-brand">
              {c.label}
            </Link>
          ) : (
            <span aria-current="page" className="text-white/85">
              {c.label}
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export const PageHero = ({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
  align?: "left" | "center";
}) => (
  <section className="gradient-hero pt-28 md:pt-36 pb-14 md:pb-20 relative overflow-hidden">
    <div className="container-x relative text-white">
      {crumbs && (
        <div className="mb-6">
          <Breadcrumbs items={crumbs} />
        </div>
      )}
      <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="heading-xl font-display font-extrabold mt-3 text-balance">{title}</h1>
        {intro && (
          <p className="mt-5 text-base md:text-lg text-white/75 leading-relaxed">{intro}</p>
        )}
        {children && (
          <div className={cn("mt-8 flex flex-wrap gap-3", align === "center" && "justify-center")}>
            {children}
          </div>
        )}
      </div>
    </div>
  </section>
);

export const SectionHeading = ({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
}) => (
  <div className={cn("max-w-2xl mb-10 md:mb-12", align === "center" && "mx-auto text-center")}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2 className={cn("heading-lg font-display mt-3 text-balance", !dark && "text-navy")}>
      {title}
    </h2>
    {intro && (
      <p className={cn("mt-4 leading-relaxed", dark ? "text-white/70" : "text-muted-foreground")}>
        {intro}
      </p>
    )}
  </div>
);

export const Checklist = ({ items, dark = false }: { items: string[]; dark?: boolean }) => (
  <ul className="grid gap-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-yellow-brand text-navy">
          <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
        </span>
        <span className={cn("leading-relaxed", dark ? "text-white/85" : "text-foreground")}>
          {item}
        </span>
      </li>
    ))}
  </ul>
);

/** Closing call to action used at the bottom of most pages. */
export const CtaBand = ({
  title = "Tell us about the space. We'll give you a clear quotation.",
  intro = "Homes are usually quoted from a few details and photos. Businesses get a free site survey.",
  primary = { label: "Get a Quote", href: "/quote" },
}: {
  title?: ReactNode;
  intro?: ReactNode;
  primary?: { label: string; href: string };
}) => (
  <section className="bg-navy-deep py-16 md:py-20 relative overflow-hidden">
    <div className="container-x relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
      <div className="max-w-2xl">
        <h2 className="heading-md font-display text-white text-balance">{title}</h2>
        <p className="mt-3 text-white/70">{intro}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button asChild variant="hero" size="xl">
          <Link to={primary.href}>
            {primary.label} <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
        <Button asChild variant="whatsapp" size="xl">
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
        </Button>
        <Button asChild variant="heroOutline" size="xl">
          <a href={`tel:${CONTACT.phone}`}>
            <Phone className="h-5 w-5" /> Call
          </a>
        </Button>
      </div>
    </div>
  </section>
);

/** Card linking to a service, industry or other page. */
export const LinkCard = ({
  href,
  icon: Icon,
  title,
  desc,
}: {
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  desc?: string;
}) => (
  <Link
    to={href}
    className="group flex flex-col h-full bg-background rounded-2xl p-6 border border-border shadow-card-soft hover:border-yellow-brand hover:-translate-y-1 transition-all duration-300"
  >
    {Icon && (
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-yellow-brand mb-5 group-hover:bg-yellow-brand group-hover:text-navy transition-colors">
        <Icon className="h-6 w-6" />
      </div>
    )}
    <h3 className="font-display font-bold text-lg text-navy">{title}</h3>
    {desc && <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>}
    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:gap-2 transition-all">
      Learn more <ArrowRight className="h-4 w-4" />
    </span>
  </Link>
);
