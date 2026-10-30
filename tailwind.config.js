/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0b1120",
        primary: "#00E5FF",
        secondary: "#64FFDA",
        accent: "#3B82F6",
        warning: "#F59E0B",
        success: "#22C55E",
        text: "#F8FAFC",
        muted: "#94A3B8"
      },

      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },

      boxShadow: {
        glow: "0 0 25px rgba(0,229,255,0.35)",
        card: "0 10px 35px rgba(0,0,0,0.45)"
      },

      borderRadius: {
        xl2: "1.5rem"
      },

      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg,#050816 0%,#0b1120 50%,#111827 100%)",

        "card-gradient":
          "linear-gradient(145deg,#111827,#0f172a)"
      },

      animation: {
        float: "float 5s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.5s infinite",
        scan: "scan 6s linear infinite",
        fadeUp: "fadeUp 0.8s ease forwards"
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-15px)"
          }
        },

        pulseGlow: {
          "0%,100%": {
            boxShadow: "0 0 12px rgba(0,229,255,.25)"
          },
          "50%": {
            boxShadow: "0 0 35px rgba(0,229,255,.7)"
          }
        },

        scan: {
          "0%": {
            backgroundPosition: "0% 0%"
          },
          "100%": {
            backgroundPosition: "0% 200%"
          }
        },

        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(40px)"
          },

          to: {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      }
    }
  },

  plugins: []
};