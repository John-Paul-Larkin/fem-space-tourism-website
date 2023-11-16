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
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        tablet: "480px",
        desktop: "769px",
        
      },
      colors: {
        "white": "hsl(0, 0%, 100%)",
        "lilac": "hsl(231, 77%, 90%)",
        "black": "hsl(230, 25%, 7%)",
      },
    },
  },
  plugins: [],
};
export default config;
