import {
  Briefcase,
  Landmark,
  Building2,
  Hotel,
  Stethoscope,
  GraduationCap,
  Store,
  Warehouse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Industry {
  slug: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  headline: string;
  intro: string;
  /** What makes cleaning this kind of site different. */
  challenges: string[];
  /** How Team Sudda handles it. */
  approach: string[];
  services: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "offices",
    name: "Offices & Corporates",
    icon: Briefcase,
    summary: "Workplaces that need to look right every morning.",
    headline: "A workplace that is ready when your people arrive.",
    intro:
      "Offices are judged in the first minute: reception, meeting rooms, washrooms, pantry. We build a schedule around your working hours and keep the standard consistent day after day.",
    challenges: [
      "Cleaning has to happen around working hours",
      "Washrooms and pantries need attention through the day",
      "The standard slips when the regular cleaner is absent",
    ],
    approach: [
      "Written scope and task schedule agreed at the site survey",
      "Early-morning, evening or day-shift teams",
      "Supervisor checks and a named point of contact",
      "Leave cover arranged by us",
    ],
    services: ["office-cleaning", "housekeeping-office-support", "commercial-deep-cleaning"],
  },
  {
    slug: "banks-financial",
    name: "Banks & Financial Services",
    icon: Landmark,
    summary: "Branches and head offices with high footfall and high expectations.",
    headline: "Branches that look as trustworthy as the brand.",
    intro:
      "Banking halls see heavy footfall and customers notice every smudge on the glass. Back offices need discreet, reliable staff who follow site rules.",
    challenges: [
      "High footfall in customer areas",
      "Secure areas with access rules",
      "Several branches that need the same standard",
    ],
    approach: [
      "Cleaning scheduled around banking hours",
      "Staff briefed on site access and conduct rules",
      "One checklist across every branch you give us",
    ],
    services: ["office-cleaning", "housekeeping-office-support", "floor-care"],
  },
  {
    slug: "apartments",
    name: "Apartments & Management Corporations",
    icon: Building2,
    summary: "Common areas, lobbies and shared facilities in residential buildings.",
    headline: "Common areas residents are proud of.",
    intro:
      "Lobbies, lifts, corridors, stairwells, gyms and pool decks are what residents and visitors see first. We work with management corporations to keep them consistently clean.",
    challenges: [
      "Large shared areas used all day",
      "Residents expect visible, consistent standards",
      "Management committees need clear reporting",
    ],
    approach: [
      "Daily common-area cleaning schedule",
      "Periodic floor care for lobbies and corridors",
      "Simple reporting for the management corporation",
      "Handover cleaning for new and vacated units",
    ],
    services: ["office-cleaning", "floor-care", "post-construction-cleaning"],
  },
  {
    slug: "hotels-hospitality",
    name: "Hotels & Hospitality",
    icon: Hotel,
    summary: "Guest-facing spaces where the standard is always on show.",
    headline: "Guests notice everything.",
    intro:
      "In hospitality, cleanliness is part of the product. We support hotels, guest houses and restaurants with public-area cleaning, periodic deep cleans and floor care.",
    challenges: [
      "Guest-facing areas in use around the clock",
      "Kitchens with heavy grease build-up",
      "Floors and upholstery under constant wear",
    ],
    approach: [
      "Public-area teams scheduled around guest flow",
      "Kitchen deep cleans during quiet periods",
      "Floor polishing and upholstery cleaning on a schedule",
    ],
    services: ["commercial-deep-cleaning", "floor-care", "housekeeping-office-support"],
  },
  {
    slug: "clinics-healthcare",
    name: "Clinics & Healthcare",
    icon: Stethoscope,
    summary: "Waiting areas, consulting rooms and washrooms in clinics and practices.",
    headline: "Clean spaces where patients feel safe.",
    intro:
      "Clinics, dental practices and medical centres need careful, consistent cleaning of waiting areas, consulting rooms and washrooms. We clean first and disinfect high-touch surfaces using products as instructed.",
    challenges: [
      "Patients judge the clinic by what they can see",
      "High-touch surfaces need regular attention",
      "Cleaning must fit around appointments",
    ],
    approach: [
      "Clean-then-disinfect process for high-touch surfaces",
      "Schedules built around clinic hours",
      "Separate cloths and equipment for washrooms",
    ],
    services: ["office-cleaning", "commercial-deep-cleaning"],
  },
  {
    slug: "schools",
    name: "Schools & Institutions",
    icon: GraduationCap,
    summary: "Classrooms, halls and washrooms for schools and training centres.",
    headline: "Ready for every school day.",
    intro:
      "Schools and institutes need classrooms, halls and washrooms cleaned every day, and a bigger clean during the holidays. We plan both.",
    challenges: [
      "Large numbers of students using washrooms",
      "Cleaning has to fit around timetables",
      "Holiday periods are the only chance for deep work",
    ],
    approach: [
      "After-hours daily cleaning",
      "Term-break deep cleans and floor care",
      "Clear scope agreed with the administration",
    ],
    services: ["office-cleaning", "commercial-deep-cleaning", "floor-care"],
  },
  {
    slug: "retail-showrooms",
    name: "Retail & Showrooms",
    icon: Store,
    summary: "Shops and showrooms where the floor and glass sell the product.",
    headline: "Spotless glass. Floors that shine.",
    intro:
      "In retail, a dull floor or a smeared window works against everything else you do. We keep shop floors, glass and fitting areas clean before you open.",
    challenges: [
      "Cleaning must finish before opening time",
      "Glass and display areas show every mark",
      "Floors take heavy, constant traffic",
    ],
    approach: [
      "Before-opening or after-closing teams",
      "Glass and display cleaning on every visit",
      "Periodic floor scrubbing and polishing",
    ],
    services: ["office-cleaning", "floor-care"],
  },
  {
    slug: "factories-warehouses",
    name: "Factories & Warehouses",
    icon: Warehouse,
    summary: "Industrial floors, staff facilities and admin areas.",
    headline: "Clean sites run better.",
    intro:
      "Industrial sites need cleaning that fits shift patterns and safety rules: staff canteens, washrooms, admin offices and large floor areas.",
    challenges: [
      "Large floor areas and shift-based operations",
      "Site safety rules and inductions",
      "Staff facilities used by many people",
    ],
    approach: [
      "Teams scheduled around shifts",
      "Staff follow your site safety rules",
      "Machine scrubbing for large floor areas",
    ],
    services: ["office-cleaning", "floor-care", "commercial-deep-cleaning"],
  },
];

export const getIndustry = (slug: string | undefined) => INDUSTRIES.find((i) => i.slug === slug);
export const industryPath = (i: Pick<Industry, "slug">) => `/industries/${i.slug}`;
