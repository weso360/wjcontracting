import { ButtonLink } from "@/components/ButtonLink";
import { assetPath } from "@/lib/paths";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image: string;
  compact?: boolean;
};

export function Hero({ eyebrow = "WJ Contracting", title, subtitle, image, compact = false }: HeroProps) {
  return (
    <section className={`relative overflow-hidden bg-navy text-white ${compact ? "py-20" : "py-24 lg:py-32"}`}>
      <div className="absolute inset-0 opacity-35" style={{ backgroundImage: `url(${assetPath(image)})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-charcoal/60" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone to-transparent" />
      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 font-display text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">{subtitle}</p>
          {!compact && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact-us">Get a Free Quote</ButtonLink>
              <ButtonLink href="/building-services" variant="secondary">
                View Services
              </ButtonLink>
            </div>
          )}
        </div>
        {!compact && (
          <div className="rounded-md border border-white/15 bg-white/10 p-5 shadow-lift backdrop-blur">
            <div className="grid grid-cols-2 gap-3 text-sm font-bold">
              {["Fully insured", "Oxfordshire based", "Domestic work", "Commercial projects"].map((item) => (
                <div key={item} className="rounded bg-white/12 p-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
