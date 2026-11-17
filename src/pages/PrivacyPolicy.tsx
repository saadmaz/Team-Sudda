import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CONTACT } from "@/lib/constants/contact";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-navy py-16">
        <div className="container-x">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-yellow-brand transition-colors text-sm mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <h1 className="heading-lg font-display text-white">Privacy Policy</h1>
          <p className="mt-2 text-white/60 text-sm">Last updated: January 2025</p>
        </div>
      </div>

      <div className="container-x py-14 max-w-3xl">
        <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="heading-md font-display text-navy mb-3">1. Information We Collect</h2>
            <p>
              When you submit a booking request or contact us through our website, we collect the
              following personal information:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Preferred service type and date</li>
              <li>Any additional details you provide in the message field</li>
            </ul>
          </section>

          <section>
            <h2 className="heading-md font-display text-navy mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use your personal information solely to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Process and confirm your cleaning booking</li>
              <li>Contact you to discuss your service requirements</li>
              <li>Send booking confirmations and service updates</li>
              <li>Respond to your enquiries and provide customer support</li>
            </ul>
            <p className="mt-3">
              We do not use your information for unsolicited marketing without your consent.
            </p>
          </section>

          <section>
            <h2 className="heading-md font-display text-navy mb-3">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. Your
              information may only be shared with members of our cleaning team who need it to carry
              out your service booking.
            </p>
          </section>

          <section>
            <h2 className="heading-md font-display text-navy mb-3">4. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services
              and comply with any legal obligations. You may request deletion of your data at any
              time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="heading-md font-display text-navy mb-3">5. Security</h2>
            <p>
              We take reasonable precautions to protect your personal information from unauthorised
              access, use, or disclosure. However, no method of data transmission over the internet
              is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="heading-md font-display text-navy mb-3">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for us to contact you</li>
            </ul>
          </section>

          <section>
            <h2 className="heading-md font-display text-navy mb-3">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please
              contact us:
            </p>
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
            className="inline-flex items-center gap-2 text-navy hover:text-yellow-brand transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
