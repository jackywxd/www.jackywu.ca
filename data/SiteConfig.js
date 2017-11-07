module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Jacky's blog", // Site title.
  siteTitleAlt: "", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://jackywu.ca", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Jacky's blog.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "UA-109300746-1", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Jacky Wu", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Vancouver, BC", // User location to display in the author segment.
  userAvatar: "/imgs/jackywu.png", // User avatar to display in the author segment.
  userDescription:
    "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/jackywxd",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/jackywxd",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Facebook",
      url: "https://facebook.com/jackywxd",
      iconClassName: "fa fa-facebook"
    },
    {
      label: "Email",
      url: "mailto:me@jackywu.ca",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Jacky Wu" // Copyright string for the footer of the website and RSS feed.
};
