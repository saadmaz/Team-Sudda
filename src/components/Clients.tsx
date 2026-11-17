import { ArrowUpRight, Building2 } from "lucide-react";
import { CLIENTS } from "@/lib/constants/clients";

export const Clients = () => {
  if (CLIENTS.length === 0) return null;

  return (
    <section className="py-14 bg-muted/40">
      <div className="container-x">
        <div className="mb-8 text-center">
          <span className="eyebrow">Who We Clean For</span>
          <h2 className="heading-lg font-display text-navy mt-3">
            Trusted Across the <span className="text-[hsl(var(--yellow))]">STTPS Group.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            We look after the sites of our sister companies, and we bring the same group standard to
            every home and workplace we clean.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
          {CLIENTS.map((client) => {
            const body = (
              <>
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-yellow-brand shrink-0">
                  <Building2 className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="font-display font-bold text-navy flex items-center gap-1">
                    {client.name}
                    {client.url && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
                  </div>
                  <div className="text-sm text-muted-foreground">{client.sector}</div>
                </div>
              </>
            );
            const cls =
              "flex items-center gap-4 rounded-2xl bg-white border border-border p-5 shadow-card-soft h-full";
            return (
              <li key={client.name}>
                {client.url ? (
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${cls} hover:border-yellow-brand transition-colors`}
                  >
                    {body}
                  </a>
                ) : (
                  <div className={cls}>{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
