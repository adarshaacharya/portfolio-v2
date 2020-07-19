const personal = {
  title: 'Aadarsha Acharya - Portfolio Website',
  defaultTitle: 'Aadarsha Acharya',
  author: 'Aadarsha Acharya',
  description:
    'Aadarsha Acharya- Web developer passionate about create things and sharing good ideas',
  url: 'https://adarshaacharya.com.np',
  keywords: [
    `Aadarsha Acharya, Aadarsha, Acharya, adarshaacharya, Adarsha Acharya, Adarsha, Acharya, adarshaacharya.com.np`,
  ],
};

const social = {
  logo: 'static/images/logo.png',
  twitter: '@adarshatweets',
  twitterLink: `https://twitter.com/aadarshatweets`,
  linkedinLink: `https://www.linkedin.com/in/adarshaacharya/`,
  githubLink: `https://github.com/adarshaacharya`,
};

const theme = {
  themeColor: '#2D85F4',
  backgroundColor: '#2D85F4',
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
