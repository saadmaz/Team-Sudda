import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checklist, CtaBand, LinkCard, PageHero, SectionHeading } from "@/components/blocks";
import { usePageMeta } from "@/hooks/usePageMeta";
import { getIndustry, industryPath, INDUSTRIES } from "@/lib/content/industries";
import { SERVICES, servicePath } from "@/lib/content/services";

export const IndustriesIndex = () => {
  usePageMeta({
    title: "Industries We Clean For",
    description:
      "Cleaning for offices, banks, apartments, hotels, clinics, schools, retail and industrial sites in Colombo.",
    path: "/industries",
  });
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Different sites. The same standard."
        intro="Every kind of site has its own hours, rules and pressure points. We plan the cleaning around how yours actually works."
        crumbs={[{ label: "Industries" }]}
      />
      <section className="section">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((i) => (
            <LinkCard
              key={i.slug}
              href={industryPath(i)}
              icon={i.icon}
              title={i.name}
              desc={i.summary}
            />
          ))}
        </div>
      </section>
      <CtaBand primary={{ label: "Request a Site Survey", href: "/business-quote" }} />
    </>
  );
};

const IndustryPage = () => {
  const { slug } = useParams();
  const industry = getIndustry(slug);
  usePageMeta({
    title: industry ? `${industry.name} Cleaning in Colombo` : "Industry not found",
    description: industry?.intro.slice(0, 160) ?? "",
    path: industry ? industryPath(industry) : "/industries",
  });
  if (!industry) return <Navigate to="/industries" replace />;

  const services = industry.services
    .map((s) => SERVICES.find((x) => x.slug === s))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s));
  const quoteHref = `/business-quote?industry=${encodeURIComponent(industry.name)}`;

  return (
    <>
      <PageHero
        eyebrow={industry.name}
        title={industry.headline}
        intro={industry.intro}
        crumbs={[{ label: "Industries", href: "/industries" }, { label: industry.name }]}
      >
        <Button asChild variant="hero" size="xl">
          <Link to={quoteHref}>
            Request a Site Survey <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-x grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-border p-7">
            <h2 className="font-display font-bold text-xl text-navy mb-5">
              What makes it different
            </h2>
            <ul className="grid gap-3">
              {industry.challenges.map((c) => (
                <li key={c} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-navy shrink-0" /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-navy text-white p-7">
            <h2 className="font-display font-bold text-xl mb-5">How we handle it</h2>
            <Checklist items={industry.approach} dark />
          </div>
        </div>
      </section>

      <section className="section bg-muted/40">
        <div className="container-x">
          <SectionHeading title="Services for this kind of site" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
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
      </section>

      <CtaBand
        title={`Tell us about your ${industry.name.toLowerCase().replace(/ &.*/, "")} site.`}
        intro="We'll visit, agree the scope and give you a written proposal."
        primary={{ label: "Request a Site Survey", href: quoteHref }}
      />
    </>
  );
};

export default IndustryPage;
