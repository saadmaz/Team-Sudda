import {
  Home,
  Building,
  Sparkles,
  Hammer,
  Sofa,
  ShieldCheck,
  PartyPopper,
  Truck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    icon: Home,
    title: "Home Cleaning",
    desc: "Top-to-bottom shine for every room - kitchens, bathrooms and living spaces.",
  },
  {
    icon: Building,
    title: "Office Cleaning",
    desc: "Daily, weekly or one-off cleans that keep your workplace spotless and productive.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    desc: "Detailed deep-scrub for grime, grease and hard-to-reach corners.",
  },
  {
    icon: Hammer,
    title: "Post-Renovation",
    desc: "Dust, debris and paint splatter removed so you can enjoy your new space.",
  },
  {
    icon: Sofa,
    title: "Sofa & Carpet",
    desc: "Steam and shampoo cleaning that revives upholstery and removes stains.",
  },
  {
    icon: ShieldCheck,
    title: "Sanitization",
    desc: "Hospital-grade disinfection that kills 99.9% of germs and viruses.",
  },
  {
    icon: PartyPopper,
    title: "After-Event Cleanup",
    desc: "Wedding, party or corporate event? We handle the mess so you don't.",
  },
  {
    icon: Truck,
    title: "Move-In / Move-Out",
    desc: "Get your deposit back - we leave properties move-in ready.",
  },
];

export const SERVICE_NAMES = SERVICES.map((s) => s.title);
