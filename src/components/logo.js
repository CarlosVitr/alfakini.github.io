import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const Logo = ({ style }) => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Image
      fixed={data.avatar.childImageSharp.fixed}
      alt={data.site.siteMetadata.title}
      style={style}
      imgStyle={{
        borderRadius: `10%`,
      }}
    />
  )
}

export default Logo
