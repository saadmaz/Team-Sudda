import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";
import { CONTACT } from "@/lib/constants/contact";

export const CtaBanner = () => {
  return (
    <section className="bg-navy-deep relative overflow-hidden">
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-yellow-brand/15 blur-3xl" />
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-yellow-brand/10 blur-3xl" />
      <div className="container-x py-16 md:py-20 relative text-center">
        <Sparkles className="h-10 w-10 text-yellow-brand mx-auto" />
        <h2 className="heading-lg font-display text-white mt-4">
          Let's Make Your Space <span className="text-yellow-brand">Spotless</span> Together.
        </h2>
        <p className="mt-4 text-white/75 max-w-xl mx-auto">
          No mess too big. No space too small. Book your clean today.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="hero" size="xl"><a href="#contact">Get a Free Quote</a></Button>
          <Button asChild variant="whatsapp" size="xl">
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
