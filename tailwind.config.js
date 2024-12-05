/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#fff",
        "gray-100": "rgb(244, 244, 245)",
        "gray-200": "rgb(228, 228, 231)",
        "gray-300": "rgb(212, 212, 216)",
        "gray-400": "rgb(161, 161, 170)",
        "gray-500": "rgb(113, 113, 122)",
        "gray-600": "rgb(82, 82, 91)",
        "gray-700": "rgb(63, 63, 70)",
        "gray-800": "rgb(39, 39, 42)",
        "gray-900": "rgb(24, 24, 27)",
        "black-light": "rgb(20, 20, 20)",
        "black": "rgb(10, 10, 10)",
        "primary": "rgb(0, 122, 255)",
        "danger": "rgb(228, 44, 35)",
        "black-opaque": "rgb(10, 10, 10, 0.5)",
        "gray-800-opaque": "rgb(39, 39, 42, 0.5)",
        "black-light-opaque": "rgba(20, 20, 20, 0.5)",
        
      },
    },
  },
  plugins: [],
};
