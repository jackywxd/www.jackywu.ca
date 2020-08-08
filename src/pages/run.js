import React from "react"
import { graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

const RunPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const runPosts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Run" />
      {runPosts.map((run) => {
        const title = run.node.frontmatter.title || run.node.fields.slug
        const node = run.node
        return (
          <article
            key={node.fields.slug}
            style={{
              marginTop: `-15px`,
              marginBottom: `70px`,
            }}
          >
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 10),
                  fontFamily: `Montserrat`,
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    color: "#000000",
                    fontSize: `21px`,
                    fontWeight: `400`,
                    fontFamily: `Montserrat`,
                  }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
            </header>
            <section
              style={{
                color: "#888888",
                fontSize: `17px`,
                fontWeight: `300`,
                fontFamily: `Montserrat`,
              }}
            >
              <p
                style={{ marginBottom: `1px` }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.date,
                }}
              />
              <p
                style={{ marginBottom: `5px` }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default RunPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { template: { eq: "run" } } }) {
      edges {
        node {
          frontmatter {
            template
            title
            tags
            date
            description
            slug
            category
            link
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
