import { Sparkles, Facebook, Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-yellow-brand text-navy">
              <Sparkles className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display font-extrabold text-xl">Team <span className="text-yellow-brand">Sudda</span></span>
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            Sri Lanka's trusted cleaning team — making homes and businesses sparkle since 2017 with eco-friendly products and a friendly smile.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-yellow-brand hover:text-navy transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-white text-base">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {["Home","About","Services","Team","Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-yellow-brand transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white text-base">Useful Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {["Privacy Policy","Terms & Conditions","FAQs","Careers","Blog"].map(l => (
              <li key={l}><a href="#" className="hover:text-yellow-brand transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white text-base">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3"><Phone className="h-4 w-4 text-yellow-brand mt-0.5" /> +94 77 000 0000</li>
            <li className="flex items-start gap-3"><MessageCircle className="h-4 w-4 text-yellow-brand mt-0.5" /> WhatsApp: +94 77 000 0000</li>
            <li className="flex items-start gap-3"><Mail className="h-4 w-4 text-yellow-brand mt-0.5" /> hello@teamsudda.lk</li>
            <li className="flex items-start gap-3"><MapPin className="h-4 w-4 text-yellow-brand mt-0.5" /> 12 Galle Road, Colombo 03, Sri Lanka</li>
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
