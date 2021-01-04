import { useStaticQuery, graphql } from "gatsby"

export const useShareImages = () => {
  const { shareImage } = useStaticQuery(
    graphql`
      query {
        shareImage: file(relativePath: { eq: "share4.png" }) {
          childImageSharp {
            fixed(width: 1200, height: 630) {
              src
            }
          }
        }
      }
    `
  )
  
  return shareImage.childImageSharp.fixed
}