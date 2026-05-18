import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Customer Comments",
  description: "Read customer comments and testimonials for WJ Contracting."
};

export default function CustomerCommentsPage() {
  return (
    <main>
      <Hero
        compact
        eyebrow="Customer comments"
        title="Read what our customers have to say"
        subtitle="Customers across Oxfordshire trust WJ Contracting for professional service, tidy work and high quality results."
        image="/images/customer-comments.svg"
      />
      <section className="bg-stone py-20">
        <div className="section-shell">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`${testimonial.project}-${testimonial.author}`} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Want the same standard on your project?" text="Book a free no obligation quote for building or cleaning work." />
    </main>
  );
}
