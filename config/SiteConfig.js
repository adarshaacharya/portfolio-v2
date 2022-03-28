const personal = {
  siteTitle: 'Aadarsha Acharya',
  defaultTitle: 'Aadarsha Acharya',
  siteAuthor: 'Aadarsha Acharya',
  siteDescription:
    'Personal website of Aadarsha Acharya - Fullstack developer passionate about creating and sharing things on internet',
  siteUrl: 'https://adarshaacharya.com.np',
  siteKeywords: [
    `Aadarsha Acharya, Aadarsha, Acharya, adarshaacharya, Adarsha Acharya, Adarsha, Acharya, adarshaacharya.com.np`,
  ],
};

const social = {
  logo: 'static/images/logo.png',
  twitter: '@adarshatweets',
  twitterLink: `https://twitter.com/adarsha_ach`,
  linkedinLink: `https://www.linkedin.com/in/adarshaacharya/`,
  githubLink: `https://github.com/adarshaacharya`,
  buttonDownEmail: 'adarshaacharya',
  cloudinaryName: `${process.env.CLOUDINARY_NAME}`,
};

const theme = {
  themeColor: '#1b2938',
  backgroundColor: '#1b2938',
};

// comments repo
const comments = {
  commentsRepo: 'adarshaacharya/comments',
};

const trackingID = {
  googleAnalyticsID: 'UA-168740334-1',
};

module.exports = {
  ...personal,
  ...social,
  ...theme, // manifest
  ...trackingID,
  ...comments,
};
