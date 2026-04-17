import { Star, Quote } from "lucide-react";

const items = [
  {
    name: "Dinusha R.",
    role: "Homeowner, Colombo",
    quote: "Team Sudda made my apartment spotless in just a few hours. The team was on time, polite and incredibly thorough. I've booked them monthly!",
  },
  {
    name: "David P.",
    role: "Office Manager, Kandy",
    quote: "We switched to Team Sudda for our office and never looked back. Reliable, professional and our staff has noticed the difference daily.",
  },
  {
    name: "Olivia S.",
    role: "Restaurant Owner",
    quote: "Their after-event cleanup is a lifesaver. They turned a chaotic post-event mess into a sparkling space overnight. Highly recommend!",
  },
];

export const Testimonials = () => {
  return (
    <section className="section bg-navy text-white relative overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-yellow-brand/10 blur-3xl" />
      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Testimonials</span>
          <h2 className="heading-lg font-display mt-3">
            Trusted by Homes & Businesses <span className="text-yellow-brand">Across Sri Lanka.</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <article key={t.name} className="relative bg-white text-navy rounded-2xl p-7 shadow-card-soft">
              <Quote className="absolute top-5 right-5 h-10 w-10 text-yellow-brand/40" />
              <div className="flex gap-1 text-yellow-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-display font-bold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
