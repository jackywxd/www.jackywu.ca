import React from "react"
import { graphql, Link } from "gatsby"
import ReactJkMusicPlayer from "react-jinke-music-player"
import "react-jinke-music-player/assets/index.css"

import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Music = ({ name, path }) => {
  return (
    <>
      <h3>{name}</h3>
      <audio src={path} controls />
    </>
  )
}

const MusicPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const musics = data.allFile.edges
  const covers = data.covers.edges
  const musicsData = data.allMusicsJson.nodes
  const audioLists = musics.map((music) => {
    const m = music.node
    const cover = covers.filter(
      (f) => f.node.name.toLowerCase() === m.name.toLowerCase()
    )
    return {
      name: m.name,
      singer: musicsData.filter(
        (f) => f.name.toLowerCase() === m.name.toLowerCase()
      )[0]?.singer,
      cover:
        cover.length > 0
          ? cover[0].node.publicURL
          : musicsData.filter(
              (f) => f.name.toLowerCase() === m.name.toLowerCase()
            )[0]?.cover,
      musicSrc: m.publicURL,
    }
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="My Music Library" />
      <h1>My Music Collections</h1>
      <ReactJkMusicPlayer
        defaultPosition={{ top: "80%", left: "60%" }}
        audioLists={audioLists.sort((a, b) => {
          if (a.name > b.name) return -1
          else return 1
        })}
        mode="full"
        showDownlod={false}
      />
    </Layout>
  )
}

export default MusicPage

export const pageQuery = graphql`
  query MyQuery($in: [String] = [".m4a", ".mp3"]) {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: { ext: { in: $in } }) {
      edges {
        node {
          name
          size
          publicURL
        }
      }
    }
    covers: allFile(filter: { absolutePath: { regex: "/covers/" } }) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
    allMusicsJson {
      nodes {
        name
        singer
        cover
        musicSrc
      }
    }
  }
`
