const personal = {
  title: 'Aadarsha Acharya - Portfolio Website',
  description:
    'Personal website of a web developer passionate about create things and sharing good ideas',
  author: 'Aadarsha Acharya',
  url: 'https://adarshaacharya.com.np',
  keywords: [
    `Aadarsha Acharya, Aadarsha, Acharya, adarshaacharya, Adarsha Acharya, Adarsha, Acharya, adarshaacharya.com.np`,
  ],
};

const social = {
  twitter: '@adarshatweets',
  twitterLink: `https://twitter.com/aadarshatweets`,
  linkedinLink: `https://www.linkedin.com/in/adarshaacharya/`,
  githubLink: `https://github.com/adarshaacharya`,
};

const theme = {
  themeColor: '#6D83F2',
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
  ...theme,
  ...disqus,
  ...trackingID,
};
