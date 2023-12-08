import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-desktop":
          "url('/starter-code/assets/home/background-home-desktop.jpg')",
        "home-tablet":
          "url('/starter-code/assets/home/background-home-tablet.jpg')",
        "home-mobile":
          "url('/starter-code/assets/home/background-home-mobile.jpg')",
        "dest-desktop":
          "url('/starter-code/assets/destination/background-destination-desktop.jpg')",
        "dest-tablet":
          "url('/starter-code/assets/destination/background-destination-tablet.jpg')",
        "dest-mobile":
          "url('/starter-code/assets/destination/background-destination-mobile.jpg')",
        "crew-desktop":
          "url('/starter-code/assets/crew/background-crew-desktop.jpg')",
        "crew-tablet":
          "url('/starter-code/assets/crew/background-crew-tablet.jpg')",
        "crew-mobile":
          "url('/starter-code/assets/crew/background-crew-mobile.jpg')",
      },
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6F9",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
