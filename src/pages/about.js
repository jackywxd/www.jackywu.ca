import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>Who am I</h2>
        <p>
          This is Jacky Wu. I was born in JieYang, a small villige in southen
          China, grown up in Guangzhou (Canton). In the past two decades, my
          life track has been back and forth between China and Canada. Finally
          settled down in Port Moody, BC in 2016.
        </p>
        <h2>What I do</h2>
        <p>
          Life is all about balance and diversified. At work, I am a programer,
          Cloud Architecture, Security Expert. After work, I am a chef,
          photographer, runner and skier. The only constant is change, if we
          cannot change it, we have to adapt it!
        </p>
        <a
          href="https://www.linkedin.com/in/jackywxd/"
          target="blank"
          style={{
            color: `#000000`,
            fontSize: `15px`,
            fontWeight: `300`,
            fontFamily: `Montserrat`,
          }}
        >
          View LinkedIn Profile
        </a>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
