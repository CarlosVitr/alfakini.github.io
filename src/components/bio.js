import React from "react"
import Image from "gatsby-image"

import { useProfileImage } from "../hooks/site-profile-images"
import { useSiteMetadata } from "../hooks/site-metadata"

const Bio = () => {
    const siteMetadata = useSiteMetadata()
    const profileImage = useProfileImage()
    const { author, socialLinks } = siteMetadata

  return (
    <div style={{ display: `flex`, alignItems: "center" }}>
      <Image
        fixed={profileImage}
        alt={author.name}
        style={{ margin: `0 20px 0 0`, minWidth: 80, borderRadius: `100%` }}
      />
      <p style={{ margin: 0 }}>
        Written by <strong>{author.name}</strong>, founder of{` `}
        <a href="https://www.magrathealabs.com">Magrathea Labs</a> and{` `}
        <a href="https://www.fablabjoinville.com.br">Fab Lab Joinville</a>.{` `}
        <a href={socialLinks.twitter}>Follow on Twitter</a>.
      </p>
    </div>
  )
}

export default Bio
