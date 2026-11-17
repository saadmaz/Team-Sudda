import {
  Home,
  Sparkles,
  Truck,
  Hammer,
  Sofa,
  CookingPot,
  PartyPopper,
  ShieldCheck,
  Building,
  Coffee,
  Layers,
  CalendarCheck,
  HardHat,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Audience = "home" | "business";

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  audience: Audience;
  name: string;
  icon: LucideIcon;
  /** One line for cards and menus. */
  summary: string;
  /** Page headline. */
  headline: string;
  intro: string;
  includes: string[];
  goodFor: string[];
  /** Things customers often assume are included but are not. */
  notIncluded?: string[];
  frequency: string;
  faqs: ServiceFAQ[];
  related: string[];
}

export const SERVICES: Service[] = [
  // ---------------------------------------------------------------- Homes
  {
    slug: "home-cleaning",
    audience: "home",
    name: "Regular Home Cleaning",
    icon: Home,
    summary: "Weekly, fortnightly or monthly cleans that keep the house under control.",
    headline: "A clean house that stays clean.",
    intro:
      "Regular cleaning is for homes that are lived in. The same checklist every visit, the same standard every time, and a team that learns how your house works.",
    includes: [
      "Dusting of surfaces, shelves, switches and skirting",
      "Kitchen counters, sink, stove top and appliance fronts",
      "Bathrooms: toilet, basin, shower area, tiles and mirrors",
      "Sweeping, vacuuming and mopping of all floors",
      "Beds made and linen changed if fresh linen is left out",
      "Bins emptied and rubbish taken to your collection point",
    ],
    goodFor: ["Houses and apartments", "Busy families", "Rental and holiday homes"],
    notIncluded: ["Inside ovens and fridges (add-on)", "Laundry and ironing", "Exterior walls"],
    frequency: "Weekly, fortnightly or monthly",
    faqs: [
      {
        q: "Do I get the same cleaners every time?",
        a: "Wherever possible, yes. Regular customers are matched with a regular team so they learn your home and your preferences.",
      },
      {
        q: "Do I need to supply anything?",
        a: "No. The team brings products and equipment. If you prefer a particular product to be used, leave it out and tell us.",
      },
    ],
    related: ["deep-cleaning", "kitchen-bathroom-cleaning", "sofa-carpet-cleaning"],
  },
  {
    slug: "deep-cleaning",
    audience: "home",
    name: "Deep Cleaning",
    icon: Sparkles,
    summary: "A top-to-bottom reset for the grease, grime and corners a normal clean skips.",
    headline: "The clean that gets behind things.",
    intro:
      "A deep clean is the one you book when the house needs resetting. We move what can be moved, reach what is normally skipped and work room by room until the whole place is done.",
    includes: [
      "Everything in a regular clean",
      "Kitchen degreasing: tiles, cabinet fronts, hood and stove",
      "Bathroom descaling: taps, tiles, grout and glass",
      "Doors, frames, switches and handles wiped down",
      "Fans, light fittings and high surfaces dusted",
      "Inside windows, sills and tracks",
      "Behind and under movable furniture",
    ],
    goodFor: [
      "Homes that have not been properly cleaned in months",
      "Before festivals and family events",
      "Before starting a regular cleaning plan",
    ],
    notIncluded: ["Inside cupboards unless emptied", "Exterior windows above ground floor"],
    frequency: "One-off, or every 3 to 6 months",
    faqs: [
      {
        q: "How long does a deep clean take?",
        a: "It depends on the size and condition of the property. Most homes take a full day with a team of two or three. We confirm the time and team size in your quotation.",
      },
    ],
    related: ["home-cleaning", "move-in-move-out-cleaning", "kitchen-bathroom-cleaning"],
  },
  {
    slug: "move-in-move-out-cleaning",
    audience: "home",
    name: "Move-In / Move-Out Cleaning",
    icon: Truck,
    summary: "An empty property cleaned properly for handover or for moving in.",
    headline: "Hand it over clean. Move in clean.",
    intro:
      "An empty property is the best time to clean it properly. We clean every room, cupboard and fitting so it is ready for the next people to live in, or ready for you.",
    includes: [
      "Inside and outside all cupboards, wardrobes and drawers",
      "Kitchen, including inside the oven and fridge if present",
      "Bathrooms descaled and disinfected",
      "Walls spot-cleaned, switches and doors wiped",
      "Windows, grilles, sills and tracks",
      "Floors cleaned and mopped throughout",
    ],
    goodFor: ["Tenants leaving a rental", "Landlords between tenants", "New homeowners"],
    frequency: "One-off",
    faqs: [
      {
        q: "Does the property need to be empty?",
        a: "It works best empty. If some furniture is still in place, tell us when you book so we can plan around it.",
      },
    ],
    related: ["deep-cleaning", "post-renovation-cleaning"],
  },
  {
    slug: "post-renovation-cleaning",
    audience: "home",
    name: "Post-Renovation Cleaning",
    icon: Hammer,
    summary: "Builder's dust, paint marks and debris cleared after work at home.",
    headline: "The builders have left. The dust has not.",
    intro:
      "Renovation dust settles everywhere, including places you will not notice until weeks later. We clear it in the right order, from high surfaces down, so it does not end up back on the floor.",
    includes: [
      "Fine dust removed from walls, ceilings, fans and fittings",
      "Paint, plaster and adhesive marks removed from hard surfaces",
      "Windows, frames and grilles cleaned",
      "Kitchens and bathrooms cleaned and made ready to use",
      "Floors cleaned, with multiple passes where needed",
    ],
    goodFor: ["Home renovations", "New kitchens and bathrooms", "Repainting and re-flooring"],
    notIncluded: ["Removal of large construction waste"],
    frequency: "One-off",
    faqs: [
      {
        q: "When should I book it?",
        a: "After all trades have finished. If painters or electricians come back afterwards, the dust comes back too.",
      },
    ],
    related: ["deep-cleaning", "post-construction-cleaning"],
  },
  {
    slug: "sofa-carpet-cleaning",
    audience: "home",
    name: "Sofa, Carpet & Mattress Cleaning",
    icon: Sofa,
    summary: "Shampoo and extraction cleaning for upholstery, carpets, rugs and mattresses.",
    headline: "Fabric holds on to everything.",
    intro:
      "Sofas, carpets and mattresses collect dust, spills and odours that a vacuum cannot reach. We clean them with the method that suits the fabric and tell you honestly which stains may not come out.",
    includes: [
      "Fabric check before cleaning",
      "Vacuuming to remove loose dust",
      "Shampoo or extraction cleaning to suit the material",
      "Spot treatment of marks and stains",
      "Advice on drying time and aftercare",
    ],
    goodFor: ["Sofas and dining chairs", "Wall-to-wall carpet and rugs", "Mattresses"],
    frequency: "Every 6 to 12 months",
    faqs: [
      {
        q: "How long does it take to dry?",
        a: "Usually several hours, depending on the fabric, airflow and weather. We tell you what to expect before we start.",
      },
    ],
    related: ["deep-cleaning", "home-cleaning"],
  },
  {
    slug: "kitchen-bathroom-cleaning",
    audience: "home",
    name: "Kitchen & Bathroom Deep Clean",
    icon: CookingPot,
    summary: "Focused degreasing and descaling for the two rooms that work hardest.",
    headline: "The two rooms that need it most.",
    intro:
      "Grease in the kitchen and limescale in the bathroom build up faster than anywhere else. This service focuses a full team on just those rooms.",
    includes: [
      "Hood, stove, tiles and cabinet fronts degreased",
      "Sink, taps and counters cleaned and descaled",
      "Inside oven, fridge and microwave on request",
      "Toilets, basins and showers descaled and disinfected",
      "Tiles and grout scrubbed",
      "Mirrors, glass and fittings polished",
    ],
    goodFor: ["Busy family kitchens", "Hard-water bathrooms", "Before guests arrive"],
    frequency: "One-off, or every 2 to 3 months",
    faqs: [],
    related: ["deep-cleaning", "home-cleaning"],
  },
  {
    slug: "after-event-cleaning",
    audience: "home",
    name: "After-Event Cleaning",
    icon: PartyPopper,
    summary: "Parties, weddings, almsgivings and gatherings cleaned up afterwards.",
    headline: "You host. We clean up.",
    intro:
      "After a big gathering, the last thing anyone wants is the clean-up. We arrive when the event is done and leave the space ready to use again.",
    includes: [
      "Rubbish collected, bagged and removed to your collection point",
      "Tables, chairs and surfaces wiped",
      "Kitchen and serving areas cleaned",
      "Bathrooms cleaned and restocked with your supplies",
      "Floors swept and mopped",
    ],
    goodFor: ["House parties and family functions", "Almsgivings", "Small venues and halls"],
    frequency: "One-off",
    faqs: [],
    related: ["deep-cleaning", "home-cleaning"],
  },
  {
    slug: "disinfection",
    audience: "home",
    name: "Disinfection",
    icon: ShieldCheck,
    summary: "Clean-then-disinfect treatment of high-touch surfaces.",
    headline: "Clean first. Then disinfect.",
    intro:
      "Disinfectant only works on a surface that is already clean. We clean high-touch surfaces first, then apply disinfectant following the product's instructions for dilution and contact time.",
    includes: [
      "Cleaning of high-touch surfaces first",
      "Disinfection of handles, switches, rails, counters and taps",
      "Bathroom and kitchen disinfection",
      "Products used according to manufacturer instructions",
    ],
    goodFor: ["After illness in the household", "Homes with elderly or vulnerable people"],
    frequency: "One-off or as needed",
    faqs: [
      {
        q: "Can you guarantee a germ-free home?",
        a: "No honest company can. What we promise is the right products, used correctly, on the surfaces that matter most.",
      },
    ],
    related: ["deep-cleaning", "kitchen-bathroom-cleaning"],
  },

  // ------------------------------------------------------------- Business
  {
    slug: "office-cleaning",
    audience: "business",
    name: "Contract Office Cleaning",
    icon: Building,
    summary: "Daily, weekly or scheduled cleaning of your workplace, on a contract.",
    headline: "The office is clean before anyone notices.",
    intro:
      "Contract cleaning is about consistency. We agree a scope and schedule for your site, assign a team, set a checklist and supervise it, so the standard does not depend on who turned up that day.",
    includes: [
      "Site survey and written cleaning scope",
      "Agreed daily, weekly and periodic task schedule",
      "Workstations, meeting rooms and reception",
      "Pantries and kitchens",
      "Washrooms cleaned and checked through the day",
      "Floors, glass partitions and entrances",
      "Supervisor checks and a named point of contact",
      "Cover arranged when a regular cleaner is absent",
    ],
    goodFor: ["Corporate offices", "Bank branches", "Co-working spaces", "Showrooms"],
    frequency: "Daily, alternate days or weekly",
    faqs: [
      {
        q: "Can you clean outside working hours?",
        a: "Yes. Early morning, evening and weekend schedules can be agreed at the site survey.",
      },
      {
        q: "What happens if our regular cleaner is absent?",
        a: "We arrange cover so the site is not left uncleaned. This is written into the contract.",
      },
      {
        q: "Who supplies consumables?",
        a: "Either way works. We can supply cleaning materials as part of the contract, or use yours. Washroom consumables can be included or managed by you.",
      },
    ],
    related: ["housekeeping-office-support", "floor-care", "commercial-deep-cleaning"],
  },
  {
    slug: "housekeeping-office-support",
    audience: "business",
    name: "Housekeeping, Tea Service & Office Aides",
    icon: Coffee,
    summary: "Trained, uniformed staff placed at your site for housekeeping and support.",
    headline: "The people who keep the place running.",
    intro:
      "Some sites need people on the floor all day: keeping areas tidy, serving tea, setting up meeting rooms and handling small tasks. We place trained staff with you and manage them, so you do not have to.",
    includes: [
      "Full-time or part-time housekeeping staff on site",
      "Tea, coffee and refreshment service",
      "Meeting room set-up and clear-down",
      "Pantry management and restocking",
      "Office aide and messenger support within the premises",
      "Uniforms, supervision and leave cover managed by us",
    ],
    goodFor: ["Corporate offices", "Head offices", "Banks", "Institutions"],
    frequency: "Ongoing contract",
    faqs: [
      {
        q: "Are the staff employed by you or by us?",
        a: "By Team Sudda. We handle recruitment, training, payroll, uniforms, supervision and leave cover. You deal with one supplier and one point of contact.",
      },
    ],
    related: ["office-cleaning", "floor-care"],
  },
  {
    slug: "floor-care",
    audience: "business",
    name: "Floor Scrubbing & Polishing",
    icon: Layers,
    summary: "Machine scrubbing, polishing and restoration for hard floors.",
    headline: "Floors take the most punishment.",
    intro:
      "Daily mopping keeps floors tidy. It does not remove the ground-in dirt that dulls tile, terrazzo and stone over time. Machine scrubbing and polishing does.",
    includes: [
      "Floor type and condition assessment",
      "Machine scrubbing of tile, terrazzo, vinyl and stone",
      "Polishing to suit the floor type",
      "Grout and edge cleaning",
      "Work scheduled outside your opening hours",
    ],
    goodFor: ["Lobbies and corridors", "Showrooms and retail", "Hotels", "Warehouses"],
    frequency: "Monthly, quarterly or one-off",
    faqs: [],
    related: ["commercial-deep-cleaning", "office-cleaning"],
  },
  {
    slug: "commercial-deep-cleaning",
    audience: "business",
    name: "Periodic Deep Cleaning",
    icon: CalendarCheck,
    summary: "Scheduled deep cleans of offices, kitchens, washrooms and upholstery.",
    headline: "The work daily cleaning does not cover.",
    intro:
      "Even a well-cleaned site needs a deeper clean every few months: high-level dusting, upholstery, carpets, kitchens and washrooms. We plan it around your operations so work carries on.",
    includes: [
      "High-level dusting: vents, lights, ceiling fans and ledges",
      "Carpet and upholstery shampooing",
      "Pantry and kitchen degreasing",
      "Washroom descaling and deep sanitising",
      "Internal glass and partitions",
      "Planned around your working hours",
    ],
    goodFor: ["Offices", "Schools", "Clinics", "Restaurants and hotels"],
    frequency: "Quarterly, bi-annually or one-off",
    faqs: [],
    related: ["office-cleaning", "floor-care"],
  },
  {
    slug: "post-construction-cleaning",
    audience: "business",
    name: "Post-Construction & Handover Cleaning",
    icon: HardHat,
    summary: "Builder's cleans for fit-outs, new buildings and apartment handovers.",
    headline: "Ready for handover. Ready for the keys.",
    intro:
      "A new building or fit-out is not finished until it is clean. We work with contractors and developers to clean sites in stages, so the property is ready for inspection and handover.",
    includes: [
      "Rough clean after major works",
      "Final clean before inspection and handover",
      "Dust, paint, sealant and sticker removal",
      "Glass, frames and fittings cleaned",
      "Floors cleaned and prepared for use",
      "Phased cleaning for multi-unit projects",
    ],
    goodFor: ["Developers and contractors", "Office fit-outs", "New apartment buildings"],
    notIncluded: ["Removal of large construction waste and skips"],
    frequency: "Project-based",
    faqs: [],
    related: ["commercial-deep-cleaning", "floor-care"],
  },
];

export const HOME_SERVICES = SERVICES.filter((s) => s.audience === "home");
export const BUSINESS_SERVICES = SERVICES.filter((s) => s.audience === "business");
export const SERVICE_NAMES = SERVICES.map((s) => s.name);

export const getService = (slug: string | undefined) => SERVICES.find((s) => s.slug === slug);
export const servicePath = (s: Pick<Service, "slug">) => `/services/${s.slug}`;
