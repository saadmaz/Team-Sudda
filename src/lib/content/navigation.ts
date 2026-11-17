import { HOME_SERVICES, BUSINESS_SERVICES, servicePath } from "./services";
import { INDUSTRIES, industryPath } from "./industries";

export interface NavLink {
  label: string;
  href: string;
  desc?: string;
}

export interface NavGroup {
  label: string;
  /** Landing page for the group itself. */
  href: string;
  links: NavLink[];
  footer?: NavLink;
}

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "For Homes",
    href: "/homes",
    links: HOME_SERVICES.map((s) => ({ label: s.name, href: servicePath(s), desc: s.summary })),
    footer: { label: "All home services", href: "/homes" },
  },
  {
    label: "For Business",
    href: "/business",
    links: BUSINESS_SERVICES.map((s) => ({ label: s.name, href: servicePath(s), desc: s.summary })),
    footer: { label: "Request a site survey", href: "/business-quote" },
  },
  {
    label: "Industries",
    href: "/industries",
    links: INDUSTRIES.map((i) => ({ label: i.name, href: industryPath(i), desc: i.summary })),
    footer: { label: "All industries", href: "/industries" },
  },
  {
    label: "Company",
    href: "/about",
    links: [
      { label: "About Team Sudda", href: "/about", desc: "Who we are and the group behind us" },
      { label: "How We Work", href: "/how-we-work", desc: "The Team Sudda Standard" },
      { label: "Service Areas", href: "/areas", desc: "Where our teams work" },
      { label: "Careers", href: "/careers", desc: "Join the team" },
      { label: "Guides", href: "/blog", desc: "Plain-language cleaning advice" },
      { label: "FAQ", href: "/faq", desc: "Answers to common questions" },
      { label: "Contact", href: "/contact", desc: "Talk to us" },
    ],
  },
];

export const NAV_TOP_LINKS: NavLink[] = [
  { label: "How We Work", href: "/how-we-work" },
  { label: "Pricing", href: "/pricing" },
];
