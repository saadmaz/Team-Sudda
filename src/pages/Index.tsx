import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { WhyUs } from "@/components/WhyUs";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Testimonials } from "@/components/Testimonials";
import { Clients } from "@/components/Clients";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { useSEO } from "@/hooks/useSEO";
import { CONTACT } from "@/lib/constants/contact";

const Index = () => {
  useSEO({
    title: "Team Sudda - Professional Cleaning Services in Sri Lanka",
    description:
      "Team Sudda provides home, office and deep cleaning across Colombo and Greater Colombo. Trained, supervised teams and a clear quotation before every job.",
    keywords:
      "cleaning service Sri Lanka, office cleaning Colombo, house cleaning Colombo, deep cleaning Sri Lanka, sanitization Colombo",
    ogDescription:
      "Trained, supervised cleaning teams for homes, offices and commercial spaces in Colombo.",
    canonical: "",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Team Sudda",
      image: typeof window !== "undefined" ? window.location.origin + "/favicon.ico" : "",
      description: "Home, office and commercial cleaning in Colombo and Greater Colombo.",
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT.address.street,
        addressLocality: CONTACT.address.city,
        addressCountry: CONTACT.address.countryCode,
      },
      telephone: CONTACT.phone,
      email: CONTACT.email,
      areaServed: "Colombo and Greater Colombo, Sri Lanka",
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <WhyUs />
        <Clients />
        <GalleryPreview />
        <Testimonials />
        <FAQ />
        <Contact />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
