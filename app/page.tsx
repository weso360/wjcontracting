import { CheckCircle2, Hammer, Sparkles, Images } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials, trustPoints } from "@/data/site";

const previewServices = [
  {
    title: "Building Services",
    description: "Renovations, extensions, new builds, roofing, groundwork, kitchens, bathrooms and decorating.",
    icon: Hammer,
    href: "/building-services"
  },
  {
    title: "Cleaning Services",
    description: "Domestic, commercial, end of tenancy, builders cleans and tailored weekly or monthly plans.",
    icon: Sparkles,
    href: "/cleaning-services"
  },
  {
    title: "Previous Projects",
    description: "Browse examples across renovations, new builds and maintenance projects completed to a high standard.",
    icon: Images,
    href: "/previous-projects"
  }
];

export default function HomePage() {
  return (
    <main>
      <Hero
        title="Highly skilled contractors"
        subtitle="Providing high quality building and cleaning services to domestic and commercial customers across Oxfordshire."
        image="/images/hero-contractor.svg"
      />

      <section className="bg-stone py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Welcome</p>
            <h2 className="mt-3 font-display text-3xl font-black text-navy sm:text-5xl">Welcome to WJ Contracting</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-charcoal/80">
            <p>
              WJ Contracting are a team of friendly, professional and highly experienced contractors providing the highest quality building and cleaning
              services to domestic and commercial customers around Oxfordshire and surrounding areas.
            </p>
            <p>
              We pride ourselves on completing projects to your timeframe and to only the highest standards, with fantastic customer care from initial
              quotation through to project completion and aftercare.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 font-display text-3xl font-black text-navy sm:text-4xl">Services shaped around homes, sites and businesses</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {previewServices.map((service) => (
              <article key={service.title} className="rounded-md border border-navy/10 bg-stone p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-amber/15 text-amber">
                  <service.icon aria-hidden="true" size={24} />
                </div>
                <h3 className="mt-5 font-display text-xl font-extrabold text-navy">{service.title}</h3>
                <p className="mt-3 leading-7 text-charcoal/80">{service.description}</p>
                <div className="mt-5">
                  <ButtonLink href={service.href} variant="dark">
                    Find out more
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">Why choose us</p>
              <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">A reliable team for the whole job</h2>
              <p className="mt-5 leading-7 text-white/75">
                From first call to finishing touches, WJ Contracting keeps the work clear, practical and professionally managed.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {trustPoints.map(({ title, icon: Icon }) => (
                <div key={title} className="rounded-md border border-white/10 bg-white/10 p-5">
                  <Icon aria-hidden="true" className="text-gold" size={26} />
                  <p className="mt-4 font-display text-lg font-extrabold">{title}</p>
                </div>
              ))}
              <div className="rounded-md border border-gold/30 bg-gold p-5 text-navy">
                <CheckCircle2 aria-hidden="true" size={26} />
                <p className="mt-4 font-display text-lg font-extrabold">Free no obligation quote</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="eyebrow">Customer comment</p>
            <h2 className="mt-3 font-display text-3xl font-black text-navy sm:text-4xl">Trusted for workmanship and service</h2>
          </div>
          <TestimonialCard {...testimonials[3]} featured />
        </div>
      </section>

      <CTASection />
    </main>
  );
}
