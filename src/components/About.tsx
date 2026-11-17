import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-team.jpg";

export const About = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="rounded-3xl overflow-hidden shadow-card-soft">
          <img
            src={aboutImg}
            alt="Team Sudda cleaner at work in modern office"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <span className="eyebrow">About Team Sudda</span>
          <h2 className="heading-lg font-display text-navy mt-3">
            Dedicated to Quality <span className="text-[hsl(var(--yellow))]">Cleaning</span>{" "}
            Services
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Team Sudda provides home, office and commercial cleaning across Colombo. Our teams are
            trained on a set process, supervised on the job and accountable for the result. We quote
            clearly before we start and come back if something was missed.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            No lock-in contracts, no hidden fees. Just reliable, thorough cleaning you can count on.
          </p>

          <Button asChild variant="hero" size="lg" className="mt-8">
            <a href="#services">
              Our Services <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
