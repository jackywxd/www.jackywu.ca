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
        <p>
          I am an IT professional with close to 25 years experience, almong
          which half in China and half in Canada. Along my career I had worked
          for very different sizes of companies, range from the largest tech
          compines such as Microsoft to a small start-up with couple employees.
        </p>
        <p>
          My career can be divided by two sections, prior to 2016 was in
          traditional IT. During that period, I did mostly on IT support and IT
          management and play many different roles. I started as TAM in
          Microsoft. Then I spent 13 years in CA. The majority of my career was
          developed in CA, all the way from technical consolutant to Level 2
          support director. After spent a fraction time in Nokia as program
          manager, I spent about 4 years in DF Nissan as Sr. Director of IT
          before we moved back to Vancouver in 2016.
        </p>
        <p>
          After I moved back to Vancouver in 2016, my focus switch to Cloud and
          web development and created a startup (FreeRamble) with my friend. I
          am responsible for all technical related matters, including
          development and operations. As a small start-up, AWS became our
          natural choice when it comes to selecting cloud platform. In 2020, I
          created AllConnect VPN on top of AWS platform.
        </p>
        <p>
          And the fun part was I started coding, again! I did have couple years
          coding experience with C/C++ back in my days in university and in CA
          maintaining legacy C/C++ code base of ARCserve. But in Cloud era,
          everything must run in JavaScript.
        </p>
        <p>
          After all these years, I must say coding is fun and full of
          challenages. Creating a whole new platform and whole new App from
          scratch has a huge return of sense of achivements. You essentially are
          a creator/builder, while other type of IT jobs are not.
        </p>
        <p>
          Life is all about balance and diversified. At work, I am writing code.
          After work, I am a chef, photographer, runner and skier. I run
          marathon and I was Boston Qualified in 2019. My next goal is to stand
          behind the start line of UTMB.
        </p>
        <p>
          Year 2020 was a sad year. Because of the global pandamic, all of the
          major marathon races (including the Boston Marathon) were cancelled.
          And my wife passed away after suffering couple months of depressions.
          I was heartbreaking and spent couple days and nights to built a
          website for
          <a href="https://haijieliu.com"> my wife</a>. But it is still hard to
          believe my beloved wife has gone.
        </p>
        <p>
          So life has changed dramatically, I need to learn how to live with my
          two boys without my wife. I don't know what's my future. But I know it
          is in God's hand.
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
