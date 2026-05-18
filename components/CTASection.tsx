import { ButtonLink } from "@/components/ButtonLink";
import { contact } from "@/data/site";

type CTASectionProps = {
  title?: string;
  text?: string;
};

export function CTASection({
  title = "Ready to discuss your project?",
  text = "Tell us what you need and we will arrange a free, no obligation quote."
}: CTASectionProps) {
  return (
    <section className="bg-charcoal py-16 text-white">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">Free quote</p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">{title}</h2>
          <p className="mt-4 text-white/75">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact-us">Request a Quote</ButtonLink>
          <a
            className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-5 py-3 text-sm font-bold transition hover:bg-white hover:text-navy"
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
          >
            Call {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
