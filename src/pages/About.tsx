import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageHero, SectionHeading } from "@/components/blocks";
import { usePageMeta } from "@/hooks/usePageMeta";
import { STATS } from "@/lib/constants/stats";
import { VALUES, MISSION, VISION } from "@/lib/constants/values";
import aboutImg from "@/assets/about-team.jpg";

const GROUP = [
  { name: "Tank Sudda", desc: "Water-tank and sump cleaning", url: "https://tanksudda.com" },
  { name: "Team Sudda", desc: "Cleaning, housekeeping and facility care", current: true },
  { name: "STOPWASH", desc: "Convenient, consistent vehicle care", url: "https://stopwash.lk" },
  { name: "Polish Station", desc: "Automotive detailing and surface care" },
];

const About = () => {
  usePageMeta({
    title: "About Us",
    description:
      "Team Sudda is a home, office and commercial cleaning company in Colombo, part of the STTPS group. Our standard, our values and the group behind us.",
    path: "/about",
  });

  return (
    <>
      <PageHero
        eyebrow="About Team Sudda"
        title={
          <>
            The operating force behind{" "}
            <span className="text-yellow-brand">dependable cleaning.</span>
          </>
        }
        intro="Team Sudda brings structure, supervision and accountability to work that has to be done properly, at every site and for every customer."
        crumbs={[{ label: "About" }]}
      >
        <Button asChild variant="hero" size="xl">
          <Link to="/how-we-work">
            See How We Work <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-card-soft">
            <img
              src={aboutImg}
              alt="A Team Sudda cleaner at work"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Our Story" title="Built around doing it properly." />
            <div className="grid gap-4 text-muted-foreground leading-relaxed">
              <p>
                Most people have had the same experience with cleaning services: a rough price on
                the phone, a team that does things differently every visit, and missed spots you
                find after they've gone.
              </p>
              <p>
                Team Sudda started in {STATS.foundedYear} to fix that. Not with bigger claims, but
                with a written standard: a quotation before every job, a checklist for every
                service, a team lead who checks the work, and a free re-clean if something was
                missed.
              </p>
              <p>
                We clean homes, offices and commercial sites across Colombo and Greater Colombo, and
                we're building the people and systems to do it at scale without the standard
                slipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {[
            ["Mission", MISSION],
            ["Vision", VISION],
          ].map(([label, text]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <div className="eyebrow mb-4">{label}</div>
              <p className="text-white/85 text-lg leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Our Values" title="How we behave on every job." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-yellow-brand text-navy">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-bold text-lg text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/40">
        <div className="container-x">
          <SectionHeading
            eyebrow="Part of STTPS"
            title="Independent brand. Shared strength."
            intro="STTPS is an operating group building service companies across Sri Lanka. Each company has its own identity and customer promise. The group provides the people, systems and discipline behind them."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GROUP.map((g) => {
              const inner = (
                <>
                  <div className="font-display font-bold text-lg text-navy flex items-center gap-1">
                    {g.name} {g.url && <ArrowUpRight className="h-4 w-4" />}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{g.desc}</p>
                  {g.current && (
                    <span className="mt-3 inline-block rounded-full bg-yellow-brand px-2.5 py-0.5 text-[11px] font-bold text-navy">
                      You are here
                    </span>
                  )}
                </>
              );
              const cls = "block h-full rounded-2xl bg-background border border-border p-6";
              return g.url ? (
                <a
                  key={g.name}
                  href={g.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`${cls} hover:border-yellow-brand`}
                >
                  {inner}
                </a>
              ) : (
                <div key={g.name} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>
          <a
            href="https://sttps.co"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-1 font-semibold text-navy hover:text-yellow-brand"
          >
            Visit STTPS <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <CtaBand />
    </>
  );
};

export default About;
