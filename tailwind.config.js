/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Pastikan ini sesuai dengan struktur project Anda
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#94181C", // Default warna merah
        },
        neutral: {
          400: "#94A3B8",
          500: "#64748B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"], // Menambahkan font Plus Jakarta Sans
      },
    },
  },
  plugins: [],
};
