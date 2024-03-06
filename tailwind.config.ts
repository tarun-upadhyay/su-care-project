import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "t-blue": "#0F2C59",
      },
      fontFamily: {
        manrop: ["var(--font-manrope)"],
        baijam: ["var(--font-baijam)"],
        dmsans: ["var(--font-dmsans)"],
      },
    },
    screens: {
      xxs: "320px", // Small screens, like mobile phones
      xs: "480px", // Small screens, like mobile phones
      sm: "640px", // Medium screens, like tablets
      md: "768px", // Medium screens, like tablets
      lg: "1024px", // Large screens, like laptops
      xl: "1280px", // Extra large screens, like desktops
      // Add more breakpoints as needed
    },
  },
  plugins: [],
});
export default config;
