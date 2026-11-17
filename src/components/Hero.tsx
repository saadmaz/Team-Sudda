import { Link } from "react-router-dom";
import { ArrowRight, Building2, Check, Home, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants/contact";

const PATHS = [
  {
    icon: Home,
    title: "For your home",
    points: [
      "Regular and deep cleaning",
      "Move-in, move-out and renovation",
      "Sofa, carpet and mattress",
    ],
    href: "/homes",
    cta: "Book a home clean",
    ctaHref: "/book",
  },
  {
    icon: Building2,
    title: "For your workplace",
    points: [
      "Contract office cleaning",
      "Housekeeping and tea service",
      "Floor care and deep cleans",
    ],
    href: "/business",
    cta: "Request a site survey",
    ctaHref: "/business-quote",
  },
];

export const Hero = () => (
  <section className="relative gradient-hero pt-28 md:pt-36 overflow-hidden">
    <div className="container-x relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-14 md:pb-20">
      <div className="text-white animate-fade-up lg:col-span-6">
        <span className="eyebrow">Home & Office Cleaning · Colombo</span>
        <h1 className="heading-xl font-display font-extrabold mt-4 text-balance">
          Cleaning, done <span className="text-yellow-brand">properly.</span> Every visit.
        </h1>
        <p className="mt-5 text-base md:text-lg text-white/75 max-w-xl leading-relaxed">
          Trained, supervised teams for homes and workplaces across Colombo and Greater Colombo. A
          written quotation before we start, a checklist on every job, and a free re-clean if we
          miss something.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="hero" size="xl">
            <Link to="/quote">
              Get a Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="whatsapp" size="xl">
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </Button>
          <Button asChild variant="heroOutline" size="xl" className="hidden sm:inline-flex">
            <a href={`tel:${CONTACT.phone}`}>
              <Phone className="h-5 w-5" /> {CONTACT.phoneFormatted}
            </a>
          </Button>
        </div>
      </div>

      <div
        className="lg:col-span-6 grid sm:grid-cols-2 gap-4 animate-fade-up"
        style={{ animationDelay: "150ms" }}
      >
        {PATHS.map(({ icon: Icon, title, points, href, cta, ctaHref }) => (
          <div
            key={title}
            className="rounded-3xl bg-white/[0.06] border border-white/15 p-6 backdrop-blur-sm flex flex-col"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-yellow-brand text-navy">
              <Icon className="h-6 w-6" />
            </div>
            <Link
              to={href}
              className="mt-5 font-display font-bold text-xl text-white hover:text-yellow-brand"
            >
              {title}
            </Link>
            <ul className="mt-4 grid gap-2 text-sm text-white/75 flex-1">
              {points.map((p) => (
                <li key={p} className="flex gap-2">
                  <Check className="h-4 w-4 text-yellow-brand shrink-0 mt-0.5" /> {p}
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" className="mt-6 w-full">
              <Link to={ctaHref}>{cta}</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);
