import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            socialLinks {
              twitter
              github
              goodreads
              linkedin
              stackoverflow
              discogs
              instagram
            }
            socialUsers {
              facebook
              facebook_app_id
              facebook_admins
              twitter
            }
            title
            siteUrl
            rssUrl
            description
            author {
              name
            }
            keywords
          }
        }
      }
    `
  )
  
  return site.siteMetadata
}