import { Link } from "react-router-dom";
import { ArrowRight, Check, X } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Testimonials } from "@/components/Testimonials";
import { FaqList } from "@/components/FaqList";
import { CtaBand, LinkCard, SectionHeading } from "@/components/blocks";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { CONTACT } from "@/lib/constants/contact";
import { FAQS } from "@/lib/constants/faqs";
import { HOME_SERVICES, BUSINESS_SERVICES, servicePath } from "@/lib/content/services";
import { INDUSTRIES, industryPath } from "@/lib/content/industries";
import { COMMITMENTS, COMPARISON, PROCESS } from "@/lib/content/standard";

const Index = () => {
  usePageMeta({
    title: "Team Sudda - Home & Office Cleaning in Colombo, Done Properly",
    description:
      "Home, office and contract cleaning across Colombo and Greater Colombo. Written quotations, a checklist on every job, supervised teams and a free re-clean within 24 hours.",
    path: "/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "HouseCleaningService",
      name: "Team Sudda",
      url: "https://www.teamsudda.lk/",
      image: "https://www.teamsudda.lk/og-image.jpg",
      description: "Home, office and commercial cleaning in Colombo and Greater Colombo.",
      telephone: CONTACT.phone,
      email: CONTACT.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT.address.street,
        addressLocality: CONTACT.address.city,
        addressCountry: CONTACT.address.countryCode,
      },
      areaServed: "Colombo and Greater Colombo, Sri Lanka",
      parentOrganization: { "@type": "Organization", name: "STTPS", url: "https://sttps.co" },
    },
  });

  return (
    <>
      <Hero />

      {/* Commitments strip */}
      <section className="bg-navy-deep border-t border-white/10">
        <div className="container-x">
          <ul className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-white/10">
            {COMMITMENTS.map(({ icon: Icon, title }, i) => (
              <li
                key={title}
                className={`flex items-center gap-3 bg-navy-deep py-5 px-4 text-white ${
                  i === COMMITMENTS.length - 1 ? "col-span-2 lg:col-span-1" : ""
                }`}
              >
                <Icon className="h-5 w-5 text-yellow-brand shrink-0" />
                <span className="font-semibold text-sm">{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Do"
            title="One standard, for homes and workplaces."
            intro="Every service has a written checklist, a clear scope and a team lead who checks the job before we leave."
          />
          <div className="grid lg:grid-cols-2 gap-10">
            {[
              {
                label: "For Homes",
                list: HOME_SERVICES.slice(0, 4),
                all: "/homes",
                cta: "All home services",
              },
              {
                label: "For Business",
                list: BUSINESS_SERVICES.slice(0, 4),
                all: "/business",
                cta: "All business services",
              },
            ].map((col) => (
              <div key={col.label}>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-display font-bold text-xl text-navy">{col.label}</h3>
                  <Link
                    to={col.all}
                    className="text-sm font-semibold text-navy hover:text-yellow-ink inline-flex items-center gap-1"
                  >
                    {col.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {col.list.map((s) => (
                    <LinkCard
                      key={s.slug}
                      href={servicePath(s)}
                      icon={s.icon}
                      title={s.name}
                      desc={s.summary}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-navy text-white">
        <div className="container-x">
          <SectionHeading
            dark
            eyebrow="The Team Sudda Standard"
            title={
              <>
                How every job is run, <span className="text-yellow-brand">start to finish.</span>
              </>
            }
            intro="The standard does not depend on who turned up that day. It's written down, and every team follows it."
          />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS.map(({ n, title, desc, icon: Icon }) => (
              <li key={n} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display font-extrabold text-3xl text-yellow-brand">
                    {n}
                  </span>
                  <Icon className="h-6 w-6 text-white/50" />
                </div>
                <h3 className="mt-4 font-display font-bold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
          <Button asChild variant="hero" size="lg" className="mt-10">
            <Link to="/how-we-work">
              Read the full standard <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Comparison */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Team Sudda"
            title="What “done properly” actually means."
            intro="Most cleaning goes wrong in the same few places. These are the ones we've designed out."
          />
          <div className="overflow-hidden rounded-3xl border border-border shadow-card-soft">
            <div className="hidden md:grid grid-cols-[1fr_1.3fr_1.3fr] bg-muted/60 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <div className="px-6 py-4" />
              <div className="px-6 py-4">A typical service</div>
              <div className="px-6 py-4 text-navy">Team Sudda</div>
            </div>
            {COMPARISON.map((row) => (
              <div
                key={row.topic}
                className="grid md:grid-cols-[1fr_1.3fr_1.3fr] border-t border-border first:border-t-0 md:first:border-t"
              >
                <div className="px-6 pt-5 md:py-5 font-display font-bold text-navy">
                  {row.topic}
                </div>
                <div className="px-6 py-2 md:py-5 flex gap-2 text-sm text-muted-foreground">
                  <X className="h-4 w-4 shrink-0 mt-0.5 text-destructive/70" aria-label="Typical" />{" "}
                  {row.typical}
                </div>
                <div className="px-6 pb-5 md:py-5 flex gap-2 text-sm font-medium text-foreground md:bg-yellow-brand/10">
                  <Check className="h-4 w-4 shrink-0 mt-0.5 text-navy" aria-label="Team Sudda" />{" "}
                  {row.us}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-muted/40">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <SectionHeading
              eyebrow="Industries"
              title="Cleaning built around how your site works."
              intro="An office, a bank branch and an apartment lobby need different schedules, rules and checklists. We plan each one properly."
            />
            <Button asChild variant="outline" className="mb-10 md:mb-12 shrink-0">
              <Link to="/industries">All industries</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map(({ slug, name, icon: Icon }) => (
              <Link
                key={slug}
                to={industryPath({ slug })}
                className="group flex items-center gap-3 rounded-2xl bg-background border border-border p-4 md:p-5 hover:border-yellow-brand transition-colors"
              >
                <Icon className="h-6 w-6 text-navy shrink-0 group-hover:text-yellow-ink" />
                <span className="font-semibold text-sm text-navy">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Clients />
      <GalleryPreview />
      <Testimonials />

      {/* FAQ */}
      <section className="section">
        <div className="container-x grid lg:grid-cols-[1fr_1.5fr] gap-10">
          <div>
            <SectionHeading eyebrow="FAQ" title="Questions people ask before booking." />
            <Button asChild variant="outline">
              <Link to="/faq">See all questions</Link>
            </Button>
          </div>
          <FaqList items={FAQS.slice(0, 5)} />
        </div>
      </section>

      <CtaBand />
    </>
  );
};

export default Index;
