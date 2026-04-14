import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#0F1115",
        carbon: "#1A1D23",
        steel: "#B0B7C3",
        silver: "#E5E9F0",
        brand: "#00AEEF",
        "brand-deep": "#1E90FF",
        success: "#22C55E",
        warning: "#EAB308",
        info: "#06B6D4",
        alert: "#EF4444",
        canvas: "#0F1115",
        ink: "#E5E9F0",
        line: "rgba(229,233,240,0.08)",
      },
      boxShadow: {
        soft: "0 18px 48px rgba(0, 0, 0, 0.28)",
        panel: "0 24px 70px rgba(0, 0, 0, 0.34)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(229,233,240,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(229,233,240,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
