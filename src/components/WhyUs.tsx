import { ShieldCheck, Leaf, Clock, BadgeCheck, Smile } from "lucide-react";
import whyImg from "@/assets/why-choose.jpg";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Trained & Vetted Staff",
    desc: "Every cleaner is background-checked and professionally trained before their first job.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    desc: "We use non-toxic, environmentally safe products that are gentle on your space and your family.",
  },
  {
    icon: Clock,
    title: "Punctual Service",
    desc: "We show up on time, every time. No waiting around - your schedule is respected.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    desc: "Clear quotes upfront with no hidden fees. You know exactly what you're paying for.",
  },
  {
    icon: Smile,
    title: "Satisfaction Guaranteed",
    desc: "Not happy with any area? We'll return to re-clean it at no extra charge within 24 hours.",
  },
];

export const WhyUs = () => {
  return (
    <section className="section bg-navy text-white relative overflow-hidden">
      <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-yellow-brand/10 blur-3xl" />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border-4 border-yellow-brand shadow-yellow-glow">
              <img
                src={whyImg}
                alt="Trained Team Sudda staff member"
                width={800}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="heading-lg font-display mt-3">
              The Right Choice for a <span className="text-yellow-brand">Cleaner Space.</span>
            </h2>
            <p className="mt-4 text-white/70">
              We combine reliability, eco-friendly products and meticulous attention to detail to
              deliver an unmatched cleaning experience.
            </p>

            <ul className="mt-8 space-y-4">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex items-start gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-yellow-brand text-navy shrink-0 mt-0.5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{title}</div>
                    <div className="text-sm text-white/65 mt-0.5 leading-relaxed">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
