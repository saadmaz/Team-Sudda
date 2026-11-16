import { CLIENTS } from "@/lib/constants/clients";

// Duplicate the list so the seamless loop works - items scroll off left, duplicates come in from right
const ROW_A = [...CLIENTS, ...CLIENTS];
const ROW_B = [
  ...CLIENTS.slice(7),
  ...CLIENTS.slice(0, 7),
  ...CLIENTS.slice(7),
  ...CLIENTS.slice(0, 7),
];

export const Clients = () => {
  return (
    <section className="py-14 bg-muted/40 overflow-hidden">
      <div className="container-x mb-8 text-center">
        <span className="eyebrow">Trusted By</span>
        <h2 className="heading-lg font-display text-navy mt-3">
          Trusted by Leading <span className="text-[hsl(var(--yellow))]">Organisations.</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          From government departments to private enterprises - Sri Lanka's top organisations rely on
          Team Sudda.
        </p>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-marquee gap-4 whitespace-nowrap">
          {ROW_A.map((client, i) => (
            <span
              key={i}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-border text-navy text-sm font-semibold shadow-card-soft shrink-0"
            >
              {client}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="relative flex overflow-hidden mt-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-marquee-reverse gap-4 whitespace-nowrap">
          {ROW_B.map((client, i) => (
            <span
              key={i}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-navy border border-navy text-white text-sm font-semibold shadow-card-soft shrink-0"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
