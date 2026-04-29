import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Instagram, Send } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { SearchBar } from "./SearchBar";
import { SiteFooter } from "./SiteFooter";
import type { Product } from "@/data/productsIndia";
import { CATEGORIES, type Category } from "@/data/categories";
import logo from "@/assets/logo.png";

type Props = {
  region: "india" | "usa";
  products: Product[];
};

export function StorefrontPage({ region, products }: Props) {
  const [q, setQ] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const flag = region === "india" ? "🇮🇳" : "🇺🇸";
  const label = region === "india" ? "India" : "United States";

  // Remember the region so future visits skip the picker
  useEffect(() => {
    try {
      localStorage.setItem("vv-region", region);
    } catch {
      /* ignore */
    }
  }, [region]);

  // Only show category chips that actually have products in this region
  const availableCategories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return CATEGORIES.filter((c: Category) => set.has(c));
  }, [products]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesTerm = !term || p.name.toLowerCase().includes(term);
      return matchesCategory && matchesTerm;
    });
  }, [q, products, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6">
          {/* Utility row */}
          <div className="flex items-center justify-between py-4 text-xs">
            <span className="uppercase tracking-[0.22em] text-background/60">
              ValueVantage
            </span>
            <Link
              to="/"
              onClick={() => {
                try {
                  localStorage.removeItem("vv-region");
                } catch {
                  /* ignore */
                }
              }}
              className="group flex items-center gap-2 rounded-full border border-background/15 px-3.5 py-1.5 text-background/80 transition hover:border-background/40 hover:text-background"
            >
              <span className="text-sm leading-none">{flag}</span>
              <span className="hidden sm:inline">{label}</span>
              <span className="mx-1 h-3 w-px bg-background/20" />
              <Globe className="h-3.5 w-3.5" />
              <span>Change</span>
            </Link>
          </div>

          {/* Big logo + tagline */}
          <div className="flex flex-col items-center pt-6 pb-12 text-center">
            <img
              src={logo}
              alt="ValueVantage"
              width={520}
              height={200}
              className="h-32 md:h-44 lg:h-52 w-auto object-contain"
            />
            <p className="mt-2 font-display italic text-lg md:text-xl text-background/70 tracking-wide">
              Your shortcut to the best buys!
            </p>
          </div>
        </div>
      </header>

      {/* Social card */}
      <section className="mx-auto max-w-6xl px-6 -mt-8 relative z-10">
        <div className="rounded-3xl border border-border bg-surface px-6 py-6 md:px-10 md:py-7 shadow-soft">
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between md:gap-8">
            <div className="text-center md:text-left">
              <p className="text-[10px] uppercase tracking-[0.28em] text-primary">
                Stay connected
              </p>
              <h2 className="mt-1.5 font-display text-2xl md:text-3xl text-foreground leading-tight">
                Join us for the latest deals & instant updates
              </h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row shrink-0">
              <a
                href="https://www.instagram.com/value_vantage?igsh=MXZ0MzZveTBwZTBmdw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background transition hover:opacity-90"
              >
                <Instagram className="h-4 w-4" />
                Follow on Instagram
              </a>
              <a
                href="https://t.me/valuevantage05"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground transition hover:opacity-90"
              >
                <Send className="h-4 w-4" />
                Join Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-primary">
          Curated · {label}
        </p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl text-foreground leading-[1.05]">
          Quietly great <span className="italic text-primary/90">finds.</span>
        </h1>
        <div className="mt-8">
          <SearchBar value={q} onChange={setQ} />
        </div>

        {/* Category chips */}
        {availableCategories.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <CategoryChip
              label="All"
              active={activeCategory === "All"}
              onClick={() => setActiveCategory("All")}
            />
            {availableCategories.map((c: Category) => (
              <CategoryChip
                key={c}
                label={c}
                active={activeCategory === c}
                onClick={() => setActiveCategory(c)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Products */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-2xl text-foreground">
            {q ? `Results · ${filtered.length}` : "This week's picks"}
          </h2>
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {filtered.length} items
          </span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-border bg-surface px-8 py-16 text-center">
            <p className="text-base text-foreground">No matches for &quot;{q}&quot;</p>
            <button
              onClick={() => setQ("")}
              className="mt-3 text-sm text-primary underline-offset-4 hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}

function CategoryChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.18em] transition " +
        (active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-surface text-foreground/70 hover:border-primary/40 hover:text-foreground")
      }
    >
      {label}
    </button>
  );
}
