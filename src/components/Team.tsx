import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";
import t5 from "@/assets/team-5.jpg";
import t6 from "@/assets/team-6.jpg";


const team = [
  { img: t1, name: "Nimal Perera", role: "Lead Cleaner" },
  { img: t2, name: "Sanduni Fernando", role: "Operations Manager" },
  { img: t3, name: "Kasun Silva", role: "Senior Supervisor" },
  { img: t4, name: "Amaya Jayawardena", role: "Sanitization Specialist" },
  { img: t5, name: "Ruwan Dissanayake", role: "Deep Cleaning Specialist" },
  { img: t6, name: "Dilani Rathnayake", role: "Customer Coordinator" },
];

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
          {team.map((m) => (
            <article
              key={m.role}
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
