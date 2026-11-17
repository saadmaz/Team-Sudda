import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, LinkCard, PageHero, SectionHeading } from "@/components/blocks";
import { usePageMeta } from "@/hooks/usePageMeta";
import { AREAS, areaPath, getArea } from "@/lib/content/areas";
import { BUSINESS_SERVICES, HOME_SERVICES, servicePath } from "@/lib/content/services";

export const AreasIndex = () => {
  usePageMeta({
    title: "Service Areas",
    description:
      "Team Sudda cleans homes and workplaces across Colombo and Greater Colombo. Check the areas we cover.",
    path: "/areas",
  });
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Where our teams work."
        intro="Our core service area is Colombo and Greater Colombo. Further out? Send us your town. We'll tell you honestly whether we can take the job before arranging anything."
        crumbs={[{ label: "Service Areas" }]}
      />
      <section className="section">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AREAS.map((a) => (
            <Link
              key={a.slug}
              to={areaPath(a)}
              className="group rounded-2xl border border-border p-6 hover:border-yellow-brand transition-colors"
            >
              <MapPin className="h-6 w-6 text-navy group-hover:text-yellow-ink" />
              <h2 className="mt-3 font-display font-bold text-lg text-navy">{a.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {a.covers.slice(0, 4).join(", ")}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
};

const AreaPage = () => {
  const { slug } = useParams();
  const area = getArea(slug);
  usePageMeta({
    title: area ? `Cleaning Services in ${area.name}` : "Area not found",
    description: area
      ? `Home, office and contract cleaning in ${area.name}: ${area.covers.slice(0, 4).join(", ")}. Written quotations and a free re-clean within 24 hours.`
      : "",
    path: area ? areaPath(area) : "/areas",
  });
  if (!area) return <Navigate to="/areas" replace />;

  return (
    <>
      <PageHero
        eyebrow={`Service Area · ${area.name}`}
        title={`Cleaning in ${area.name}, done properly.`}
        intro={`Team Sudda cleans homes and workplaces across ${area.name}. A written quotation before we start, a checklist on every job and a free re-clean if something was missed.`}
        crumbs={[{ label: "Service Areas", href: "/areas" }, { label: area.name }]}
      >
        <Button asChild variant="hero" size="xl">
          <Link to="/quote">
            Get a Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-x">
          <SectionHeading title="Areas covered" />
          <ul className="flex flex-wrap gap-2">
            {area.covers.map((c) => (
              <li key={c} className="rounded-full border border-border px-4 py-2 text-sm">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {[
        { title: `Home cleaning in ${area.name}`, list: HOME_SERVICES },
        { title: `Business cleaning in ${area.name}`, list: BUSINESS_SERVICES },
      ].map((g, i) => (
        <section key={g.title} className={i === 0 ? "section bg-muted/40" : "section"}>
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

      <CtaBand />
    </>
  );
};

export default AreaPage;
