import Typography from "typography"

import './fonts/fonts.css'

export const fonts = {
  walsheim: 'GT Walsheim Regular',
  walsheimLight: 'GT Walsheim Light',
  walsheimBold: 'GT Walsheim Bold',
  regular: 'FreightText W01 Book',
  regularItalic: 'FreightText W01 Book Italic',
  bold: 'FreightText W01 Bold',
  boldItalic: 'FreightText W01 Bold Italic',
  regularSans: 'Freight Sans W03 Book',
  regularSansItalic: 'Freight Sans W03 Book Italic',
  lightSans: 'Freight Sans W03 Light',
  boldSans: 'Freight Sans W03 Bold',
  monoRegular: 'IBM Plex'
}

export const colors = {
  black: '#233044',
  darkGrey: '#454963',
  white: '#FFFFFF',
  offWhite: '#F4F7FA',
  grey: '#777C9B',
  lightGrey: '#C5C9DB',
  lightestGrey: '#E0E9F1',
  orange: '#ed7842',
  lightOrange: '#F98B3B',
  blue: '#00A1E3',
  lightBlue: '#22BEF7',
  darkBlue: '#2F73E6',
  lightGreen: '#AAC339',
  navy: '#192C4C',
  red: '#FD5351',
}

const typography = new Typography({
    baseFontSize: '24px',
    baseLineHeight: 1.45,
    headerLineHeight: 1.4,
    headerFontFamily: [fonts.walsheim, 'sans-serif'],
    bodyFontFamily: [fonts.regular, 'serif'],
    headerColor: '#121F35',
    bodyColor: '#334259',
    headerWeight: 700,
    bodyWeight: 400,
    boldWeight: 700,

    overrideStyles: ({ rhythm, scale, adjustFontSizeTo }, options) => {
      const linkColor = `#134896`
    
      return {
        'h1,h2,h3,h4,h5,h6': {
          fontFamily: fonts.walsheim,
          letterSpacing: 'normal',
          WebkitFontSmoothing: 'antialiased',
          textRendering: 'optimizeLegibility',
        },
        p: {
          lineHeight: '1.8em',
          fontSize: rhythm(0.7),
          marginBottom: rhythm(0.5),
          WebkitFontSmoothing: 'antialiased',
          textRendering: 'optimizeLegibility',
        },
        a: {
          color: linkColor,
          textDecoration: `none`,
          textShadow: `none`,
          backgroundImage: `none`
        },
        "a:hover,a:active": {
          textShadow: ".03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff", // eslint-disable-line
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
        },
        "a.gatsby-resp-image-link": {
          boxShadow: `none`,
        },
        blockquote: {
          fontStyle: `italic`,
          color: colors.darkGrey,
          borderLeft: `${rhythm(0.33)} solid ${linkColor}`,
          paddingLeft: rhythm(0.33),
        },
        "blockquote cite": {
          ...adjustFontSizeTo(options.baseFontSize),
          color: options.bodyColor,
          fontStyle: "normal",
          fontWeight: options.bodyWeight,
        },
        "blockquote cite:before": {
          content: '"— "',
        },
        ".sans": {
          fontFamily: fonts.walsheim,
        }
      }
    }
  }
)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export const { scale, rhythm, options } = typography
export default typography
