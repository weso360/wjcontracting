import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { projects, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Previous Projects",
  description: "Previous renovation, new build and maintenance project categories from WJ Contracting."
};

export default function PreviousProjectsPage() {
  return (
    <main>
      <Hero
        compact
        eyebrow="Previous projects"
        title="Browse our project examples"
        subtitle="Examples of building contracting services completed to a high standard, meeting and exceeding customer requirements."
        image="/images/previous-projects.svg"
      />
      <section className="bg-stone py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Project categories</p>
            <h2 className="mt-3 font-display text-3xl font-black text-navy sm:text-4xl">Renovations, new builds and maintenance</h2>
            <p className="mt-5 leading-8 text-charcoal/80">
              These placeholder cards are ready for real project photography while keeping the original project category structure intact.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="section-shell">
          <TestimonialCard {...testimonials[7]} featured />
        </div>
      </section>
      <CTASection />
    </main>
  );
}
