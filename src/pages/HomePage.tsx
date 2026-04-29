import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

export function HomePage() {
  const navigate = useNavigate();

  // Auto-redirect returning visitors to their saved region
  useEffect(() => {
    try {
      const saved = localStorage.getItem("vv-region");
      if (saved === "india") {
        navigate("/in", { replace: true });
      } else if (saved === "usa") {
        navigate("/us", { replace: true });
      }
    } catch {
      /* ignore */
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-foreground text-background flex flex-col">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 text-xs">
        <span className="uppercase tracking-[0.22em] text-background/60">
          ValueVantage
        </span>
        <span className="uppercase tracking-[0.22em] text-background/60">
          Choose region
        </span>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 pt-4 pb-20">
        <img
          src={logo}
          alt="ValueVantage"
          width={640}
          height={240}
          className="h-40 md:h-56 lg:h-64 w-auto object-contain"
        />
        <p className="mt-2 font-display italic text-xl md:text-2xl text-background/70 tracking-wide text-center">
          Your shortcut to the best buys!
        </p>

        <div className="mt-16 w-full max-w-3xl">
          <p className="text-center text-[10px] uppercase tracking-[0.32em] text-background/50">
            Where do you shop from?
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <RegionCard to="/in" flag="🇮🇳" name="India" store="Amazon.in" />
            <RegionCard to="/us" flag="🇺🇸" name="United States" store="Amazon.com" />
          </div>
        </div>
      </main>
    </div>
  );
}

function RegionCard({
  to,
  flag,
  name,
  store,
}: {
  to: string;
  flag: string;
  name: string;
  store: string;
}) {
  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-3xl border border-background/15 bg-background/[0.03] p-8 text-left transition hover:bg-background/[0.06] hover:border-background/30"
    >
      <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
        <ArrowUpRight className="h-5 w-5" strokeWidth={2.25} />
      </span>
      <div className="text-5xl">{flag}</div>
      <h2 className="mt-5 font-display text-3xl text-background">{name}</h2>
      <p className="mt-1.5 text-sm text-background/60">{store}</p>
    </Link>
  );
}
