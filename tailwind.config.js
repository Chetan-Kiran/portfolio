/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#1d4ed8",
        },
        glass: {
          light: "rgba(255, 255, 255, 0.05)",
          border: "rgba(255, 255, 255, 0.1)",
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.5))' },
          '50%': { filter: 'drop-shadow(0 0 25px rgba(59, 130, 246, 0.8))' },
        }
      }
    },
  },
  plugins: [],
};
