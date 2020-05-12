/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../configs/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
        alignItems: "center",
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 80,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p style={{ margin: 0 }}>
        Written by <strong>{author.name}</strong>, founder of{` `}
        <a href="https://www.magrathealabs.com">Magrathea Labs</a> and{` `}
        <a href="https://www.fablabjoinville.com.br">Fab Lab Joinville</a>.{` `}
        <a href={`https://twitter.com/${social.twitter}`}>Follow on Twitter</a>.
      </p>
    </div>
  )
}

export default Bio
