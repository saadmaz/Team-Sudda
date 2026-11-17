import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants/contact";
import { STATS } from "@/lib/constants/stats";
import { XIcon, TikTokIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";
import { NAV_GROUPS } from "@/lib/content/navigation";
import { AREAS, areaPath } from "@/lib/content/areas";

const socialLinks = [
  { Icon: Facebook, href: CONTACT.social.facebook, label: "Facebook" },
  { Icon: Instagram, href: CONTACT.social.instagram, label: "Instagram" },
  { Icon: TikTokIcon, href: CONTACT.social.tiktok, label: "TikTok" },
  { Icon: Linkedin, href: CONTACT.social.linkedin, label: "LinkedIn" },
  { Icon: XIcon, href: CONTACT.social.x, label: "X" },
  { Icon: WhatsAppIcon, href: CONTACT.whatsappUrl, label: "WhatsApp" },
];

const [homes, business, , company] = NAV_GROUPS;

const columns = [
  { title: "For Homes", links: homes.links },
  {
    title: "For Business",
    links: [...business.links, { label: "Industries", href: "/industries" }],
  },
  {
    title: "Company",
    links: [
      ...company.links,
      { label: "Pricing", href: "/pricing" },
      { label: "Give Feedback", href: "/feedback" },
    ],
  },
];

export const Footer = () => (
  <footer className="bg-navy-deep text-white/75">
    <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
      <div>
        <Link
          to="/"
          className="font-display font-extrabold text-white text-xl hover:text-yellow-brand transition-colors"
        >
          Team <span className="text-yellow-brand">Sudda</span>
        </Link>
        <p className="mt-4 text-sm leading-relaxed max-w-xs">
          Home, office and contract cleaning across Colombo and Greater Colombo since{" "}
          {STATS.foundedYear}. Cleaning, done properly.
        </p>
        <ul className="mt-5 grid gap-2.5 text-sm">
          <li>
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-2.5 hover:text-yellow-brand"
            >
              <Phone className="h-4 w-4 text-yellow-brand" /> {CONTACT.phoneFormatted}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2.5 hover:text-yellow-brand"
            >
              <Mail className="h-4 w-4 text-yellow-brand" /> {CONTACT.email}
            </a>
          </li>
          <li className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 text-yellow-brand" /> {CONTACT.address.full}
          </li>
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-yellow-brand hover:text-navy transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      {columns.map((col) => (
        <div key={col.title}>
          <h2 className="font-display font-bold text-white text-base">{col.title}</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {col.links.map((l) => (
              <li key={l.href + l.label}>
                <Link to={l.href} className="hover:text-yellow-brand transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="border-t border-white/10">
      <div className="container-x py-6 text-xs">
        <span className="text-white/50">Areas: </span>
        {AREAS.map((a, i) => (
          <span key={a.slug}>
            <Link to={areaPath(a)} className="hover:text-yellow-brand">
              {a.name}
            </Link>
            {i < AREAS.length - 1 && <span className="text-white/30"> · </span>}
          </span>
        ))}
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container-x py-5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-white/50">
        <p>
          © {new Date().getFullYear()} Team Sudda · A company of the{" "}
          <a
            href="https://sttps.co"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-brand"
          >
            STTPS group
          </a>
        </p>
        <div className="flex gap-4">
          <Link to="/privacy-policy" className="hover:text-yellow-brand">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-yellow-brand">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
