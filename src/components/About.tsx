import { Building2, Smile, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-team.jpg";

export const About = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-card-soft">
            <img src={aboutImg} alt="Team Sudda cleaner at work in modern office" width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-8 bg-yellow-brand text-navy rounded-2xl px-6 py-4 shadow-yellow-glow rotate-[-3deg]">
            <div className="text-3xl font-display font-extrabold leading-none">8+</div>
            <div className="text-xs font-bold uppercase tracking-wider mt-1">Years Trusted</div>
          </div>
        </div>

        <div>
          <span className="eyebrow">About Team Sudda</span>
          <h2 className="heading-lg font-display text-navy mt-3">
            Dedicated to Quality <span className="text-[hsl(var(--yellow))]">Cleaning</span> Services
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Since 2017, Team Sudda has been Sri Lanka's trusted name in professional cleaning. From cozy homes in Colombo to corporate offices in Kandy, our trained, background-checked staff use eco-friendly products to deliver spotless results - every single time.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Building2, value: "300+", label: "Offices Cleaned" },
              { icon: Smile, value: "100%", label: "Satisfaction Rate" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl border border-border bg-muted/40 p-5">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-yellow-brand text-navy shrink-0">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-2xl font-display font-extrabold text-navy">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              </div>
            ))}
          </div>

          <Button asChild variant="hero" size="lg" className="mt-8">
            <a href="#services">Learn More <ArrowRight className="ml-1 h-4 w-4" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
};
