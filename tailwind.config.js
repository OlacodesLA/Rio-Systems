/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-mini": "url('/solar-mini.jpeg')",
        "hero-battery": "url('/battery.jpeg')",
        "hero-room": "url('/room.jpeg')",
        "hero-night": "url('/color-night.jpg')",
        "hero-ir": "url('/ir-night.jpeg')",
        "hero-motion": "url('/motion.jpeg')",
        "hero-solars": "url('/cctv-water.jpeg')",
        "hero-cctv": "url('/cctv-water-flood.jpg')",
        "hero-cctv":
          "url('/scanning-finger-coronavirus-contaminated-fingerprint-access-control.jpg')",
        "hero-svg": "url('/heroe.svg')",
        "quote-bg":
          "url('/images/scanning-finger-coronavirus-contaminated-fingerprint-access-control.jpg')",
      },
      colors: {
        primary: "#4900EE",
        secondary: "#87d453",
        tertiary: "#65b530",
        mycolor: "#67B534",
        best: "#0c0523",
        quote: "#02044A",
        color: "#0C75FF",
        text: "#374151",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
};
