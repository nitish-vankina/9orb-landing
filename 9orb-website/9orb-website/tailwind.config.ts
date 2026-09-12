import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#08090B",
          900: "#0C0D10",
          850: "#101215",
          800: "#15171B",
          700: "#1D2025",
          600: "#2A2E35",
          500: "#3E434C",
        },
        ink: {
          50: "#F7F8F9",
          100: "#ECEDEF",
          200: "#C9CCD1",
          300: "#9BA0A9",
          400: "#767C87",
          500: "#5B6068",
        },
        accent: {
          DEFAULT: "#4C7BFF",
          dim: "#3A5FCC",
          bright: "#7AA0FF",
          soft: "#1A2440",
        },
        signal: {
          good: "#3DD68C",
          warn: "#E8A33D",
          bad: "#E5484D",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        "dash": {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
        "drift": {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(6px,-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        "dash": "dash 6s linear infinite",
        "drift": "drift 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
