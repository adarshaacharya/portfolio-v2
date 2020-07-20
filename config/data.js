const personal = {
  siteTitle: 'Aadarsha Acharya',
  defaultTitle: 'Aadarsha Acharya',
  siteAuthor: 'Aadarsha Acharya',
  siteDescription:
    'Aadarsha Acharya- Web developer passionate about create things and sharing good ideas',
  siteUrl: 'https://adarshaacharya.com.np',
  siteKeywords: [
    `Aadarsha Acharya, Aadarsha, Acharya, adarshaacharya, Adarsha Acharya, Adarsha, Acharya, adarshaacharya.com.np`,
  ],
};

const social = {
  logo: 'static/images/logo6.png',
  twitter: '@adarshatweets',
  twitterLink: `https://twitter.com/aadarshatweets`,
  linkedinLink: `https://www.linkedin.com/in/adarshaacharya/`,
  githubLink: `https://github.com/adarshaacharya`,
};

const theme = {
  themeColor: '#1b2938',
  backgroundColor: '#1b2938',
};

const disqus = {
  disqusShortName: 'aadarshaacharya',
};

const trackingID = {
  googleAnalyticsID: 'UA-168740334-1',
};

module.exports = {
  ...personal,
  ...social,
  ...theme, // manifest
  ...disqus,
  ...trackingID,
};
