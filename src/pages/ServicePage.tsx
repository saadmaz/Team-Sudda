import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CalendarClock, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checklist, CtaBand, LinkCard, PageHero, SectionHeading } from "@/components/blocks";
import { FaqList } from "@/components/FaqList";
import { faqJsonLd } from "@/lib/structuredData";
import { usePageMeta, SITE_URL } from "@/hooks/usePageMeta";
import { CONTACT } from "@/lib/constants/contact";
import { getService, servicePath, SERVICES } from "@/lib/content/services";
import { INDUSTRIES, industryPath } from "@/lib/content/industries";
import { PROCESS } from "@/lib/content/standard";

const ServicePage = () => {
  const { slug } = useParams();
  const service = getService(slug);

  usePageMeta({
    title: service ? `${service.name} in Colombo` : "Service not found",
    description: service ? `${service.summary} ${service.intro}`.slice(0, 160) : "",
    path: service ? servicePath(service) : "/services",
    jsonLd: service && {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: service.name,
          description: service.intro,
          areaServed: "Colombo and Greater Colombo, Sri Lanka",
          provider: { "@type": "LocalBusiness", name: "Team Sudda", url: SITE_URL },
          url: `${SITE_URL}${servicePath(service)}`,
        },
        ...(service.faqs.length ? [faqJsonLd(service.faqs)] : []),
      ],
    },
  });

  if (!service) return <Navigate to="/services" replace />;

  const isBusiness = service.audience === "business";
  const hub = isBusiness
    ? { label: "For Business", href: "/business" }
    : { label: "For Homes", href: "/homes" };
  const quote = isBusiness
    ? { label: "Request a Site Survey", href: `/business-quote?service=${service.slug}` }
    : { label: "Book This Clean", href: `/book?service=${service.slug}` };
  const related = service.related.map((r) => SERVICES.find((s) => s.slug === r)).filter(Boolean);
  const industries = INDUSTRIES.filter((i) => i.services.includes(service.slug));

  return (
    <>
      <PageHero
        eyebrow={service.name}
        title={service.headline}
        intro={service.intro}
        crumbs={[hub, { label: service.name }]}
      >
        <Button asChild variant="hero" size="xl">
          <Link to={quote.href}>
            {quote.label} <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
        <Button asChild variant="whatsapp" size="xl">
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle className="h-5 w-5" /> Ask on WhatsApp
          </a>
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-x grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14">
          <div>
            <SectionHeading eyebrow="The Checklist" title="What's included." />
            <Checklist items={service.includes} />
            {service.notIncluded && (
              <div className="mt-10">
                <h3 className="font-display font-bold text-navy mb-4">Not included</h3>
                <ul className="grid gap-2">
                  {service.notIncluded.map((n) => (
                    <li key={n} className="flex gap-3 text-sm text-muted-foreground">
                      <X className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" /> {n}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="grid gap-5 content-start">
            <div className="rounded-3xl bg-muted/50 border border-border p-6">
              <h3 className="font-display font-bold text-navy">Good for</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {service.goodFor.map((g) => (
                  <li
                    key={g}
                    className="rounded-full bg-background border border-border px-3 py-1 text-sm"
                  >
                    {g}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3 text-sm">
                <CalendarClock className="h-5 w-5 text-navy" />
                <span>
                  <strong className="text-navy">Frequency:</strong> {service.frequency}
                </span>
              </div>
            </div>
            <div className="rounded-3xl bg-navy text-white p-6">
              <h3 className="font-display font-bold text-lg">
                {isBusiness ? "Free site survey" : "Quoted before we start"}
              </h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">
                {isBusiness
                  ? "We visit the site, agree the scope and give you a written proposal with the schedule and price."
                  : "Send a few details and photos. You'll get a clear quotation with the team size, time and price before you confirm."}
              </p>
              <Button asChild variant="hero" className="mt-5 w-full">
                <Link to={quote.href}>{quote.label}</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-muted/40">
        <div className="container-x">
          <SectionHeading eyebrow="How It Works" title="Every job, run the same way." />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROCESS.map((p) => (
              <li key={p.n} className="rounded-2xl bg-background border border-border p-5">
                <span className="font-display font-extrabold text-yellow-ink">{p.n}</span>
                <h3 className="mt-1 font-display font-bold text-navy">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {service.faqs.length > 0 && (
        <section className="section">
          <div className="container-x max-w-3xl">
            <SectionHeading eyebrow="FAQ" title={`${service.name}: common questions.`} />
            <FaqList items={service.faqs} />
          </div>
        </section>
      )}

      {(related.length > 0 || industries.length > 0) && (
        <section className="section bg-muted/40">
          <div className="container-x">
            {related.length > 0 && (
              <>
                <SectionHeading title="Related services" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <LinkCard
                      key={r!.slug}
                      href={servicePath(r!)}
                      icon={r!.icon}
                      title={r!.name}
                      desc={r!.summary}
                    />
                  ))}
                </div>
              </>
            )}
            {industries.length > 0 && (
              <div className="mt-12">
                <h2 className="font-display font-bold text-xl text-navy mb-4">Used by</h2>
                <div className="flex flex-wrap gap-2">
                  {industries.map((i) => (
                    <Link
                      key={i.slug}
                      to={industryPath(i)}
                      className="rounded-full bg-background border border-border px-4 py-2 text-sm font-medium text-navy hover:border-yellow-brand"
                    >
                      {i.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <CtaBand primary={quote} />
    </>
  );
};

export default ServicePage;
