import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fire-zircon": "#DCE0E5",
        "fire-orange": "#EA7938",
        "fire-red": "#E13D2F",
        "fire-yellow": "#F2BE47",
        "fire-charcoal": "#23272B",
        "fire-gray-light": "#B6B7B8",
        "fire-gray-medium": "#7E7F80",
        "fire-gray-dark": "#4F5359",
        "fire-green": "#2AEB49",
      },
    },
  },
  plugins: [],
};
export default config;
