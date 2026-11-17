import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  ClipboardCheck,
  MapPin,
  RotateCcw,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants/contact";
import heroImg from "@/assets/hero-team.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative gradient-hero pt-24 md:pt-32 overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-yellow-brand/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[hsl(var(--navy-light))]/40 blur-3xl" />

      <div className="container-x relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-14 md:pb-24">
        <div className="text-white animate-fade-up lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-brand/40 bg-yellow-brand/10 text-yellow-brand px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5" /> Home & Office Cleaning · Colombo
          </span>

          <h1 className="heading-xl font-display font-extrabold mt-6 text-balance">
            Professional <span className="text-yellow-brand">Cleaning</span> Services for Homes &
            Workplaces
          </h1>

          <p className="mt-5 text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
            Trained, supervised teams for home, office and commercial cleaning across Colombo and
            Greater Colombo. A clear quotation before we start, and the job done properly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#contact">
                Get a Free Quote <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href={`tel:${CONTACT.phone}`}>
                <Phone className="h-5 w-5" /> Call Us
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-up lg:col-span-5" style={{ animationDelay: "150ms" }}>
          <div className="absolute -inset-4 rounded-[2rem] bg-yellow-brand/15 blur-2xl" />
          <div className="relative rounded-[1.75rem] overflow-hidden border border-yellow-brand/40 shadow-yellow-glow bg-navy-deep">
            <img
              src={heroImg}
              alt="Team Sudda professional cleaning team in uniform"
              width={1024}
              height={1024}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* floating badge */}
          <div className="hidden md:flex absolute -left-6 bottom-10 items-center gap-3 bg-white text-navy rounded-2xl px-5 py-3 shadow-card-soft animate-float">
            <div className="grid place-items-center h-10 w-10 rounded-full bg-yellow-brand">
              <ShieldCheck className="h-5 w-5 text-navy" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Quotation First
              </div>
              <div className="font-bold text-sm">No surprise charges</div>
            </div>
          </div>
        </div>
      </div>

      {/* trust strip */}
      <div className="bg-navy-deep border-t border-white/10">
        <div className="container-x grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-yellow-brand/30">
          {[
            { icon: MapPin, label: "Colombo & Greater Colombo" },
            { icon: ClipboardCheck, label: "Clear Quotation Before Work" },
            { icon: RotateCcw, label: "Free Re-Clean Within 24 Hours" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-3 py-5 text-white">
              <Icon className="h-5 w-5 text-yellow-brand" />
              <span className="font-semibold tracking-wide text-sm md:text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
