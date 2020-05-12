import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

fairyGateTheme.overrideThemeStyles = ({ rhythm }) => {
  const linkColor = `#3E2767`

  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a": {
      color: linkColor,
      textShadow: `none`,
      backgroundImage: `none`
    },
    "a:hover,a:active": {
      textShadow: ".03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff", // eslint-disable-line
      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
    },
    "blockquote": {
      borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
    }
  }
}

const typography = new Typography(fairyGateTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export const { scale, rhythm, options } = typography
export default typography
