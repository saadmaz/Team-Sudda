import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useSEO } from "@/hooks/useSEO";
import { SERVICES } from "@/lib/constants/services";
import { CONTACT } from "@/lib/constants/contact";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

interface BookingData {
  service: string;
  address: string;
  propertySize: string;
  rooms: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
}

const EMPTY: BookingData = {
  service: "",
  address: "",
  propertySize: "",
  rooms: "",
  name: "",
  email: "",
  phone: "",
  date: "",
  message: "",
};

const STEPS = ["Choose Service", "Property Details", "Your Info", "Review & Book"];

const Book = () => {
  useSEO({
    title: "Book a Clean - Team Sudda",
    description: "Book your professional cleaning service in 4 easy steps. Team Sudda serves Colombo, Kandy, Gampaha, Galle and Negombo.",
  });

  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingData>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof BookingData, value: string) =>
    setData((d) => ({ ...d, [key]: value }));

  const canNext = () => {
    if (step === 1) return data.service !== "";
    if (step === 2) return data.address !== "" && data.date !== "";
    if (step === 3) return data.name !== "" && data.email !== "" && data.phone !== "";
    return true;
  };

  const handleSubmit = async () => {
    setLoading(true);

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast({ title: "Configuration error", description: "Email service not configured. Please contact us via WhatsApp.", variant: "destructive" });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone,
            service: data.service,
            date: data.date,
            message: `Address: ${data.address}\nProperty size: ${data.propertySize}\nRooms: ${data.rooms}\n\n${data.message}`,
          },
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        throw new Error();
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try WhatsApp or call us directly.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="text-center max-w-md px-4">
            <div className="mx-auto h-20 w-20 rounded-full bg-yellow-brand grid place-items-center mb-6">
              <Check className="h-10 w-10 text-navy" />
            </div>
            <h1 className="heading-md font-display text-navy">Booking Request Sent!</h1>
            <p className="mt-4 text-muted-foreground">
              Thanks {data.name}! Our team will confirm your {data.service} booking within 1 hour.
            </p>
            <p className="mt-2 text-muted-foreground text-sm">We'll reach you at <strong>{data.email}</strong> or <strong>{data.phone}</strong>.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero">
                <Link to="/">Back to Home</Link>
              </Button>
              <Button asChild variant="whatsapp">
                <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container-x max-w-2xl">
          {/* Header */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-navy transition-colors text-sm mb-4">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <span className="eyebrow">Book a Clean</span>
            <h1 className="heading-md font-display text-navy mt-2">Book Your Clean in 4 Steps</h1>
          </div>

          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-2">
              {STEPS.map((label, i) => (
                <div key={label} className="flex flex-col items-center gap-1 flex-1">
                  <div
                    className={`h-8 w-8 rounded-full grid place-items-center text-xs font-bold border-2 transition-colors ${
                      i + 1 < step
                        ? "bg-yellow-brand border-yellow-brand text-navy"
                        : i + 1 === step
                        ? "bg-navy border-navy text-white"
                        : "bg-background border-border text-muted-foreground"
                    }`}
                  >
                    {i + 1 < step ? <Check className="h-4 w-4" /> : i + 1}
                  </div>
                  <span className={`text-[10px] font-medium hidden sm:block ${i + 1 === step ? "text-navy" : "text-muted-foreground"}`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-1.5 bg-border rounded-full mt-1">
              <div
                className="h-full bg-yellow-brand rounded-full transition-all duration-500"
                style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
              />
            </div>
          </div>

          {/* Step content */}
          <div className="bg-background border border-border rounded-3xl p-6 md:p-8 shadow-card-soft">

            {/* Step 1 - Choose Service */}
            {step === 1 && (
              <div>
                <h2 className="font-display font-bold text-xl text-navy mb-6">What service do you need?</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SERVICES.map(({ icon: Icon, title }) => (
                    <button
                      key={title}
                      onClick={() => update("service", title)}
                      className={`flex flex-col items-center gap-3 rounded-2xl border-2 p-4 text-center transition-all ${
                        data.service === title
                          ? "border-yellow-brand bg-yellow-brand/10 text-navy"
                          : "border-border hover:border-yellow-brand text-muted-foreground hover:text-navy"
                      }`}
                    >
                      <Icon className="h-7 w-7 shrink-0" />
                      <span className="text-xs font-semibold leading-tight">{title}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 - Property Details */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="font-display font-bold text-xl text-navy mb-6">Tell us about the property</h2>
                <div>
                  <Label htmlFor="address">Property Address *</Label>
                  <Input id="address" value={data.address} onChange={(e) => update("address", e.target.value)} placeholder="12 Main Street, Colombo 03" className="mt-1.5" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="size">Approximate Size</Label>
                    <Input id="size" value={data.propertySize} onChange={(e) => update("propertySize", e.target.value)} placeholder="e.g. 1,200 sq ft" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="rooms">Number of Rooms</Label>
                    <Input id="rooms" value={data.rooms} onChange={(e) => update("rooms", e.target.value)} placeholder="e.g. 3 bedrooms, 2 bathrooms" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="date">Preferred Date *</Label>
                  <Input id="date" type="date" value={data.date} onChange={(e) => update("date", e.target.value)} className="mt-1.5" required />
                </div>
              </div>
            )}

            {/* Step 3 - Contact Info */}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="font-display font-bold text-xl text-navy mb-6">Your contact details</h2>
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className="mt-1.5" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" className="mt-1.5" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder={CONTACT.phoneFormatted} className="mt-1.5" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Anything else we should know?</Label>
                  <Textarea id="message" value={data.message} onChange={(e) => update("message", e.target.value)} placeholder="Special instructions, allergies, access notes..." rows={3} className="mt-1.5" />
                </div>
              </div>
            )}

            {/* Step 4 - Review */}
            {step === 4 && (
              <div>
                <h2 className="font-display font-bold text-xl text-navy mb-6">Review your booking</h2>
                <dl className="space-y-3 text-sm">
                  {[
                    { label: "Service", value: data.service },
                    { label: "Date", value: data.date },
                    { label: "Address", value: data.address },
                    { label: "Property", value: [data.propertySize, data.rooms].filter(Boolean).join(" · ") || "-" },
                    { label: "Name", value: data.name },
                    { label: "Email", value: data.email },
                    { label: "Phone", value: data.phone },
                    { label: "Notes", value: data.message || "-" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex gap-4 py-2 border-b border-border last:border-0">
                      <dt className="w-24 shrink-0 font-semibold text-navy">{label}</dt>
                      <dd className="text-muted-foreground break-all">{value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-sm text-muted-foreground bg-muted/50 rounded-xl p-4">
                  By submitting, you agree to our{" "}
                  <Link to="/terms" className="underline hover:text-navy">Terms & Conditions</Link>.
                  We'll confirm your booking within 1 hour.
                </p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-6 flex justify-between gap-3">
            {step > 1 ? (
              <Button variant="outline" size="lg" onClick={() => setStep((s) => s - 1)}>
                <ArrowLeft className="h-4 w-4 mr-2" /> Back
              </Button>
            ) : (
              <div />
            )}
            {step < 4 ? (
              <Button variant="hero" size="lg" disabled={!canNext()} onClick={() => setStep((s) => s + 1)}>
                Next <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button variant="hero" size="lg" disabled={loading} onClick={handleSubmit}>
                {loading ? "Sending..." : "Confirm Booking"}
              </Button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Book;
