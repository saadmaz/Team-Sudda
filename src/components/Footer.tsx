import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/constants/contact";
import { STATS } from "@/lib/constants/stats";
import { XIcon, TikTokIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";

const socialLinks = [
  { Icon: Facebook, href: CONTACT.social.facebook, label: "Facebook" },
  { Icon: Instagram, href: CONTACT.social.instagram, label: "Instagram" },
  { Icon: TikTokIcon, href: CONTACT.social.tiktok, label: "TikTok" },
  { Icon: Linkedin, href: CONTACT.social.linkedin, label: "LinkedIn" },
  { Icon: XIcon, href: CONTACT.social.x, label: "X" },
  { Icon: WhatsAppIcon, href: CONTACT.whatsappUrl, label: "WhatsApp" },
];

const usefulLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Book a Clean", href: "/book" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "FAQs", href: "/#faq" },
];

export const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="font-display font-extrabold text-white text-xl hover:text-yellow-brand transition-colors">
            Team Sudda
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            Sri Lanka's trusted cleaning team - making homes and businesses sparkle since {STATS.foundedYear} with eco-friendly products and a friendly smile.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {socialLinks.map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-yellow-brand hover:text-navy transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-white text-base">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {["Home", "About", "Services", "Contact"].map((l) => (
              <li key={l}>
                {l === "About" ? (
                  <Link to="/about" className="hover:text-yellow-brand transition-colors">{l}</Link>
                ) : (
                  <a href={`/#${l.toLowerCase()}`} className="hover:text-yellow-brand transition-colors">{l}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white text-base">Useful Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {usefulLinks.map(({ label, href }) => (
              <li key={label}>
                {href.startsWith("/") && !href.startsWith("/#") ? (
                  <Link to={href} className="hover:text-yellow-brand transition-colors">{label}</Link>
                ) : (
                  <a href={href} className="hover:text-yellow-brand transition-colors">{label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white text-base">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 text-yellow-brand mt-0.5" />
              <a href={`tel:${CONTACT.phone}`} className="hover:text-yellow-brand transition-colors">{CONTACT.phoneFormatted}</a>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="h-4 w-4 text-yellow-brand mt-0.5" />
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-yellow-brand transition-colors">
                WhatsApp: {CONTACT.phoneFormatted}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 text-yellow-brand mt-0.5" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-yellow-brand transition-colors">{CONTACT.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-yellow-brand mt-0.5" />
              <span>{CONTACT.address.full}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Team Sudda. All rights reserved.</p>
          <p className="text-yellow-brand/90 font-medium">Cleaning Sri Lanka, One Space at a Time.</p>
        </div>
      </div>
    </footer>
  );
};
