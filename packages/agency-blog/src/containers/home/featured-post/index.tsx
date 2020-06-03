import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FeaturedCard from "../../../components/featured-card/featured-card"
import {
  FeaturedPostWrapper,
  FeaturedPostRow,
  FeaturedPostCol,
  SecTitle,
} from "./style"

type FeaturedPostsProps = {}

const FeaturedPosts: React.FunctionComponent<FeaturedPostsProps> = (props) => {
  const Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allSitePage(filter: { path: { eq: "/page/1" } }) {
        nodes {
          context {
            numPages
            currentPage
          }
        }
      }
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
      ) {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 150)
            fields {
              slug
              readingTime {
                text
              }
            }
            frontmatter {
              date(formatString: "MMM DD, YYYY")
              title
              description
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 570, maxHeight: 810, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const Posts = Data.allMarkdownRemark.edges

  return (
    <FeaturedPostWrapper>
      <SecTitle>Featured Stories</SecTitle>
      <FeaturedPostRow>
        {Posts.map(({ node }: any) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <FeaturedPostCol key={title}>
              <FeaturedCard
                title={title}
                image={
                  node.frontmatter.cover == null
                    ? null
                    : node.frontmatter.cover.childImageSharp.fluid
                }
                url={node.fields.slug}
                tags={node.frontmatter.tags}
                description={node.excerpt}
              />
            </FeaturedPostCol>
          )
        })}
      </FeaturedPostRow>
    </FeaturedPostWrapper>
  )
}

export default FeaturedPosts
