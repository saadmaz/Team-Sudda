import type { ReactNode } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Building2, Home, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Checklist, PageHero } from "@/components/blocks";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { usePageMeta } from "@/hooks/usePageMeta";
import { CONTACT } from "@/lib/constants/contact";
import { getService } from "@/lib/content/services";
import {
  BUSINESS_QUOTE_STEPS,
  CAREERS_STEPS,
  CONTACT_STEPS,
  FEEDBACK_STEPS,
  HOME_BOOKING_STEPS,
} from "@/lib/content/formDefinitions";

const ContactPanel = () => (
  <div className="rounded-3xl bg-navy text-white p-6">
    <h2 className="font-display font-bold text-lg">Prefer to talk?</h2>
    <ul className="mt-4 grid gap-3 text-sm">
      <li>
        <a
          href={`tel:${CONTACT.phone}`}
          className="flex items-center gap-3 hover:text-yellow-brand"
        >
          <Phone className="h-4 w-4 text-yellow-brand" /> {CONTACT.phoneFormatted}
        </a>
      </li>
      <li>
        <a
          href={CONTACT.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 hover:text-yellow-brand"
        >
          <MessageCircle className="h-4 w-4 text-yellow-brand" /> WhatsApp us
        </a>
      </li>
      <li>
        <a
          href={`mailto:${CONTACT.email}`}
          className="flex items-center gap-3 hover:text-yellow-brand"
        >
          <Mail className="h-4 w-4 text-yellow-brand" /> {CONTACT.email}
        </a>
      </li>
      <li className="flex items-center gap-3 text-white/75">
        <MapPin className="h-4 w-4 text-yellow-brand" /> {CONTACT.address.full}
      </li>
    </ul>
  </div>
);

const FormLayout = ({
  eyebrow,
  title,
  intro,
  crumb,
  aside,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  crumb: string;
  aside?: ReactNode;
  children: ReactNode;
}) => (
  <>
    <PageHero eyebrow={eyebrow} title={title} intro={intro} crumbs={[{ label: crumb }]} />
    <section className="section">
      <div className="container-x grid lg:grid-cols-[1.6fr_1fr] gap-8 items-start">
        <div className="relative rounded-3xl border border-border bg-background p-6 md:p-10 shadow-card-soft">
          {children}
        </div>
        <aside className="grid gap-5">
          {aside}
          <ContactPanel />
        </aside>
      </div>
    </section>
  </>
);

const NextSteps = ({ items }: { items: string[] }) => (
  <div className="rounded-3xl border border-border p-6">
    <h2 className="font-display font-bold text-lg text-navy mb-4">What happens next</h2>
    <Checklist items={items} />
  </div>
);

// ----------------------------------------------------------------- /quote
export const QuotePage = () => {
  usePageMeta({
    title: "Get a Quote",
    description:
      "Get a clear cleaning quotation for your home or request a free site survey for your workplace.",
    path: "/quote",
  });
  const options = [
    {
      icon: Home,
      title: "For my home",
      desc: "Regular, deep, move-out, renovation, sofa and carpet cleaning. Quoted from a few details and photos.",
      href: "/book",
      cta: "Book a home clean",
    },
    {
      icon: Building2,
      title: "For my workplace",
      desc: "Contract cleaning, housekeeping staff, floor care and deep cleans. Starts with a free site survey.",
      href: "/business-quote",
      cta: "Request a site survey",
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title="What would you like cleaned?"
        intro="Pick one and we'll ask only the questions that matter for that job."
        crumbs={[{ label: "Get a Quote" }]}
      />
      <section className="section">
        <div className="container-x grid md:grid-cols-2 gap-6 max-w-4xl">
          {options.map(({ icon: Icon, title, desc, href, cta }) => (
            <Link
              key={href}
              to={href}
              className="group rounded-3xl border-2 border-border p-8 hover:border-yellow-brand transition-colors"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-yellow-brand">
                <Icon className="h-7 w-7" />
              </div>
              <h2 className="mt-5 font-display font-bold text-2xl text-navy">{title}</h2>
              <p className="mt-2 text-muted-foreground">{desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-navy group-hover:gap-3 transition-all">
                {cta} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

// ------------------------------------------------------------------ /book
export const BookPage = () => {
  usePageMeta({
    title: "Book a Home Clean",
    description:
      "Book a home clean in Colombo in three short steps. We'll send a clear quotation before confirming.",
    path: "/book",
  });
  const [params] = useSearchParams();
  const pre = getService(params.get("service") ?? undefined);
  return (
    <FormLayout
      eyebrow="Book a Home Clean"
      title="Tell us about your home."
      intro="Three short steps. We'll reply with a clear quotation (team size, time and price) before anything is confirmed."
      crumb="Book a Home Clean"
      aside={
        <NextSteps
          items={[
            "We review your details and may ask for a few photos",
            "You get a written quotation by WhatsApp or email",
            "You confirm the date and we send a briefed team",
          ]}
        />
      }
    >
      <EnquiryForm
        formName="Home booking"
        steps={HOME_BOOKING_STEPS}
        topicField="service"
        dateField="date"
        initialValues={pre && pre.audience === "home" ? { service: pre.name } : {}}
        submitLabel="Send Booking Request"
        successTitle="Request received."
        successBody="Thanks. We'll review the details and contact you with a quotation and the next available date."
      />
    </FormLayout>
  );
};

// -------------------------------------------------------- /business-quote
export const BusinessQuotePage = () => {
  usePageMeta({
    title: "Request a Site Survey",
    description:
      "Request a free site survey and written proposal for contract office cleaning, housekeeping, floor care or deep cleaning in Colombo.",
    path: "/business-quote",
  });
  const [params] = useSearchParams();
  const pre = getService(params.get("service") ?? undefined);
  const industry = params.get("industry") ?? "";
  const initial: Record<string, string> = {};
  if (pre?.audience === "business") initial.services = pre.name;
  if (industry) initial.industry = industry;
  return (
    <FormLayout
      eyebrow="For Business"
      title="Request a free site survey."
      intro="Tell us about the site. We'll arrange a visit, agree the scope with you and send a written proposal with the schedule and price."
      crumb="Request a Site Survey"
      aside={
        <NextSteps
          items={[
            "We call to understand the requirement",
            "We visit the site at a time that suits you",
            "You receive a written scope, schedule and price",
            "We agree a start date and assign your team",
          ]}
        />
      }
    >
      <EnquiryForm
        formName="Business quote"
        steps={BUSINESS_QUOTE_STEPS}
        topicField="services"
        dateField="start_date"
        initialValues={initial}
        submitLabel="Request Site Survey"
        successTitle="Thanks. We'll be in touch."
        successBody="Our team will contact you to arrange the site survey. If there's a tender document or scope, keep it handy for that call."
      />
    </FormLayout>
  );
};

// --------------------------------------------------------------- /contact
export const ContactPage = () => {
  usePageMeta({
    title: "Contact Us",
    description: `Contact Team Sudda by phone, WhatsApp or email. ${CONTACT.phoneFormatted} · ${CONTACT.email}`,
    path: "/contact",
  });
  return (
    <FormLayout
      eyebrow="Contact"
      title="Talk to Team Sudda."
      intro="Questions, existing bookings, partnerships or anything else. WhatsApp is usually the fastest way to reach us."
      crumb="Contact"
    >
      <EnquiryForm
        formName="Contact"
        steps={CONTACT_STEPS}
        topicField="topic"
        submitLabel="Send Message"
        successTitle="Message sent."
        successBody="Thanks for getting in touch. We'll reply as soon as we can during working hours."
      />
    </FormLayout>
  );
};

// -------------------------------------------------------------- /feedback
export const FeedbackPage = () => {
  usePageMeta({
    title: "Feedback",
    description:
      "Tell us how your Team Sudda clean went. If something was missed, tell us within 24 hours and we'll come back to put it right.",
    path: "/feedback",
  });
  return (
    <FormLayout
      eyebrow="Feedback"
      title="Tell us how we did."
      intro="Every message is read by the operations team. If something was missed, tell us within 24 hours and we'll come back to put it right at no charge."
      crumb="Feedback"
    >
      <EnquiryForm
        formName="Feedback"
        steps={FEEDBACK_STEPS}
        topicField="type"
        submitLabel="Send Feedback"
        successTitle="Thank you."
        successBody="We've received your feedback. If you asked for a re-clean, we'll contact you to arrange it."
      />
    </FormLayout>
  );
};

// ------------------------------------------------------- careers form only
export const CareersForm = () => (
  <EnquiryForm
    formName="Job application"
    steps={CAREERS_STEPS}
    topicField="role"
    submitLabel="Send Application"
    successTitle="Application received."
    successBody="Thanks for applying. If your application matches an open role, we'll call you to arrange a chat."
  />
);
