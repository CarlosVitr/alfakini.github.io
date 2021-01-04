import React from "react"
import Image from "gatsby-image"

import { useLogo } from "../../hooks/site-logo"
import { useSiteMetadata } from "../../hooks/site-metadata"

const Logo = () => {
  const logo  = useLogo()
  const { title } = useSiteMetadata()

  return (
    <React.Fragment>
      <Image
        fixed={logo}
        alt={title}
        style={{ margin: `0 10px 0 20px`, verticalAlign: `middle` }}
      />
      <h1 style={{ fontSize: `20px`, display: `inline-block`, margin: `0` }}>
        {title}
      </h1>
    </React.Fragment>
  )
}

export default Logo
