import { Quote } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  project: string;
  author: string;
  featured?: boolean;
};

export function TestimonialCard({ quote, project, author, featured = false }: TestimonialCardProps) {
  return (
    <figure className={`rounded-md border p-6 shadow-soft ${featured ? "border-amber/40 bg-navy text-white" : "border-navy/10 bg-white text-ink"}`}>
      <Quote aria-hidden="true" className={featured ? "text-gold" : "text-amber"} size={30} />
      <blockquote className="mt-5 leading-8">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="mt-6 border-t border-current/15 pt-5">
        <p className="font-display font-extrabold">{project}</p>
        <p className={`mt-1 text-sm ${featured ? "text-white/70" : "text-charcoal/65"}`}>{author}</p>
      </figcaption>
    </figure>
  );
}
