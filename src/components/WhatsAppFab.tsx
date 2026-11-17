import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants/contact";

export const WhatsAppFab = () => (
  <a
    href={CONTACT.whatsappUrl}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="hidden md:block fixed bottom-5 right-5 z-50 group"
  >
    <span className="absolute inset-0 rounded-full bg-[hsl(var(--whatsapp))] animate-pulse-ring" />
    <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[hsl(var(--whatsapp))] text-white shadow-navy-glow group-hover:scale-110 transition-transform">
      <MessageCircle className="h-7 w-7" />
    </span>
  </a>
);
