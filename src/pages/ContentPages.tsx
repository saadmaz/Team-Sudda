import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  GraduationCap,
  HeartHandshake,
  Shirt,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checklist, CtaBand, PageHero, SectionHeading } from "@/components/blocks";
import { FaqList } from "@/components/FaqList";
import { faqJsonLd } from "@/lib/structuredData";
import { usePageMeta } from "@/hooks/usePageMeta";
import { FAQS } from "@/lib/constants/faqs";
import { PRICING } from "@/lib/constants/pricing";
import { COMMITMENTS, PROCESS } from "@/lib/content/standard";
import { CAREERS_ROLES } from "@/lib/content/formDefinitions";
import { CareersForm } from "./FormPages";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------- /how-we-work
export const HowWeWorkPage = () => {
  usePageMeta({
    title: "How We Work: The Team Sudda Standard",
    description:
      "The written standard behind every Team Sudda job: quotation first, checklists, team-lead checks, a free re-clean within 24 hours and cover for contract sites.",
    path: "/how-we-work",
  });
  return (
    <>
      <PageHero
        eyebrow="The Team Sudda Standard"
        title="A standard you can check."
        intro="Anyone can say they're the best. We'd rather show you exactly how we work, so you can hold us to it."
        crumbs={[{ label: "How We Work" }]}
      />

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="The Process" title="From first message to finished job." />
          <ol className="relative grid gap-6 md:gap-8 border-l-2 border-yellow-brand/60 pl-6 md:pl-10 max-w-3xl">
            {PROCESS.map(({ n, title, desc, icon: Icon }) => (
              <li key={n} className="relative">
                <span className="absolute -left-[2.15rem] md:-left-[3.15rem] top-0 grid h-8 w-8 place-items-center rounded-full bg-navy text-yellow-brand text-xs font-bold">
                  {n}
                </span>
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-navy" />
                  <h3 className="font-display font-bold text-lg text-navy">{title}</h3>
                </div>
                <p className="mt-2 text-muted-foreground leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-x">
          <SectionHeading dark eyebrow="Our Commitments" title="What we promise on every job." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMMITMENTS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <Icon className="h-7 w-7 text-yellow-brand" />
                <h3 className="mt-4 font-display font-bold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <div>
            <SectionHeading eyebrow="How We Clean" title="The order matters." />
            <Checklist
              items={[
                "Top to bottom, so dust falls onto surfaces we haven't cleaned yet",
                "Dry to wet: dust and vacuum before wiping and mopping",
                "Clean to dirty: bathrooms last, with separate cloths",
                "Clean first, then disinfect, because disinfectant can't work through dirt",
                "Products used at the dilution and contact time on the label",
              ]}
            />
          </div>
          <div>
            <SectionHeading eyebrow="Our People" title="Trained before they're on site." />
            <Checklist
              items={[
                "Every cleaner is trained in our process before working on site",
                "Teams work in uniform and are led by a team lead",
                "Business sites have a supervisor who checks the work",
                "Regular customers keep the same team wherever possible",
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
};

// --------------------------------------------------------------- /pricing
export const PricingPage = () => {
  usePageMeta({
    title: "Pricing",
    description:
      "How Team Sudda prices home and business cleaning in Colombo. Session packages for homes, site surveys for businesses, and a written quotation before every job.",
    path: "/pricing",
  });
  const factors = [
    ["Size of the space", "Bedrooms, bathrooms and floor area set the time and team size."],
    [
      "Condition",
      "A home that hasn't been deep cleaned in a year needs more time than one cleaned monthly.",
    ],
    [
      "Type of service",
      "A regular clean, a deep clean and a post-renovation clean are very different jobs.",
    ],
    ["Frequency", "Regular schedules are planned more efficiently than one-off visits."],
    ["Add-ons", "Inside ovens and fridges, sofa shampoo, mattresses and similar extras."],
    [
      "Location and access",
      "Travel, parking and access (stairs, lifts, gate times) are factored in.",
    ],
  ];
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="A clear price, before we start."
        intro="We don't use one made-up price for every home. We ask the right questions, then give you a written quotation with the team size, time and price. That's the number you pay."
        crumbs={[{ label: "Pricing" }]}
      />

      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Home Session Packages"
            title="Book by team size."
            intro="For general and deep home cleaning, most customers book a full-day session. Your quotation confirms the price for your home."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING.map((tier) => (
              <div
                key={tier.id}
                className={cn(
                  "relative rounded-3xl border-2 p-7 flex flex-col",
                  tier.popular
                    ? "border-yellow-brand bg-navy text-white shadow-navy-glow"
                    : "border-border",
                )}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-7 rounded-full bg-yellow-brand text-navy text-[11px] font-bold uppercase tracking-wider px-3 py-1">
                    Most booked
                  </span>
                )}
                <h3 className={cn("font-display font-bold text-2xl", !tier.popular && "text-navy")}>
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    "text-sm mt-1",
                    tier.popular ? "text-white/70" : "text-muted-foreground",
                  )}
                >
                  {tier.tagline}
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold">
                  <Users className="h-4 w-4" /> {tier.cleaners} cleaner
                  {tier.cleaners > 1 ? "s" : ""} · {tier.hours} hours
                </div>
                <ul className="mt-5 grid gap-2.5 text-sm flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check
                        className={cn(
                          "h-4 w-4 shrink-0 mt-0.5",
                          tier.popular ? "text-yellow-brand" : "text-navy",
                        )}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={tier.popular ? "hero" : "navy"} className="mt-7">
                  <Link to="/book">Get my quotation</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/40">
        <div className="container-x">
          <SectionHeading eyebrow="What Affects the Price" title="Every space is different." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {factors.map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-background border border-border p-6">
                <h3 className="font-display font-bold text-navy">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading
              eyebrow="Business Pricing"
              title="Contracts are priced from a site survey."
              intro="For offices, buildings and other commercial sites, we visit first. The proposal sets out the scope, schedule, staffing and a monthly or per-visit price, with no hidden extras."
            />
            <Button asChild variant="hero" size="lg">
              <Link to="/business-quote">
                Request a Site Survey <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="rounded-3xl bg-navy text-white p-8">
            <h3 className="font-display font-bold text-xl">Our pricing promise</h3>
            <div className="mt-5">
              <Checklist
                dark
                items={[
                  "Written quotation before the job is confirmed",
                  "No extra charges added after the work is done",
                  "If the job turns out to be materially different on the day, we explain why before doing more",
                  "Free re-clean within 24 hours if something was missed",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
};

// --------------------------------------------------------------- /careers
export const CareersPage = () => {
  usePageMeta({
    title: "Careers",
    description:
      "Join Team Sudda. We're hiring cleaners, housekeeping staff, tea service staff and team leads in Colombo, with training provided.",
    path: "/careers",
  });
  const perks = [
    {
      icon: GraduationCap,
      title: "Training provided",
      desc: "You learn our process before you work on site. No experience is needed for entry roles.",
    },
    {
      icon: Shirt,
      title: "Uniform and equipment",
      desc: "We provide your uniform, products and equipment.",
    },
    {
      icon: TrendingUp,
      title: "Room to grow",
      desc: "Good cleaners become team leads, and team leads become supervisors.",
    },
    {
      icon: HeartHandshake,
      title: "Respect for the work",
      desc: "Cleaning is skilled work. We treat it, and the people who do it, that way.",
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Do the work properly. Grow with us."
        intro="Team Sudda is part of the STTPS group, which is building service companies that raise the standard of everyday work. We're looking for people who take pride in a job done right."
        crumbs={[{ label: "Careers" }]}
      >
        <Button asChild variant="hero" size="xl">
          <a href="#apply">
            Apply Now <ArrowRight className="h-5 w-5" />
          </a>
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Why Join" title="What you can expect." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border p-6">
                <Icon className="h-7 w-7 text-navy" />
                <h3 className="mt-4 font-display font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/40">
        <div className="container-x">
          <SectionHeading eyebrow="Roles" title="Who we're looking for." />
          <ul className="flex flex-wrap gap-3">
            {CAREERS_ROLES.map((r) => (
              <li
                key={r}
                className="rounded-full bg-background border border-border px-5 py-2.5 font-semibold text-navy"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="apply" className="section scroll-mt-20">
        <div className="container-x max-w-3xl">
          <SectionHeading
            eyebrow="Apply"
            title="Send us your details."
            intro="It takes two minutes. If you prefer, WhatsApp us your name, area and the role you want."
          />
          <div className="relative rounded-3xl border border-border p-6 md:p-10 shadow-card-soft">
            <CareersForm />
          </div>
        </div>
      </section>
    </>
  );
};

// ------------------------------------------------------------------- /faq
export const FaqPage = () => {
  usePageMeta({
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about booking, pricing, products, areas and our re-clean promise.",
    path: "/faq",
    jsonLd: faqJsonLd(FAQS),
  });
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Straight answers."
        intro="Can't find what you need? WhatsApp us and a real person will reply."
        crumbs={[{ label: "FAQ" }]}
      />
      <section className="section">
        <div className="container-x max-w-3xl">
          <FaqList items={FAQS} />
        </div>
      </section>
      <CtaBand />
    </>
  );
};
