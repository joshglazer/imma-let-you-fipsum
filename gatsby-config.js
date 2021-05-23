module.exports = {
  siteMetadata: {
    title: "Imma Let You Fipsum",
    description: `Relive an infamous time in pop culture history while generating "Lorem Ipsum Style" placeholder text for your website, advertisement, or anything else you may be working on.`,
    image: `https://imma-let-you-fipsum.joshglazer.com/open-graph.png`,
    author: `@glazerade`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-1PKJ208QZF",
      },
    },
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-breakpoints",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Inconsolata:200,400,700,900`, `PT Sans`],
        display: "swap",
      },
    },
  ],
};
