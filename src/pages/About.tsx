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

const LEADERS = [
  {
    name: "Managing Director",
    role: "Founder & Managing Director",
    since: "2025",
    bio: "Founded Team Sudda in 2025 with a vision to bring professional, reliable cleaning services to homes and businesses across Sri Lanka. Leads the company's strategic direction and maintains the high standards that clients depend on.",
  },
  {
    name: "Operations Director",
    role: "Director - Operations & Finance",
    since: "2025",
    bio: "Oversees day-to-day operations, financial management and client relations. Ensures every job is delivered on time, to spec and within budget - the engine that keeps Team Sudda running smoothly.",
  },
  {
    name: "Development Director",
    role: "Director - Marketing & Development",
    since: "2025",
    bio: "Drives business development, marketing initiatives and technical operations. Responsible for expanding Team Sudda's reach into new regions and service categories.",
  },
];

const About = () => {
  useSEO({
    title: "About Us - Team Sudda | Professional Cleaning Sri Lanka",
    description:
      "Learn about Team Sudda - Sri Lanka's professional cleaning company. Our mission, values, and the team behind every spotless space.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20">
        <div className="container-x text-center text-white">
          <span className="eyebrow">About Team Sudda</span>
          <h1 className="heading-xl font-display font-extrabold mt-4 text-balance">
            Sri Lanka's Trusted <span className="text-yellow-brand">Cleaning</span> Partner
          </h1>
          <p className="mt-6 text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            Built on reliability, eco-friendly products and background-checked staff - here's the story behind every spotless space.
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

      {/* Our Story */}
      <section className="section bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-card-soft">
            <img src={aboutImg} alt="Team Sudda at work" width={800} height={600} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="heading-lg font-display text-navy mt-3">
              Built on Trust, <span className="text-[hsl(var(--yellow))]">Proven by Results.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Team Sudda was founded in {STATS.foundedYear} with a simple belief: every home and workplace deserves to be genuinely clean - not just surface-wiped. We started with a small team in Colombo and a commitment to three things: reliability, eco-friendly products, and background-checked staff.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              That commitment drives every job we take on - from cozy homes in Colombo to corporate offices across the island. Trained, vetted specialists. Eco-friendly products. Dependable service, every time.
            </p>
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
            <p className="mt-4 text-muted-foreground">The dedicated people steering every clean, every day.</p>
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
