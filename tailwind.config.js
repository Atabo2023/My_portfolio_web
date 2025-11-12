/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: "class",
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },

    fontFamily: {
      exo: ['"Exo 2"', "sans-serif"],
    },

    keyframes: {
      twinkle: {
        "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
        "50%": { opacity: "1", transform: "scale(1.5)" },
      },
      shooting: {
        "0%": {
          transform: "translateX(0) translateY(0) scale(1)",
          opacity: "1",
        },
        "100%": {
          transform: "translateX(200px) translateY(100px) scale(0.5)",
          opacity: "0",
        },
      },
    },
    animation: {
      twinkle: "twinkle 1.5s infinite ease-in-out",
      shooting: "shooting 2s linear forwards",
    },
  },

  plugins: [],
};
