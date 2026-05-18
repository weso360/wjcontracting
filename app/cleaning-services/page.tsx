import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { cleaningServices, guidePrices, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Cleaning Services",
  description: "Professional domestic and commercial cleaning services across Oxfordshire."
};

export default function CleaningServicesPage() {
  return (
    <main>
      <Hero
        compact
        eyebrow="Cleaning services"
        title="Professional commercial and domestic cleaning services"
        subtitle="Tailor made cleaning plans for homes, businesses, end of tenancy properties and building projects across Oxfordshire."
        image="/images/cleaning-services.svg"
      />
      <section className="bg-stone py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <p className="eyebrow">Tailored cleaning</p>
            <h2 className="mt-3 font-display text-3xl font-black text-navy sm:text-4xl">Regular, deep and project-ready cleaning</h2>
            <div className="mt-6 space-y-4 leading-8 text-charcoal/80">
              <p>
                Each clean is tailor made to meet your specific requirements, from routine bathrooms, kitchens, dusting, hoovering and mopping to focused
                attention on doors, skirting boards and detailed areas.
              </p>
              <p>
                Weekly and monthly cleaning slots are available, with the same cleaner where possible for a personal touch. All products are supplied by
                WJ Contracting and operatives are insured for domestic and commercial cleaning work.
              </p>
              <p className="font-bold text-navy">Prices start from £10 per hour.</p>
            </div>
          </div>
          <aside className="rounded-md border border-navy/10 bg-white p-6 shadow-soft">
            <h3 className="font-display text-2xl font-black text-navy">Domestic guide prices</h3>
            <p className="mt-3 text-sm leading-6 text-charcoal/70">Estimates only. Final quotes are provided after a visit from the cleaning team.</p>
            <dl className="mt-6 divide-y divide-navy/10">
              {guidePrices.map(([home, price]) => (
                <div key={home} className="flex items-center justify-between gap-4 py-3">
                  <dt className="font-semibold text-charcoal">{home}</dt>
                  <dd className="font-display font-extrabold text-navy">{price}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cleaningServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-stone py-20">
        <div className="section-shell">
          <TestimonialCard {...testimonials[8]} featured />
        </div>
      </section>
      <CTASection title="Need a cleaner, deep clean or builders clean?" text="Tell us about the property and we will shape a practical plan around the job." />
    </main>
  );
}
