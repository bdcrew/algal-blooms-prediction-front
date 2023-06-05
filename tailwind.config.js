/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        fontFamily: {
          sans: [
            "Roboto",
            "ui-sans-serif",
            "system-ui",
            "-apple-system",
            "BlinkMacSystemFont",
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
      width: {
        10.5: "42px",
        14.5: "66px",
        15: "60px",
        21: "84px",
        31.5: "126px",
        49: "196px",
        55.5: "222px",
        77: "308px",
        78: "312px",
        106: "424px",
        155: "620px",
        186.125: "745px",
        221.5: "886px",
        227: "908px",
      },
      height: { 13: "3.25rem", 15.5: "3.875rem", 52: "208px", 83.5: "334px" },
      maxHeight: {
        23: "92px",
      },
      margin: { 11.5: "46px", 13: "52px" },
      padding: {
        6.5: "26px",
        7.5: "30px",
        13: "52px",
        15: "60px",
      },
      backgroundColor: {
        cancel: "#54535a",
        secondary: "#54535a",
        input: "#333239",
        "popup-modal": "#26252b",
      },
      zIndex: {
        99: "99",
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        playerStatsGrid: "0.5fr 2.5fr repeat(12, 1fr)",
        overviewGrid: "0.5fr 126px 0.5fr 1fr 1fr 1.2fr 1fr 0.5fr 0.5fr",
        championGrid: "0.5fr 3fr repeat(17, 1fr) 2fr 2fr",
        combinationGrid: "1fr 1fr 3fr 1fr 3fr repeat(16, 1fr) 2fr",
      },
      fontSize: {
        micro: "12px",
        small: "14px",
        base: "16px",
        medium: "18px",
        large: "24px",
        xlarge: "32px",
      },
      fontWeight: {
        base: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
      borderRadius: {
        2.5: "10px",
        5: "20px",
      },
    },
  },
  plugins: [],
};

