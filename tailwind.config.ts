import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "linear-gradient-progress-bar":
          "linear-gradient(90deg, #07DECA 0%, #04786D 100%)",
      },
      boxShadow: {
        "card-campaign": "0px 2px 7px 0px rgba(77, 77, 77, 0.13)",
        "card-profile": "0px 2px 150px 0px rgba(100, 100, 100, 0.13)",
      },
      colors: {
        "black-primary": "#3E3E3E",
        "black-secondary": "#181A20",
        gray: "#E3E5E5",
        muted: "rgba(62, 62, 62, 0.6)",
        placeholder: "#CACACA",
        primary: "#04786D",
        secondary: "#209FA6",
        input: "#F5F5F5",
        success: "rgba(32, 159, 166, 0.2)",
        warning: "rgba(255, 189, 78, 0.20)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
