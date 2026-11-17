import {
  ClipboardList,
  FileText,
  Users,
  ListChecks,
  SearchCheck,
  MessageSquareText,
  RotateCcw,
  UserCheck,
  BadgeCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface StandardStep {
  n: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

/** The Team Sudda way of working, from first message to finished job. */
export const PROCESS: StandardStep[] = [
  {
    n: "01",
    title: "Tell us about the space",
    desc: "Send the property type, size, area and what you need. Photos help. For businesses, we visit the site.",
    icon: ClipboardList,
  },
  {
    n: "02",
    title: "Get a clear quotation",
    desc: "You see what is included, how many people we'll send, how long it will take and what it costs, before you confirm.",
    icon: FileText,
  },
  {
    n: "03",
    title: "A briefed team arrives",
    desc: "In uniform, on time, with products and equipment, and with your notes already read.",
    icon: Users,
  },
  {
    n: "04",
    title: "We work to a checklist",
    desc: "Room by room, in the right order: top to bottom, dry to wet, clean to dirty. Nothing left to memory.",
    icon: ListChecks,
  },
  {
    n: "05",
    title: "The team lead checks the job",
    desc: "Before we leave, the team lead walks the space against the checklist. You're welcome to walk it with them.",
    icon: SearchCheck,
  },
  {
    n: "06",
    title: "Tell us how we did",
    desc: "If something was missed, tell us within 24 hours and we'll come back to put it right at no charge.",
    icon: MessageSquareText,
  },
];

export interface Commitment {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export const COMMITMENTS: Commitment[] = [
  {
    title: "Quotation first",
    desc: "The price is agreed before the work starts. No surprise number at the end.",
    icon: FileText,
  },
  {
    title: "Checklist on every job",
    desc: "Every service has a written checklist. The team works to it and the team lead checks against it.",
    icon: ListChecks,
  },
  {
    title: "Free re-clean within 24 hours",
    desc: "If we missed something, tell us within 24 hours and we'll come back and fix it.",
    icon: RotateCcw,
  },
  {
    title: "Cover for contract sites",
    desc: "If a regular cleaner on your contract is absent, we arrange cover. Your site is not left uncleaned.",
    icon: UserCheck,
  },
  {
    title: "One point of contact",
    desc: "Business clients get a named contact who knows the site and answers for the standard.",
    icon: BadgeCheck,
  },
];

/** "Typical service vs Team Sudda" comparison. Keep each side short and factual. */
export const COMPARISON: { topic: string; typical: string; us: string }[] = [
  {
    topic: "Price",
    typical: "Rough figure on the phone, extras added at the end",
    us: "Written quotation agreed before work starts",
  },
  {
    topic: "What gets cleaned",
    typical: "Depends on who turns up",
    us: "A written checklist for every service",
  },
  {
    topic: "Quality check",
    typical: "You find the missed spots after they've left",
    us: "Team lead checks the job before leaving",
  },
  {
    topic: "When something is missed",
    typical: "Another booking, another charge",
    us: "Free re-clean if you tell us within 24 hours",
  },
  {
    topic: "Absent cleaners on contracts",
    typical: "Site left uncleaned for the day",
    us: "Cover arranged by us",
  },
];
