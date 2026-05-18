import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-black uppercase tracking-wide">WJ Contracting</p>
          <p className="mt-4 max-w-md text-white/75">
            High quality building and cleaning services for domestic and commercial customers across Oxfordshire and surrounding areas.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold">Pages</h2>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="focus-ring rounded text-white/75 hover:text-gold" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <address className="not-italic">
          <h2 className="font-display text-lg font-bold">Contact</h2>
          <div className="mt-4 space-y-3 text-white/75">
            <a className="focus-ring flex items-center gap-3 rounded hover:text-gold" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
              <Phone aria-hidden="true" size={18} />
              {contact.phone}
            </a>
            <a className="focus-ring flex items-center gap-3 rounded hover:text-gold" href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" size={18} />
              {contact.email}
            </a>
            <p className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 shrink-0" size={18} />
              <span>{contact.addressLines.join(", ")}</span>
            </p>
          </div>
        </address>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-shell flex flex-col gap-2 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} WJ Contracting. All rights reserved.</p>
          <p>Modernised contractor website demo.</p>
        </div>
      </div>
    </footer>
  );
}
