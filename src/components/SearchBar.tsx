import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative mx-auto max-w-xl">
      <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products"
        className="w-full rounded-full border border-border bg-surface px-12 py-3.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
      />
    </div>
  );
}
