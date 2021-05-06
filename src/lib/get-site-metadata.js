import { graphql, useStaticQuery } from 'gatsby';

const GetSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          keywords
          siteUrl
        }
      }
    }
  `);

  return data;
};

export default GetSiteMetadata;
