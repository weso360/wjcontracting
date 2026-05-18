import Link from "next/link";
import { Facebook, Instagram, Mail, Menu, Phone, Twitter } from "lucide-react";
import { contact, navItems } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy text-white shadow-lg shadow-navy/10">
      <div className="bg-charcoal">
        <div className="section-shell flex flex-col gap-3 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-white/85">
            <a className="focus-ring inline-flex items-center gap-2 hover:text-gold" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
              <Phone aria-hidden="true" size={16} />
              {contact.phone}
            </a>
            <a className="focus-ring inline-flex items-center gap-2 hover:text-gold" href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" size={16} />
              {contact.email}
            </a>
          </div>
          <div className="flex items-center gap-3" aria-label="Social links">
            <span className="text-white/65">Connect with us</span>
            <a className="focus-ring rounded p-1 text-white/80 hover:text-gold" href="#" aria-label="WJ Contracting on Facebook">
              <Facebook aria-hidden="true" size={17} />
            </a>
            <a className="focus-ring rounded p-1 text-white/80 hover:text-gold" href="#" aria-label="WJ Contracting on Twitter">
              <Twitter aria-hidden="true" size={17} />
            </a>
            <a className="focus-ring rounded p-1 text-white/80 hover:text-gold" href="#" aria-label="WJ Contracting on Instagram">
              <Instagram aria-hidden="true" size={17} />
            </a>
          </div>
        </div>
      </div>
      <nav className="section-shell flex min-h-20 items-center justify-between gap-6 py-4" aria-label="Main navigation">
        <Link href="/" className="focus-ring rounded-sm">
          <span className="block font-display text-2xl font-black uppercase tracking-wide">WJ Contracting</span>
          <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-gold">Highly skilled contractors</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact-us"
          className="focus-ring hidden min-h-11 items-center rounded-md bg-amber px-4 py-2 text-sm font-bold text-navy transition hover:bg-gold sm:inline-flex"
        >
          Get a Free Quote
        </Link>
        <details className="relative lg:hidden">
          <summary className="focus-ring flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-md border border-white/25 px-3 py-2 text-sm font-bold">
            <Menu aria-hidden="true" size={19} />
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-72 rounded-md border border-white/10 bg-navy p-2 shadow-lift">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded px-3 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
