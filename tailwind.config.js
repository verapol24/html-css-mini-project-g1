tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy: "#0A033C",
        muted: "#8D8BA7",
        line: "#E7E6F2",
        cross: "#C4C2D6",
        check: "#1A73E8",
        regular: "#FFA940",
        premium: "#00B695",
        corporate: "#1A73E8",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      screens: {
        desktop: "1440px",
      },
      maxWidth: {
        content: "1170px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".win-cell": {
          borderWidth: "1px",
          borderColor: "#E7E6F2",
          textAlign: "center",
        },
        ".win-label": {
          borderWidth: "1px",
          borderColor: "#E7E6F2",
          padding: "1rem",
          textAlign: "left",
          fontSize: "0.875rem",
          fontWeight: "500",
          color: "#8D8BA7",
        },
        ".win-plan": {
          borderWidth: "1px",
          borderColor: "#E7E6F2",
          padding: "1.5rem 0.75rem",
          textAlign: "center",
        },
        ".win-price": {
          display: "block",
          fontSize: "1.75rem",
          fontWeight: "700",
        },
        ".win-name": {
          marginTop: "0.25rem",
          display: "block",
          fontSize: "0.875rem",
          fontWeight: "500",
          color: "#8D8BA7",
        },
        ".win-icon": {
          fontSize: "1.125rem",
        },
        ".win-check": {
          color: "#1A73E8",
          fontWeight: "600",
        },
        ".win-cross": {
          color: "#C4C2D6",
          fontWeight: "300",
        },
        ".win-cta": {
          borderWidth: "1px",
          borderColor: "#E7E6F2",
          padding: "1.5rem 0.75rem",
          textAlign: "center",
        },
        ".win-btn": {
          display: "inline-block",
          borderRadius: "0.375rem",
          padding: "0.625rem 1.25rem",
          fontSize: "0.875rem",
          fontWeight: "500",
          color: "#fff",
        },
        ".win-btn:hover": {
          opacity: "0.9",
        },
        ".win-trial": {
          marginTop: "0.75rem",
          fontSize: "0.75rem",
          color: "#8D8BA7",
        },
        "@media (min-width: 1440px)": {
          ".win-label": {
            padding: "1.25rem 2rem",
            fontSize: "1rem",
          },
          ".win-plan": {
            padding: "2.5rem 2rem",
          },
          ".win-price": {
            fontSize: "2.5rem",
          },
          ".win-name": {
            fontSize: "1rem",
          },
          ".win-cta": {
            padding: "2rem",
          },
          ".win-btn": {
            padding: "0.75rem 2rem",
            fontSize: "1rem",
          },
          ".win-trial": {
            fontSize: "0.875rem",
          },
        },
      });
    },
  ],
};
