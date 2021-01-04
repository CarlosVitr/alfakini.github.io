import { useStaticQuery, graphql } from "gatsby"

export const useProfileImage = () => {
  const { image } = useStaticQuery(
    graphql`
      query BioQuery {
        image: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
          childImageSharp {
            fixed(width: 80, height: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  
  return image.childImageSharp.fixed
}