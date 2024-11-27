import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: '#0452B4',
        lightBlue: '#5AB3DF',
        darkNavy: '#012A5C',
        softSkyBlue: '#B2DFF7',
        darkGray: '#333333',
        mediumGray: '#6B7280',
        lightGray: '#E5E7EB',
        brightYellow: '#FFD166',
        vibrantCoral: '#FF6B6B',
      },
    },
    
  },
  plugins: [],
};
export default config;
