import { Link } from "react-router-dom";
import { ClipboardList, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants/contact";

/** Always-visible call, WhatsApp and quote actions on phone-width screens. */
export const MobileCtaBar = () => (
  <nav
    aria-label="Quick contact"
    className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 bg-navy-deep border-t border-white/10 pb-[env(safe-area-inset-bottom)]"
  >
    <a
      href={`tel:${CONTACT.phone}`}
      className="flex flex-col items-center gap-1 py-2.5 text-white text-xs font-semibold"
    >
      <Phone className="h-5 w-5 text-yellow-brand" /> Call
    </a>
    <a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center gap-1 py-2.5 text-white text-xs font-semibold"
    >
      <MessageCircle className="h-5 w-5 text-[hsl(var(--whatsapp))]" /> WhatsApp
    </a>
    <Link
      to="/quote"
      className="flex flex-col items-center gap-1 py-2.5 bg-yellow-brand text-navy text-xs font-bold"
    >
      <ClipboardList className="h-5 w-5" /> Get a Quote
    </Link>
  </nav>
);
