/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slowspin: "spin 10s linear infinite", // 3 seconds per spin
      },
    },
  },
  plugins: [require("daisyui")],
};
