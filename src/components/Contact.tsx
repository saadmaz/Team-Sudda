import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Send } from "lucide-react";
import { CONTACT } from "@/lib/constants/contact";
import { SERVICE_NAMES } from "@/lib/constants/services";
import { sendEmail, isEmailJSConfigured } from "@/lib/emailjs";

export const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const templateParams = {
      from_name: data.get("name") as string,
      from_email: data.get("email") as string,
      phone: data.get("phone") as string,
      service,
      date: data.get("date") as string,
      message: data.get("message") as string,
    };

    if (!isEmailJSConfigured()) {
      toast({ title: "Configuration error", description: "Email service is not configured. Please contact us via WhatsApp.", variant: "destructive" });
      setLoading(false);
      return;
    }

    try {
      await sendEmail(templateParams);
      toast({ title: "Booking request sent!", description: "Our team will confirm your booking within 1 hour." });
      form.reset();
      setService("");
    } catch {
      toast({ title: "Something went wrong", description: "Please try WhatsApp or call us directly.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section bg-muted/40">
      <div className="container-x grid lg:grid-cols-2 gap-10 items-stretch">
        <div className="bg-background rounded-3xl p-6 md:p-10 shadow-card-soft">
          <span className="eyebrow">Book a Clean</span>
          <h2 className="heading-md font-display text-navy mt-3">Tell us about your space</h2>
          <p className="mt-2 text-muted-foreground">Fill in the form and we'll confirm your booking within an hour.</p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" required placeholder="Your name" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" className="mt-1.5" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" required placeholder={CONTACT.phoneFormatted} pattern="[\d\s\+\-\(\)]{7,15}" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="service">Service Type</Label>
                <Select name="service" value={service} onValueChange={setService}>
                  <SelectTrigger id="service" className="mt-1.5"><SelectValue placeholder="Select a service" /></SelectTrigger>
                  <SelectContent>
                    {SERVICE_NAMES.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="date">Preferred Date</Label>
              <Input id="date" name="date" type="date" required min={new Date().toISOString().split("T")[0]} className="mt-1.5" />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Tell us a bit about your space..." rows={4} className="mt-1.5" />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button type="submit" variant="hero" size="lg" disabled={loading}>
                <Send className="h-4 w-4" /> {loading ? "Sending..." : "Send Booking"}
              </Button>
              <Button asChild variant="whatsapp" size="lg" type="button">
                <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </Button>
            </div>
          </form>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-card-soft min-h-[400px] bg-navy">
          <iframe
            title="Team Sudda location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126740.41897767928!2d79.78165149726562!3d6.92139640000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000"
            className="w-full h-full min-h-[400px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};
