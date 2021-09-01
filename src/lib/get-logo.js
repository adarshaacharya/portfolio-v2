import { graphql, useStaticQuery } from 'gatsby';

function GetLogo() {
  const data = useStaticQuery(graphql`
    query {
      #since we have put source file system up to  static/images
      logo: file(relativePath: { eq: "logo.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `);

  return data.logo.sharp.gatsbyImageData;
}

export default GetLogo;
