import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <article className="group rounded-md border border-navy/10 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-amber/15 text-amber transition group-hover:bg-amber group-hover:text-navy">
        <Icon aria-hidden="true" size={24} />
      </div>
      <h3 className="mt-5 font-display text-xl font-extrabold text-navy">{title}</h3>
      <p className="mt-3 leading-7 text-charcoal/80">{description}</p>
    </article>
  );
}
