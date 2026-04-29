import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/productsIndia";

export function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group block"
    >
      <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30">
        {/* Corner CTA button */}
        <div className="absolute right-5 top-5 z-10">
          <span
            aria-hidden
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
          >
            <ArrowUpRight className="h-5 w-5" strokeWidth={2.25} />
          </span>
        </div>

        {/* Text — fixed min-height so all cards align */}
        <header className="px-6 pt-6 pb-3 flex flex-col min-h-[180px]">
          <h3 className="font-display text-2xl tracking-tight text-foreground pr-16 leading-tight line-clamp-2">
            {product.name}
          </h3>
          <div className="mt-auto pt-3">
            {product.price && (
              <>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Discount Price
                </p>
                <p className="font-display text-3xl text-foreground mt-1">
                  {product.price}
                </p>
              </>
            )}
          </div>
        </header>

        {/* Image — white backgrounds blend into the card via mix-blend-multiply */}
        <div className="mt-auto px-4 pb-4">
          <div className="overflow-hidden rounded-2xl bg-card aspect-[4/3] flex items-center justify-center p-4">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              width={768}
              height={576}
              className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </article>
    </a>
  );
}
