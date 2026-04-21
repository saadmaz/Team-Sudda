import { Home, Building, Sparkles, Hammer, Sofa, ShieldCheck, PartyPopper, Truck } from "lucide-react";

const services = [
  { icon: Home, title: "Home Cleaning", desc: "Top-to-bottom shine for every room - kitchens, bathrooms and living spaces." },
  { icon: Building, title: "Office Cleaning", desc: "Daily, weekly or one-off cleans that keep your workplace spotless and productive." },
  { icon: Sparkles, title: "Deep Cleaning", desc: "Detailed deep-scrub for grime, grease and hard-to-reach corners." },
  { icon: Hammer, title: "Post-Renovation", desc: "Dust, debris and paint splatter removed so you can enjoy your new space." },
  { icon: Sofa, title: "Sofa & Carpet", desc: "Steam and shampoo cleaning that revives upholstery and removes stains." },
  { icon: ShieldCheck, title: "Sanitization", desc: "Hospital-grade disinfection that kills 99.9% of germs and viruses." },
  { icon: PartyPopper, title: "After-Event Cleanup", desc: "Wedding, party or corporate event? We handle the mess so you don't." },
  { icon: Truck, title: "Move-In / Move-Out", desc: "Get your deposit back - we leave properties move-in ready." },
];

export const Services = () => {
  return (
    <section id="services" className="section bg-muted/40">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Our Services</span>
          <h2 className="heading-lg font-display text-navy mt-3">
            Everything We Clean - <span className="text-[hsl(var(--yellow))]">Done Right.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From a quick refresh to a full deep clean, our specialist teams handle every space with care and precision.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="group relative bg-background rounded-2xl p-6 border-t-4 border-yellow-brand shadow-card-soft hover:bg-navy hover:text-white transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-yellow-brand text-navy mb-5 transition-transform group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display font-bold text-lg text-navy group-hover:text-white transition-colors">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
