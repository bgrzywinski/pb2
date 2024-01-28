import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
        circe: ["Circe", "system-ui", "sans-serif"],
      },
      borderRadius: {
        rounded50: "50px",
      },
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",
      },
      fontSize: {
        "12": "12px",
        "13": "13px",
        "10": "10px",
        "20": "20px",
        "14": "14px",
        "15": "15px",
      },
      gradientColorStops: {
        "black-to-transparent": "rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%",
      },
      animation: {
        smoothBounce: "smoothBounce 1.2s infinite",
      },
      backgroundColor: {
        "modal-overlay": "rgba(0, 0, 0, 0.7)",
      },
      zIndex: {
        overlay: "1000",
        popup: "1100",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("postcss-nested")],
};
export default config;
