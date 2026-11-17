import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  q: string;
  a: string;
}

/** FAQ accordion. Pair with `faqJsonLd` from @/lib/structuredData on pages where these are the main FAQ content. */
export const FaqList = ({ items }: { items: FaqItem[] }) => (
  <Accordion type="single" collapsible className="grid gap-3">
    {items.map((f, i) => (
      <AccordionItem
        key={f.q}
        value={`faq-${i}`}
        className="rounded-2xl border border-border bg-background px-5 data-[state=open]:border-yellow-brand"
      >
        <AccordionTrigger className="text-left font-display font-semibold text-navy hover:no-underline py-5">
          {f.q}
        </AccordionTrigger>
        <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-5">
          {f.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
