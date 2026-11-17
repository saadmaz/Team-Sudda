import { Check, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PRICING } from "@/lib/constants/pricing";

export const Pricing = () => {
  return (
    <section id="pricing" className="section bg-background">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Transparent Pricing</span>
          <h2 className="heading-lg font-display text-navy mt-3">
            Simple, Honest <span className="text-[hsl(var(--yellow))]">Pricing.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            No hidden fees. No surprises. Every package includes eco-friendly products and insured,
            vetted staff.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col rounded-3xl border-2 p-8 transition-all duration-300 hover:-translate-y-2 ${
                tier.popular
                  ? "border-yellow-brand bg-navy text-white shadow-yellow-glow"
                  : "border-border bg-background shadow-card-soft hover:border-yellow-brand"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-brand text-navy text-xs font-bold uppercase tracking-widest px-4 py-1.5 shadow-yellow-glow">
                    ★ Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`font-display font-extrabold text-2xl ${tier.popular ? "text-white" : "text-navy"}`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-1 text-sm ${tier.popular ? "text-white/70" : "text-muted-foreground"}`}
                >
                  {tier.tagline}
                </p>
              </div>

              <div
                className={`mb-6 pb-6 border-b ${tier.popular ? "border-white/20" : "border-border"}`}
              >
                <div
                  className={`text-3xl font-display font-extrabold ${tier.popular ? "text-yellow-brand" : "text-navy"}`}
                >
                  {tier.price}
                </div>
                <div
                  className={`text-xs mt-1 ${tier.popular ? "text-white/60" : "text-muted-foreground"}`}
                >
                  {tier.unit}
                </div>
                <div
                  className={`flex items-center gap-2 mt-3 text-sm font-medium ${tier.popular ? "text-white/80" : "text-navy"}`}
                >
                  <Users className="h-4 w-4" />
                  {tier.cleaners} cleaner{tier.cleaners > 1 ? "s" : ""} · {tier.hours} hours
                </div>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`h-4 w-4 mt-0.5 shrink-0 ${tier.popular ? "text-yellow-brand" : "text-yellow-brand"}`}
                    />
                    <span className={tier.popular ? "text-white/85" : "text-muted-foreground"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={tier.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                <Link to="/book">{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Need a custom quote for a large commercial space?{" "}
          <Link
            to="/book"
            className="text-navy font-semibold hover:text-yellow-brand transition-colors underline underline-offset-2"
          >
            Tell us about your space →
          </Link>
        </p>
      </div>
    </section>
  );
};
