// src/pages/Contact.tsx
import { LinkedinIcon } from "lucide-react";
import { useState } from "react";
import ContactForm from "../components/ContactForm";
import ContactLink from "../components/ContactLink";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import SuccessMessage from "../components/SuccessMessage";
import { useContactSubmit } from "../hooks/useContactSubmit";

type ContactInfo = {
  phone: string;
  name: string;
  email: string;
};

const BBS_CONTACT: ContactInfo = {
  phone: "314-304-8880",
  name: "Stephen W. Becker",
  email: "swb@beckerbusinessstrategies.com",
};

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const {
    // submit: submitContact,
    status: contactStatus,
    error: contactError,
    reset: resetContact,
  } = useContactSubmit();

  if (contactStatus === "success") {
    setMessageSent(true);
  }

  // const handleContactSubmit = async (
  //   data: ContactFormValues,
  // ): Promise<void> => {
  //   await submitContact(data);
  // };

  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Let's Connect"
        description="Have a question about your business strategy? Ready to get started? Reach out and let's discuss how we can help."
        alignment="center"
      />

      {/* Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-16">
            <SectionHeader
              title="Get in Touch"
              description="Send us a message and let me know what I can do for your organization."
              alignment="center"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: contact info */}
            {!messageSent && (
              <div className="flex flex-col gap-8">
                <div className="space-y-6 bg-linear-to-br from-slate-50 to-slate-100 rounded-xl p-8 border border-slate-200">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2  pl-4">
                      Contact Information
                    </h3>

                    <div className="space-y-4 mt-6">
                      <ContactLink
                        href={`tel:${BBS_CONTACT.phone}`}
                        icon={
                          <span className="material-icons text-brand">
                            phone
                          </span>
                        }
                        text={BBS_CONTACT.phone}
                      />
                      <ContactLink
                        href={`mailto:${BBS_CONTACT.email}`}
                        icon={
                          <span className="material-icons text-brand">
                            email
                          </span>
                        }
                        text={BBS_CONTACT.email}
                      />
                      <ContactLink
                        href="https://linkedin.com/in/stephenwbecker/"
                        icon={
                          <LinkedinIcon className="text-brand group-hover:scale-90 transition-transform" />
                        }
                        text="LinkedIn Profile"
                        target="_blank"
                        rel="noreferrer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Right: form or thank you */}
            <div>
              {!messageSent ? (
                <>
                  {contactError && (
                    <div className="mb-4 rounded-lg border border-red-500/30 bg-red-50/10 px-4 py-3 text-sm text-red-200">
                      {contactError}
                    </div>
                  )}
                  <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-lg">
                    <ContactForm />
                  </div>
                </>
              ) : (
                <SuccessMessage
                  title="Message Received!"
                  description="Thank you for reaching out. We'll be in touch shortly."
                  onReset={() => {
                    setMessageSent(false);
                    resetContact();
                  }}
                  variant="gradient"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
