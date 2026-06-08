import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { WhyUs } from "@/components/WhyUs";
import { Clients } from "@/components/Clients";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Testimonials } from "@/components/Testimonials";
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
      "Team Sudda - Sri Lanka's trusted cleaning service. Professional home, office, deep & sanitization cleaning in Colombo and beyond. Eco-friendly, trained staff. Call for a free quote.",
    keywords:
      "cleaning service Sri Lanka, office cleaning Colombo, house cleaning Colombo, deep cleaning Sri Lanka, sanitization Colombo",
    ogDescription:
      "Trained, eco-friendly cleaners for homes, offices and commercial spaces across Sri Lanka.",
    canonical: "",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Team Sudda",
      image: typeof window !== "undefined" ? window.location.origin + "/favicon.ico" : "",
      description: "Professional cleaning services across Sri Lanka.",
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT.address.street,
        addressLocality: CONTACT.address.city,
        addressCountry: CONTACT.address.countryCode,
      },
      telephone: CONTACT.phone,
      email: CONTACT.email,
      areaServed: CONTACT.address.country,
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
