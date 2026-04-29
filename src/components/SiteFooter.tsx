export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-secondary px-8 py-10 md:px-12">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Disclosure
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/80">
            Some links on ValueVantage are affiliate links. If you buy through them,
            we may earn a small commission at no extra cost to you. We don't operate
            the third-party stores; pricing, availability, and policies are set by
            the seller and may change without notice.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ValueVantage — Your shortcut to the best buys.</p>
          <p>Made with care.</p>
        </div>
      </div>
    </footer>
  );
}
