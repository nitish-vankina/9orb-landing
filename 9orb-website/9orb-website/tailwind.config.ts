import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pure black/white/gray. No hue anywhere in the system —
        // status and emphasis are carried by weight, opacity, and
        // border, never by color.
        base: {
          950: "#0A0A0B",
          900: "#0E0E10",
          850: "#131315",
          800: "#19191C",
          700: "#232326",
          600: "#323236",
          500: "#48484D",
        },
        ink: {
          50: "#FAFAFA",
          100: "#EDEDEE",
          200: "#CBCBCE",
          300: "#9C9CA2",
          400: "#77777D",
          500: "#5A5A60",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
