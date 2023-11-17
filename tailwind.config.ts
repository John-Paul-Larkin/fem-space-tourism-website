import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
 
    screens: {
      tablet: "480px",
      desktop: "769px",
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      lilac: "hsl(231, 77%, 90%)",
      black: "hsl(230, 25%, 7%)",
    },
    backgroundImage: {
      "home-mobile": "url('/home/background-home-mobile.jpg')",
      "home-tablet": "url('/home/background-home-tablet.jpg')",
      "home-desktop": "url('/home/background-home-desktop.jpg')",
      "destination-mobile":
        "url('/destination/background-destination-mobile.jpg')",
      "destination-tablet":
        "url('/destination/background-destination-tablet.jpg')",
      "destination-desktop":
        "url('/destination/background-destination-desktop.jpg')",
      "crew-mobile": "url('/crew/background-crew-mobile.jpg')",
      "crew-tablet": "url('/crew/background-crew-tablet.jpg')",
      "crew-desktop": "url('/crew/background-crew-desktop.jpg')",
      "technology-mobile":
        "url('/technology/background-technology-mobile.jpg')",
      "technology-tablet":
        "url('/technology/background-technology-tablet.jpg')",
      "technology-desktop":
        "url('/technology/background-technology-desktop.jpg')",
    },
  },
  plugins: [],
};
export default config;
