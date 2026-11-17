import { ClipboardCheck, Eye, Handshake, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CompanyValue {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const VALUES: CompanyValue[] = [
  {
    icon: ClipboardCheck,
    title: "Do it properly",
    desc: "A written checklist, the right order and the right products. The job is finished when it's done right, not when time runs out.",
  },
  {
    icon: Eye,
    title: "Say it straight",
    desc: "Clear quotations, honest timings and plain answers. If something can't be done, or a stain won't come out, we tell you.",
  },
  {
    icon: Handshake,
    title: "Own the result",
    desc: "If something was missed, we come back and fix it. Business clients get a named contact who answers for the standard.",
  },
  {
    icon: TrendingUp,
    title: "Build people",
    desc: "Cleaning is skilled work. We train our people, give them a path to lead, and treat the work with respect.",
  },
];

export const MISSION =
  "To make professional cleaning dependable: a clear standard, delivered by trained and supervised teams, for every home and workplace we serve.";

export const VISION =
  "To set the standard for cleaning and facility care in Sri Lanka, so that “done properly” is what people expect, and what they get.";
