import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checklist, CtaBand, LinkCard, PageHero, SectionHeading } from "@/components/blocks";
import { usePageMeta } from "@/hooks/usePageMeta";
import { BUSINESS_SERVICES, HOME_SERVICES, servicePath } from "@/lib/content/services";
import { INDUSTRIES, industryPath } from "@/lib/content/industries";
import { COMMITMENTS } from "@/lib/content/standard";

type Hub = "home" | "business" | "all";

const COPY = {
  home: {
    path: "/homes",
    title: "Home Cleaning Services in Colombo",
    eyebrow: "For Homes",
    headline: "Your home, cleaned properly.",
    intro:
      "Regular cleans, deep cleans, move-outs and everything in between. A clear quotation first, a checklist on every visit and a team lead who checks the job before we leave.",
    cta: { label: "Book a Home Clean", href: "/book" },
    points: [
      "Same team for regular customers wherever possible",
      "Products and equipment brought by us",
      "You don't need to be home, as long as we can get in safely",
      "Free re-clean if you tell us within 24 hours that something was missed",
    ],
  },
  business: {
    path: "/business",
    title: "Commercial & Contract Cleaning in Colombo",
    eyebrow: "For Business",
    headline: "Cleaning you don't have to manage.",
    intro:
      "Contract cleaning, housekeeping staff, floor care and deep cleans for offices, banks, apartments, hotels, clinics and more. One supplier, one point of contact, one standard across every site.",
    cta: { label: "Request a Site Survey", href: "/business-quote" },
    points: [
      "Free site survey and a written scope of work",
      "Trained, uniformed staff employed and supervised by us",
      "Cover arranged when a regular cleaner is absent",
      "A named contact who answers for the standard",
    ],
  },
  all: {
    path: "/services",
    title: "Cleaning Services",
    eyebrow: "Services",
    headline: "Every service, one standard.",
    intro: "Cleaning for homes and workplaces across Colombo and Greater Colombo.",
    cta: { label: "Get a Quote", href: "/quote" },
    points: [] as string[],
  },
} as const;

const ServicesHub = ({ hub }: { hub: Hub }) => {
  const c = COPY[hub];
  usePageMeta({ title: c.title, description: c.intro, path: c.path });

  const groups =
    hub === "all"
      ? [
          { title: "For Homes", list: HOME_SERVICES },
          { title: "For Business", list: BUSINESS_SERVICES },
        ]
      : [{ title: "Services", list: hub === "home" ? HOME_SERVICES : BUSINESS_SERVICES }];

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.headline}
        intro={c.intro}
        crumbs={[{ label: c.eyebrow }]}
      >
        <Button asChild variant="hero" size="xl">
          <Link to={c.cta.href}>
            {c.cta.label} <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </PageHero>

      {groups.map((g) => (
        <section key={g.title} className="section">
          <div className="container-x">
            <SectionHeading title={g.title} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {g.list.map((s) => (
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
      ))}

      {c.points.length > 0 && (
        <section className="section bg-muted/40">
          <div className="container-x grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionHeading
                eyebrow="What You Can Expect"
                title="The details that make the difference."
              />
              <Checklist items={[...c.points]} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {COMMITMENTS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl bg-background border border-border p-5">
                  <Icon className="h-6 w-6 text-navy" />
                  <h3 className="mt-3 font-display font-bold text-navy">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {hub === "business" && (
        <section className="section">
          <div className="container-x">
            <SectionHeading eyebrow="Industries" title="Built around your kind of site." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
          </div>
        </section>
      )}

      <CtaBand primary={c.cta} />
    </>
  );
};

export default ServicesHub;
