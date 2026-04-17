import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Team Sudda — Professional Cleaning Services in Sri Lanka";

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", "Team Sudda — Sri Lanka's trusted cleaning service. Professional home, office, deep & sanitization cleaning in Colombo and beyond. Eco-friendly, trained staff. Call for a free quote.");
    setMeta("keywords", "cleaning service Sri Lanka, office cleaning Colombo, house cleaning Colombo, deep cleaning Sri Lanka, sanitization Colombo");
    setMeta("og:title", "Team Sudda — Professional Cleaning Services in Sri Lanka", "property");
    setMeta("og:description", "Trained, eco-friendly cleaners for homes, offices and commercial spaces across Sri Lanka.", "property");
    setMeta("og:type", "website", "property");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;

    const ldId = "team-sudda-jsonld";
    document.getElementById(ldId)?.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = ldId;
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Team Sudda",
      image: window.location.origin + "/favicon.ico",
      description: "Professional cleaning services across Sri Lanka.",
      address: { "@type": "PostalAddress", streetAddress: "12 Galle Road", addressLocality: "Colombo", addressCountry: "LK" },
      telephone: "+94770000000",
      areaServed: "Sri Lanka",
    });
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Team />
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
