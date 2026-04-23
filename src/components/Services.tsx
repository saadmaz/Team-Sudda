import { SERVICES } from "@/lib/constants/services";

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
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
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
