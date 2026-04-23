import { TEAM } from "@/lib/constants/team";

export const Team = () => {
  return (
    <section id="team" className="section bg-background">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Meet The Team</span>
          <h2 className="heading-lg font-display text-navy mt-3">
            Meet Our Cleaning <span className="text-[hsl(var(--yellow))]">Professionals.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Friendly, vetted, and trained - the people who make your space sparkle.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TEAM.map((m) => (
            <article
              key={m.id}
              className="group relative bg-background rounded-3xl overflow-hidden shadow-card-soft border-t-4 border-transparent hover:border-yellow-brand transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/5] bg-muted overflow-hidden">
                <img src={m.img} alt={`${m.name} - ${m.role} at Team Sudda`} width={640} height={800} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5 text-center bg-navy text-white">
                <h3 className="font-display font-bold text-lg">{m.name}</h3>
                <p className="text-xs text-yellow-brand mt-1 uppercase tracking-wider">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
