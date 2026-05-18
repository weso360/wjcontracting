import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { buildingServices, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Building Services",
  description: "Professional building and construction services from WJ Contracting across Oxfordshire."
};

export default function BuildingServicesPage() {
  return (
    <main>
      <Hero
        compact
        eyebrow="Building services"
        title="Providing high quality building and construction services"
        subtitle="A wide range of professional building and construction contracting services for both domestic and commercial customers."
        image="/images/building-services.svg"
      />
      <section className="bg-stone py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">All trades covered</p>
            <h2 className="mt-3 font-display text-3xl font-black text-navy sm:text-4xl">From groundwork to final finish</h2>
            <p className="mt-5 leading-8 text-charcoal/80">
              WJ Contracting can support projects from early planning through build, installation and decoration. Our team includes fully certified
              electricians and gas safe registered engineers, and all work is fully insured.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {buildingServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="section-shell">
          <TestimonialCard {...testimonials[0]} featured />
        </div>
      </section>
      <CTASection title="Planning building work in Oxfordshire?" text="Speak to WJ Contracting about renovations, extensions, repairs or a complete project." />
    </main>
  );
}
