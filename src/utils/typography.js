import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  blockMarginBottom: 0,
  padding: 0,
  googleFonts: [
    {
      name: "Nunito",
      styles: ["300", "400", "600", "700", "800", "900"],
    },
  ],
  headerFontFamily: ["Nunito"],
  bodyFontFamily: ["Nunito"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    "h1,h2": {
      fontWeight: 400,
    },
  }),
})

export default typography
