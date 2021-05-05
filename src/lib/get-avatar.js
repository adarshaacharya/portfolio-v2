import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      pic: file(relativePath: { eq: "my-pic.png" }) {
        sharp: childImageSharp {
        
          gatsbyImageData(layout: CONSTRAINED)

        }
      }
    }
  `);

  return data.pic.sharp.gatsbyImageData;
};
