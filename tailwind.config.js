/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "banner-bg":"url('/public/bannerBg2.jpg')",
        "w-d" : "url('/src/components/servicesPics/w-d.jpg')",
        "e-c" : "url('/src/components/servicesPics/e-c.webp')",
        "i-d" : "url('/src/components/servicesPics/i-d.png')",
        "m-d" : "url('/src/components/servicesPics/m-d.jpg')",
        "s-t" : "url('/src/components/servicesPics/s-t.webp')",
        "u-i" : "url('/src/components/servicesPics/u-i.jpg')",
        "tech-bg":"url('/public/techbg.png')",
      }
    },
  },
  plugins: [],
}