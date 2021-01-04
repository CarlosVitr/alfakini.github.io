import { useStaticQuery, graphql } from "gatsby"

export const useLogo = () => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  
  return image.childImageSharp.fixed
}