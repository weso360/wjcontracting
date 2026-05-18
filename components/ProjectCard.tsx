import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { assetPath } from "@/lib/paths";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
};

export function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-md border border-navy/10 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] bg-charcoal">
        <Image src={assetPath(image)} alt={`${title} project placeholder`} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-black text-navy">{title}</h3>
        <p className="mt-3 leading-7 text-charcoal/75">{description}</p>
        <div className="mt-6">
          <ButtonLink href="/contact-us" variant="dark">
            View project examples
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
