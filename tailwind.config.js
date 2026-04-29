/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "oklch(0.975 0.013 85)",
        foreground: "oklch(0.22 0.015 60)",
        surface: "oklch(0.99 0.008 85)",
        card: "oklch(0.985 0.01 85)",
        primary: {
          DEFAULT: "oklch(0.45 0.06 155)",
          foreground: "oklch(0.985 0.01 85)",
        },
        secondary: {
          DEFAULT: "oklch(0.94 0.012 85)",
          foreground: "oklch(0.25 0.015 60)",
        },
        muted: {
          DEFAULT: "oklch(0.93 0.01 85)",
          foreground: "oklch(0.5 0.012 60)",
        },
        accent: {
          DEFAULT: "oklch(0.55 0.07 155)",
          foreground: "oklch(0.985 0.01 85)",
        },
        destructive: {
          DEFAULT: "oklch(0.55 0.2 25)",
          foreground: "oklch(0.985 0.01 85)",
        },
        border: "oklch(0.9 0.012 85)",
        input: "oklch(0.9 0.012 85)",
        ring: "oklch(0.55 0.07 155)",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px oklch(0 0 0 / 0.04), 0 8px 24px oklch(0 0 0 / 0.04)",
        card: "0 1px 2px oklch(0 0 0 / 0.04)",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      letterSpacing: {
        widest: "0.22em",
      },
    },
  },
  plugins: [],
};
