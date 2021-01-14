require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Environmental Financial Activism`,
    author: `Albert Carter`,
    about: `Programmer and financial environmental activist.`,
    description: `Blog`,
    siteUrl: `https://albertrcarter.com`,
  },
  plugins: [
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
            endpoint: 'https://albertrcarter.us18.list-manage.com/subscribe/post?u=15c6d56efe472984d62d97209&amp;id=6c9735461c',
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
          {
            resolve: `gatsby-remark-mermaid`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },

          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-feed`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `StoryHub - Personal Blog Minimal`,
        short_name: `StoryHub`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-typescript`,
    },
     {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-187038182-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: [],
        pageTransitionDelay: 0,
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      
      },
    },
    {
      resolve: `gatsby-plugin-lodash`,
    }
  ],
};
