import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2A52",
          dark: "#0B1A33",
          light: "#1B3F73",
        },
        gold: {
          DEFAULT: "#C99A3E",
          light: "#E4C475",
        },
        parchment: {
          DEFAULT: "#F6F1E7",
          dark: "#EDE4D0",
        },
        terracotta: "#B85C38",
        highland: "#2E5C4E",
        ink: "#0B1A33",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "route-line": "radial-gradient(circle, rgba(201,154,62,0.5) 1.5px, transparent 1.5px)",
      },
      keyframes: {
        "board-scroll": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "flight-path": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "plane-move": {
          "0%": { offsetDistance: "0%", opacity: "0" },
          "5%": { opacity: "1" },
          "95%": { opacity: "1" },
          "100%": { offsetDistance: "100%", opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "board-scroll": "board-scroll 28s linear infinite",
        "flight-path": "flight-path 3.5s ease-out forwards",
        "plane-move": "plane-move 3.5s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
        flicker: "flicker 1.4s steps(2, jump-none) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
