import whyImg from "@/assets/why-choose.jpg";

const features = [
  { label: "Trained & Vetted Staff", value: 95 },
  { label: "Eco-Friendly Products", value: 92 },
  { label: "Punctual Service", value: 98 },
  { label: "Transparent Pricing", value: 90 },
  { label: "Insured & Reliable", value: 96 },
];

const stats = [
  { value: "1,200+", label: "Projects Completed" },
  { value: "500+", label: "Happy Clients" },
  { value: "40+", label: "Expert Staff" },
  { value: "8+", label: "Years Experience" },
];

export const WhyUs = () => {
  return (
    <section className="section bg-navy text-white relative overflow-hidden">
      <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-yellow-brand/10 blur-3xl" />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border-4 border-yellow-brand shadow-yellow-glow">
              <img src={whyImg} alt="Trained Team Sudda staff member" width={800} height={1024} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="heading-lg font-display mt-3">
              The Right Choice for a <span className="text-yellow-brand">Cleaner Space.</span>
            </h2>
            <p className="mt-4 text-white/70">
              We combine reliability, eco-friendly products and meticulous attention to detail to deliver an unmatched cleaning experience.
            </p>

            <div className="mt-8 space-y-5">
              {features.map((f) => (
                <div key={f.label}>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span>{f.label}</span>
                    <span className="text-yellow-brand">{f.value}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-brand rounded-full transition-all duration-1000"
                      style={{ width: `${f.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center bg-white/5 border border-white/10 rounded-2xl py-6 px-4 hover:border-yellow-brand transition-colors">
              <div className="text-3xl md:text-4xl font-display font-extrabold text-yellow-brand">{s.value}</div>
              <div className="mt-1 text-sm text-white/75">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
