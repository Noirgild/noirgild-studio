import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // White, black & gold theme (Noirgild Studio)
        paper: "#FFFFFF", // page background (white)
        ink: "#0B0B0F", // titles, text and buttons (black)
        muted: "#3A3732", // secondary text (dark warm grey)
        line: "#D4AF37", // borders (gold)
        lemon: "#E6C567",
        lime: "#B8962E", // check marks and small accents (gold, darker to stay visible on white)
        leaf: "#9A7B22",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,11,15,0.04), 0 8px 24px rgba(11,11,15,0.06)",
        float: "0 2px 4px rgba(11,11,15,0.05), 0 18px 48px rgba(11,11,15,0.12)",
        pill: "0 1px 2px rgba(11,11,15,0.08), 0 6px 16px rgba(11,11,15,0.10)",
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
    },
  },
  plugins: [],
};

export default config;
