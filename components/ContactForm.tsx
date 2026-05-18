export function ContactForm() {
  return (
    <form className="rounded-md border border-navy/10 bg-white p-6 shadow-soft" aria-label="Request a quote">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-navy">Name</span>
          <input className="mt-2 min-h-12 w-full rounded-md border border-navy/15 px-4 focus:border-amber" name="name" type="text" autoComplete="name" required />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-navy">Email</span>
          <input className="mt-2 min-h-12 w-full rounded-md border border-navy/15 px-4 focus:border-amber" name="email" type="email" autoComplete="email" required />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-navy">Phone</span>
          <input className="mt-2 min-h-12 w-full rounded-md border border-navy/15 px-4 focus:border-amber" name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-navy">Service type</span>
          <select className="mt-2 min-h-12 w-full rounded-md border border-navy/15 px-4 focus:border-amber" name="service">
            <option>Building services</option>
            <option>Cleaning services</option>
            <option>Previous project enquiry</option>
            <option>General enquiry</option>
          </select>
        </label>
      </div>
      <label className="mt-5 block">
        <span className="text-sm font-bold text-navy">Message</span>
        <textarea className="mt-2 min-h-40 w-full rounded-md border border-navy/15 px-4 py-3 focus:border-amber" name="message" required />
      </label>
      <button className="focus-ring mt-6 inline-flex min-h-12 rounded-md bg-amber px-6 py-3 text-sm font-bold text-navy transition hover:bg-gold" type="submit">
        Request a Quote
      </button>
    </form>
  );
}
