import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone } from "lucide-react";

const faqs = [
  { q: "What cleaning services do you offer?", a: "We offer home, office, deep, post-renovation, sofa & carpet, sanitization, after-event and move-in/move-out cleaning across Sri Lanka." },
  { q: "How quickly can you respond to a booking?", a: "Most bookings are confirmed within 1 hour and we can dispatch a team in as little as 24 hours - same-day service is often available in Colombo." },
  { q: "Do you bring your own products and equipment?", a: "Yes. Our teams arrive fully equipped with eco-friendly, non-toxic cleaning products, vacuums, mops and microfiber tools." },
  { q: "How do you price your services?", a: "Pricing is transparent and based on space size and service type. You'll always get a clear quote before any work begins - no hidden fees." },
  { q: "Which areas in Sri Lanka do you serve?", a: "We currently serve Colombo, Gampaha, Kandy, Galle, Negombo and surrounding suburbs. Contact us to confirm coverage in your area." },
];

export const FAQ = () => {
  return (
    <section id="faq" className="section bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <span className="eyebrow">FAQs</span>
          <h2 className="heading-lg font-display text-navy mt-3">
            Got Questions? <span className="text-[hsl(var(--yellow))]">We've Got Answers.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Still unsure? Reach out - our team is always happy to help.</p>

          <div className="mt-8 bg-yellow-brand text-navy rounded-3xl p-6 flex items-center gap-5">
            <div className="grid place-items-center h-14 w-14 rounded-2xl bg-navy text-yellow-brand shrink-0">
              <Phone className="h-7 w-7" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider">Customer Support</div>
              <a href="tel:+94770000000" className="block text-xl md:text-2xl font-display font-extrabold mt-1">+94 77 000 0000</a>
              <div className="text-xs">hello@teamsudda.lk</div>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-2xl px-5 bg-muted/40 data-[state=open]:bg-navy data-[state=open]:text-white data-[state=open]:border-navy transition-colors">
              <AccordionTrigger className="text-left font-display font-bold hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed pb-5 opacity-90">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
