import type { FieldDef, FormStep } from "@/lib/forms";
import { HOME_SERVICES, BUSINESS_SERVICES } from "./services";
import { INDUSTRIES } from "./industries";
import { AREAS } from "./areas";

const AREA_OPTIONS = [...AREAS.map((a) => a.name), "Other (tell us below)"] as const;

const contactFields = (opts: { company?: boolean } = {}): FieldDef[] => [
  { name: "name", label: "Your name", type: "text", required: true, half: true },
  ...(opts.company
    ? [
        {
          name: "company",
          label: "Company / organisation",
          type: "text",
          required: true,
          half: true,
        } as FieldDef,
      ]
    : []),
  {
    name: "phone",
    label: "Phone / WhatsApp",
    type: "tel",
    required: true,
    half: true,
    placeholder: "07X XXX XXXX",
  },
  { name: "email", label: "Email", type: "email", required: Boolean(opts.company), half: true },
  {
    name: "contact_method",
    label: "Best way to reach you",
    type: "chips",
    options: ["WhatsApp", "Phone call", "Email"],
  },
];

// ------------------------------------------------------------ Home booking
export const HOME_BOOKING_STEPS: FormStep[] = [
  {
    title: "Service",
    fields: [
      {
        name: "service",
        label: "What do you need?",
        type: "select",
        required: true,
        options: [...HOME_SERVICES.map((s) => s.name), "Not sure, please advise"],
      },
      {
        name: "frequency",
        label: "How often?",
        type: "chips",
        required: true,
        options: ["One-off", "Weekly", "Fortnightly", "Monthly"],
      },
      {
        name: "addons",
        label: "Add-ons",
        type: "checkboxes",
        options: [
          "Inside oven",
          "Inside fridge",
          "Inside cupboards",
          "Sofa shampoo",
          "Mattress cleaning",
          "Balcony / terrace",
        ],
      },
    ],
  },
  {
    title: "Property",
    fields: [
      {
        name: "property_type",
        label: "Property type",
        type: "chips",
        required: true,
        options: ["Apartment", "House", "Annex / small unit", "Villa / large house"],
      },
      {
        name: "bedrooms",
        label: "Bedrooms",
        type: "select",
        required: true,
        half: true,
        options: ["Studio", "1", "2", "3", "4", "5+"],
      },
      {
        name: "bathrooms",
        label: "Bathrooms",
        type: "select",
        required: true,
        half: true,
        options: ["1", "2", "3", "4", "5+"],
      },
      {
        name: "area",
        label: "Area",
        type: "select",
        required: true,
        half: true,
        options: AREA_OPTIONS,
      },
      { name: "address", label: "Address", type: "text", required: true, half: true },
      { name: "date", label: "Preferred date", type: "date", required: true, half: true },
      {
        name: "time",
        label: "Preferred time",
        type: "select",
        half: true,
        options: ["Morning (8am - 12pm)", "Afternoon (12pm - 4pm)", "Flexible"],
      },
      {
        name: "notes",
        label: "Anything we should know?",
        type: "textarea",
        placeholder: "Parking, pets, areas to focus on, when the place was last deep cleaned…",
      },
    ],
  },
  { title: "Your details", fields: contactFields() },
];

// --------------------------------------------------------- Business quote
export const BUSINESS_QUOTE_STEPS: FormStep[] = [
  {
    title: "Requirement",
    fields: [
      {
        name: "services",
        label: "Services needed",
        type: "checkboxes",
        required: true,
        options: [...BUSINESS_SERVICES.map((s) => s.name), "Not sure yet"],
      },
      {
        name: "industry",
        label: "Type of premises",
        type: "select",
        required: true,
        half: true,
        options: [...INDUSTRIES.map((i) => i.name), "Other"],
      },
      {
        name: "cycle",
        label: "Service cycle",
        type: "select",
        required: true,
        half: true,
        options: [
          "Daily (weekdays)",
          "Daily (7 days)",
          "Alternate days",
          "Weekly",
          "Monthly",
          "Quarterly",
          "One-off project",
        ],
      },
      {
        name: "staff_needed",
        label: "On-site staff needed (if known)",
        type: "number",
        half: true,
        hint: "Cleaners, housekeepers or tea service staff",
      },
      {
        name: "shift",
        label: "Preferred hours",
        type: "select",
        half: true,
        options: [
          "Before office hours",
          "During office hours",
          "After office hours",
          "Weekends",
          "Flexible",
        ],
      },
      {
        name: "supplies",
        label: "Cleaning materials and equipment",
        type: "chips",
        options: ["Supplied by Team Sudda", "Supplied by us", "Discuss at survey"],
      },
    ],
  },
  {
    title: "Site",
    fields: [
      {
        name: "sites",
        label: "Number of sites",
        type: "select",
        required: true,
        half: true,
        options: ["1", "2 - 5", "6 - 10", "10+"],
      },
      {
        name: "floor_area",
        label: "Approximate floor area (sq ft)",
        type: "text",
        half: true,
        placeholder: "e.g. 8,000",
      },
      {
        name: "area",
        label: "Location",
        type: "select",
        required: true,
        half: true,
        options: AREA_OPTIONS,
      },
      { name: "address", label: "Site address", type: "text", required: true, half: true },
      { name: "start_date", label: "Target start date", type: "date", half: true },
      {
        name: "current_provider",
        label: "Do you have a cleaning provider today?",
        type: "chips",
        options: ["Yes", "No", "In-house staff"],
      },
      {
        name: "notes",
        label: "Scope, tender details or anything else",
        type: "textarea",
        placeholder:
          "Describe the site and what you need. If there's a tender document, mention it and we'll ask for it.",
      },
    ],
  },
  {
    title: "Contact",
    fields: [
      ...contactFields({ company: true }).slice(0, 2),
      {
        name: "designation",
        label: "Your role",
        type: "text",
        half: true,
        placeholder: "e.g. Admin Manager",
      },
      ...contactFields({ company: true }).slice(2),
    ],
  },
];

// -------------------------------------------------------------- Careers
export const CAREERS_ROLES = [
  "Cleaner",
  "Housekeeping staff",
  "Tea service / office aide",
  "Team lead / supervisor",
  "Operations / office role",
] as const;

export const CAREERS_STEPS: FormStep[] = [
  {
    title: "Role",
    fields: [
      {
        name: "role",
        label: "Role you're applying for",
        type: "select",
        required: true,
        options: CAREERS_ROLES,
      },
      {
        name: "experience",
        label: "Cleaning or housekeeping experience",
        type: "chips",
        required: true,
        options: ["No experience", "Under 1 year", "1 - 3 years", "3+ years"],
      },
      {
        name: "availability",
        label: "Availability",
        type: "chips",
        required: true,
        options: ["Full-time", "Part-time", "Weekends only"],
      },
      {
        name: "languages",
        label: "Languages you speak",
        type: "checkboxes",
        options: ["Sinhala", "Tamil", "English"],
      },
    ],
  },
  {
    title: "About you",
    fields: [
      { name: "name", label: "Full name", type: "text", required: true, half: true },
      { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true, half: true },
      {
        name: "home_area",
        label: "Where do you live?",
        type: "text",
        required: true,
        half: true,
        placeholder: "Town or area",
      },
      {
        name: "age_range",
        label: "Age range",
        type: "select",
        half: true,
        options: ["18 - 24", "25 - 34", "35 - 44", "45 - 54", "55+"],
      },
      { name: "email", label: "Email (optional)", type: "email", half: true },
      {
        name: "notes",
        label: "Tell us about yourself",
        type: "textarea",
        placeholder: "Previous jobs, why you want to join, when you can start…",
      },
    ],
  },
];

// -------------------------------------------------------------- Contact
export const CONTACT_STEPS: FormStep[] = [
  {
    title: "Message",
    fields: [
      { name: "name", label: "Your name", type: "text", required: true, half: true },
      { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true, half: true },
      { name: "email", label: "Email", type: "email", half: true },
      {
        name: "topic",
        label: "What is it about?",
        type: "select",
        required: true,
        half: true,
        options: [
          "Home cleaning",
          "Business cleaning",
          "Existing booking",
          "Partnership",
          "Something else",
        ],
      },
      { name: "message", label: "Message", type: "textarea", required: true },
    ],
  },
];

// ------------------------------------------------------------- Feedback
export const FEEDBACK_STEPS: FormStep[] = [
  {
    title: "Feedback",
    fields: [
      {
        name: "type",
        label: "What would you like to tell us?",
        type: "chips",
        required: true,
        options: ["Compliment", "Something was missed", "Complaint", "Suggestion"],
      },
      {
        name: "rating",
        label: "How was the service overall?",
        type: "chips",
        options: ["Excellent", "Good", "Okay", "Poor"],
      },
      {
        name: "service_date",
        label: "Date of service",
        type: "date",
        allowPast: true,
        half: true,
        hint: "Leave blank if you're not sure",
      },
      { name: "location", label: "Address or site name", type: "text", half: true },
      { name: "message", label: "Details", type: "textarea", required: true },
      {
        name: "recleaning",
        label: "Would you like us to come back and re-clean?",
        type: "chips",
        options: ["Yes", "No"],
        showIf: { field: "type", equals: ["Something was missed", "Complaint"] },
      },
      {
        name: "publish",
        label: "May we publish your comment on our website?",
        type: "chips",
        options: ["Yes, with my first name", "Yes, anonymously", "No"],
        showIf: { field: "type", equals: ["Compliment"] },
      },
      { name: "name", label: "Your name", type: "text", required: true, half: true },
      { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true, half: true },
    ],
  },
];
