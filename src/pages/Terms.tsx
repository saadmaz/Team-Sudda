import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CONTACT } from "@/lib/constants/contact";
import { usePageMeta } from "@/hooks/usePageMeta";

const Terms = () => {
  usePageMeta({
    title: "Terms & Conditions",
    description: "The terms that apply to Team Sudda cleaning bookings and services.",
    path: "/terms",
  });

  return (
    <div className="bg-background">
      <div className="bg-navy pt-28 md:pt-36 pb-16">
        <div className="container-x">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-yellow-brand transition-colors text-sm mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <h1 className="heading-lg font-display text-white">Terms & Conditions</h1>
          <p className="mt-2 text-white/60 text-sm">Last updated: January 2025</p>
        </div>
      </div>

      <div className="container-x py-14 max-w-3xl">
        <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="heading-md font-display text-navy mb-3">1. Acceptance of Terms</h2>
            <p>
              By using Team Sudda's services or submitting a booking request through our website,
              you agree to be bound by these Terms and Conditions. If you do not agree to these
              terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="heading-md font-display text-navy mb-3">2. Services</h2>
            <p>
              Team Sudda provides professional residential and commercial cleaning services across
              Sri Lanka, centred on Colombo and Greater Colombo. The specific services provided will
              be as agreed upon at the time of booking confirmation.
            </p>
          </section>

          <section>
            <h2 className="heading-md font-display text-navy mb-3">3. Booking and Confirmation</h2>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                Bookings are confirmed only after you receive a direct confirmation from our team
                via phone, email, or WhatsApp.
              </li>
              <li>Submitting a booking form does not constitute a confirmed booking.</li>
              <li>
                We will endeavour to respond to booking requests promptly during business hours.
              </li>
              <li>We reserve the right to decline bookings at our discretion.</li>
            </ul>
          </section>

          <section>
            <h2 className="heading-md font-display text-navy mb-3">4. Pricing and Payment</h2>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>All pricing is provided as a quote before work begins - no hidden fees.</li>
              <li>
                Prices are based on property size, service type, and any specific requirements.
              </li>
              <li>Quotes are valid for 7 days from the date of issue.</li>
              <li>Payment terms will be confirmed at the time of booking.</li>
            </ul>
          </section>

          <section>
            <h2 className="heading-md font-display text-navy mb-3">
              5. Cancellations and Rescheduling
            </h2>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Please provide at least 24 hours notice if you need to cancel or reschedule.</li>
              <li>
                Cancellations made with less than 24 hours notice may be subject to a cancellation
                fee.
              </li>
              <li>
                We reserve the right to reschedule in cases of staff illness or circumstances beyond
                our control.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="heading-md font-display text-navy mb-3">6. Access to Property</h2>
            <p>
              You are responsible for ensuring our team has safe and adequate access to the property
              on the agreed date and time. If access cannot be obtained, a call-out fee may apply.
            </p>
          </section>

          <section>
            <h2 className="heading-md font-display text-navy mb-3">7. Liability</h2>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Our staff are trained in our cleaning process before working on site.</li>
              <li>
                We take care in handling your belongings but accept no liability for pre-existing
                damage or fragile items not disclosed at the time of booking.
              </li>
              <li>Any claims must be reported within 24 hours of the service being completed.</li>
            </ul>
          </section>

          <section>
            <h2 className="heading-md font-display text-navy mb-3">8. Satisfaction Guarantee</h2>
            <p>
              If you are not satisfied with any aspect of our service, please contact us within 24
              hours and we will return to re-clean the affected areas at no additional charge.
            </p>
          </section>

          <section>
            <h2 className="heading-md font-display text-navy mb-3">9. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms and Conditions at any time. The most
              current version will always be available on our website.
            </p>
          </section>

          <section>
            <h2 className="heading-md font-display text-navy mb-3">10. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <div className="mt-3 space-y-1">
              <p>
                <strong className="text-navy">Email:</strong> {CONTACT.email}
              </p>
              <p>
                <strong className="text-navy">Phone:</strong> {CONTACT.phoneFormatted}
              </p>
              <p>
                <strong className="text-navy">Address:</strong> {CONTACT.address.full}
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-navy hover:text-yellow-ink transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;
