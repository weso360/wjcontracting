import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { contactCards } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact WJ Contracting for a free no obligation quotation."
};

export default function ContactUsPage() {
  return (
    <main>
      <Hero
        compact
        eyebrow="Contact us"
        title="Get in touch today for a free no obligation quote"
        subtitle="If you would like to arrange a quotation or find out more about how we can help with your building or cleaning project, please contact us."
        image="/images/contact-us.svg"
      />
      <section className="bg-stone py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Talk to the team</p>
            <h2 className="mt-3 font-display text-3xl font-black text-navy sm:text-4xl">Free, practical advice before the work begins</h2>
            <p className="mt-5 leading-8 text-charcoal/80">
              Send a few details about the job and WJ Contracting will come back to you about the next step. The form is ready for client demo and can be
              connected to an email or CRM workflow later.
            </p>
            <div className="mt-8 grid gap-4">
              {contactCards.map(({ title, value, icon: Icon, href }) => {
                const content = (
                  <>
                    <Icon aria-hidden="true" className="text-amber" size={24} />
                    <span>
                      <span className="block font-display font-extrabold text-navy">{title}</span>
                      <span className="mt-1 block text-sm leading-6 text-charcoal/75">{value}</span>
                    </span>
                  </>
                );

                return href ? (
                  <a key={title} className="focus-ring flex gap-4 rounded-md border border-navy/10 bg-white p-5 shadow-soft transition hover:-translate-y-1" href={href}>
                    {content}
                  </a>
                ) : (
                  <div key={title} className="flex gap-4 rounded-md border border-navy/10 bg-white p-5 shadow-soft">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
