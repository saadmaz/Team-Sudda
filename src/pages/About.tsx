import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { useSEO } from "@/hooks/useSEO";
import { STATS } from "@/lib/constants/stats";
import { VALUES, MISSION, VISION } from "@/lib/constants/values";
import { CONTACT } from "@/lib/constants/contact";
import aboutImg from "@/assets/about-team.jpg";
import whyImg from "@/assets/why-choose.jpg";

// Replace with real leadership bios before launch
const LEADERS = [
  {
    name: "Managing Director",
    role: "Founder & Managing Director",
    since: "2017",
    bio: "Founded Team Sudda in 2017 with a vision to bring professional, reliable cleaning services to homes and businesses across Sri Lanka. Leads the company's strategic direction and maintains the high standards that clients depend on.",
  },
  {
    name: "Operations Director",
    role: "Director — Operations & Finance",
    since: "2019",
    bio: "Oversees day-to-day operations, financial management and client relations. Ensures every job is delivered on time, to spec and within budget — the engine that keeps Team Sudda running smoothly.",
  },
  {
    name: "Development Director",
    role: "Director — Marketing & Development",
    since: "2020",
    bio: "Drives business development, marketing initiatives and technical operations. Responsible for expanding Team Sudda's reach into new regions and service categories.",
  },
];

const MILESTONES = [
  { year: "2017", label: "Founded in Colombo" },
  { year: "2019", label: "Expanded to Kandy & Gampaha" },
  { year: "2021", label: "500+ clients served" },
  { year: "2023", label: "40+ trained staff" },
  { year: "2025", label: `${STATS.projectsCompleted} projects completed` },
];

const About = () => {
  useSEO({
    title: "About Us — Team Sudda | Professional Cleaning Sri Lanka",
    description:
      "Learn about Team Sudda — Sri Lanka's trusted cleaning company since 2017. Our mission, values, and the team behind every spotless space.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20">
        <div className="container-x text-center text-white">
          <span className="eyebrow">About Team Sudda</span>
          <h1 className="heading-xl font-display font-extrabold mt-4 text-balance">
            Sri Lanka's Trusted <span className="text-yellow-brand">Cleaning</span> Partner Since {STATS.foundedYear}
          </h1>
          <p className="mt-6 text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            From a single team in Colombo to {STATS.expertStaff} trained specialists serving the island — here's the story behind every spotless space.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/book">Book a Clean <ArrowRight className="ml-1 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href={`tel:${CONTACT.phone}`}>Call Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-navy-deep border-t border-white/10">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-yellow-brand/20">
          {[
            { value: STATS.yearsInBusiness, label: "Years Experience" },
            { value: STATS.projectsCompleted, label: "Projects Completed" },
            { value: STATS.happyClients, label: "Happy Clients" },
            { value: STATS.expertStaff, label: "Expert Staff" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center py-6 px-4">
              <div className="text-2xl md:text-3xl font-display font-extrabold text-yellow-brand">{value}</div>
              <div className="text-xs text-white/60 mt-1 font-medium uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <section className="section bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-card-soft">
            <img src={aboutImg} alt="Team Sudda at work" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="heading-lg font-display text-navy mt-3">
              Built on Trust, <span className="text-[hsl(var(--yellow))]">Proven by Results.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Team Sudda was founded in {STATS.foundedYear} with a simple belief: every home and workplace deserves to be genuinely clean — not just surface-wiped. We started with a small team in Colombo and a commitment to three things: reliability, eco-friendly products, and background-checked staff.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Over {STATS.yearsInBusiness} years, that commitment has grown into {STATS.projectsCompleted} completed projects, {STATS.happyClients} happy clients and a team of {STATS.expertStaff} trained specialists serving Colombo, Kandy, Gampaha, Galle, Negombo and beyond.
            </p>
            {/* Timeline */}
            <div className="mt-8 relative">
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-yellow-brand/30" />
              <ul className="space-y-4 pl-10">
                {MILESTONES.map((m) => (
                  <li key={m.year} className="relative">
                    <div className="absolute -left-10 top-1 h-3 w-3 rounded-full bg-yellow-brand border-2 border-white shadow" />
                    <span className="text-xs font-bold text-yellow-brand uppercase tracking-wider">{m.year}</span>
                    <p className="text-sm text-muted-foreground mt-0.5">{m.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-navy text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-yellow-brand/10 blur-3xl" />
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">Purpose</span>
            <h2 className="heading-lg font-display mt-3">
              Mission & <span className="text-yellow-brand">Vision.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-yellow-brand transition-colors">
              <div className="text-yellow-brand font-display font-extrabold text-xs uppercase tracking-[0.2em] mb-4">Mission</div>
              <p className="text-white/85 text-lg leading-relaxed">{MISSION}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-yellow-brand transition-colors">
              <div className="text-yellow-brand font-display font-extrabold text-xs uppercase tracking-[0.2em] mb-4">Vision</div>
              <p className="text-white/85 text-lg leading-relaxed">{VISION}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-background">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="heading-lg font-display text-navy mt-3">
              Our Core <span className="text-[hsl(var(--yellow))]">Values.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-background border border-border rounded-2xl p-6 hover:border-yellow-brand hover:shadow-yellow-glow transition-all duration-300 hover:-translate-y-1">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-yellow-brand text-navy mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display font-bold text-lg text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section bg-muted/40">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">Leadership</span>
            <h2 className="heading-lg font-display text-navy mt-3">
              The People <span className="text-[hsl(var(--yellow))]">Behind the Team.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Update these with real names, photos and bios before launch.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {LEADERS.map((l) => (
              <div key={l.role} className="bg-background rounded-3xl p-8 shadow-card-soft border-t-4 border-yellow-brand">
                <div className="h-16 w-16 rounded-2xl bg-navy grid place-items-center mb-5">
                  <span className="text-yellow-brand text-2xl font-display font-extrabold">{l.name[0]}</span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-yellow-brand mb-1">Since {l.since}</div>
                <h3 className="font-display font-bold text-lg text-navy">{l.name}</h3>
                <p className="text-sm text-yellow-brand font-medium mb-3">{l.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-brand/5" />
        <div className="container-x relative text-center">
          <h2 className="heading-lg font-display text-white">
            Ready to Experience the <span className="text-yellow-brand">Team Sudda</span> Difference?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/book">Book a Clean</Link>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default About;
