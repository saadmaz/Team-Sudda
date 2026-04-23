import { Heart, Leaf, Star, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CompanyValue {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const VALUES: CompanyValue[] = [
  {
    icon: Heart,
    title: "Client-Oriented",
    desc: "We treat every client's space as if it were our own — listening to your needs and acting on feedback to continuously improve.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    desc: "We carefully select the best natural, non-toxic cleaning products that are safe for your family, pets, and the environment.",
  },
  {
    icon: Star,
    title: "Excellence",
    desc: "Our staff are trained to the highest standards and stay up-to-date with modern cleaning technologies and best practices.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    desc: "We build long-term relationships with clients and communities, continuously expanding our team and service coverage across Sri Lanka.",
  },
];

export const MISSION =
  "To be a national market leader in the provision of cleaning services, delivering reliable, quality, and cost-effective cleaning solutions to every client we serve.";

export const VISION =
  "A network of trusted cleaning professionals across Sri Lanka — all united by common values, eco-friendly practices, and a commitment to exceptional service.";
