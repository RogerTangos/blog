import React from 'react';
import { graphql, Link } from 'gatsby';
import _ from 'lodash';
import urljoin from 'url-join';
import { DiscussionEmbed } from 'disqus-react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostCard from '../components/post-card/post-card';
import PostDetails from '../components/post-details/post-details';
import addToMailchimp from 'gatsby-plugin-mailchimp';
// import './mailchimp.css';


import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton,
} from 'react-share';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoReddit,
} from 'react-icons/io';
import {
  BlogPostDetailsWrapper,
  RelatedPostWrapper,
  RelatedPostItems,
  RelatedPostTitle,
  RelatedPostItem,
  BlogPostFooter,
  PostShare,
  PostTags,
  BlogPostComment,
} from './templates.style';

  

const BlogPostTemplate = (props: any) => {
  const post = props.data.markdownRemark;
  const { edges } = props.data.allMarkdownRemark;
  const title = post.frontmatter.title;
  const slug = post.fields.slug;
  const siteUrl = props.data.site.siteMetadata.siteUrl;
  const shareUrl = urljoin(siteUrl, slug);

  const disqusConfig = {
    shortname: process.env.DISQUS_NAME,
    config: { identifier: slug, title },
  };

  



  interface IState {
      value: string; 
  } 


  // this.state = {
  //     playOrPause: 'Play'
  //   };

  // 2. via `async/await`
  // const _handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const result = await addToMailchimp(email, listFields)
  //   // I recommend setting `result` to React state
  //   // but you can do whatever you want
  // }




  const _handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const result = await addToMailchimp(email, listFields)
    console.log('handleSubmit Hit')
    const result = await addToMailchimp("email", "listfields")
  };

  const _handleChange = (e: React.FormEvent) => {
    // @ts-ignore
    IState({value: e.target.value});
  }



  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogPostDetailsWrapper>
        <PostDetails
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          preview={
            post.frontmatter.cover == null
              ? null
              : post.frontmatter.cover.childImageSharp.fluid
          }
          description={post.html}
          imagePosition="left"
        />

        <BlogPostFooter
          className={post.frontmatter.cover == null ? 'center' : ''}
        >
          {post.frontmatter.tags == null ? null : (
            <PostTags className="post_tags">
              {post.frontmatter.tags.map((tag: string, index: number) => (
                <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </Link>
              ))}
            </PostTags>
          )}

          <form onSubmit={_handleSubmit}>
            Keep in touch via the email list:<br />
            <label>
              <input type="text" name="email" value={"email"} onChange={_handleChange}/>
            </label>
            <input type="submit" value="Subscribe"  />

          </form>


          <PostShare>
            <span>Share This:</span>
            <FacebookShareButton url={shareUrl} quote={post.excerpt}>
              <IoLogoFacebook />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={title}>
              <IoLogoTwitter />
            </TwitterShareButton>
            <PinterestShareButton
              url={shareUrl}
              media={urljoin(siteUrl, post.frontmatter.cover.publicURL)}
            >
              <IoLogoPinterest />
            </PinterestShareButton>
            <RedditShareButton
              url={shareUrl}
              title={`${post.frontmatter.title}`}
            >
              <IoLogoReddit />
            </RedditShareButton>
          </PostShare>
        </BlogPostFooter>
        <BlogPostComment
          className={post.frontmatter.cover == null ? 'center' : ''}
        >
          <DiscussionEmbed {...disqusConfig} />
        </BlogPostComment>
      </BlogPostDetailsWrapper>

      {edges.length !== 0 && (
        <RelatedPostWrapper>
          <RelatedPostTitle>Related Posts</RelatedPostTitle>
          <RelatedPostItems>
            {edges.map(({ node }: any) => (
              <RelatedPostItem key={node.fields.slug}>
                <PostCard
                  title={node.frontmatter.title || node.fields.slug}
                  url={"/" + node.fields.slug}
                  image={
                    node.frontmatter.cover == null
                      ? null
                      : node.frontmatter.cover.childImageSharp.fluid
                  }
                  tags={node.frontmatter.tags}
                />
              </RelatedPostItem>
            ))}
          </RelatedPostItems>
        </RelatedPostWrapper>
      )}
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $tag: [String!]) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMM, YYYY")
        description
        tags
        cover {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1170, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: $tag } }
        fields: { slug: { ne: $slug } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            cover {
              publicURL
              childImageSharp {
                fluid(maxWidth: 480, maxHeight: 285, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
