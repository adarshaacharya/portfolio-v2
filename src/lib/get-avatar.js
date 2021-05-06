import { graphql, useStaticQuery } from 'gatsby';

const GetAvatar = () => {
  const data = useStaticQuery(graphql`
    query {
      pic: file(relativePath: { eq: "my-pic.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  return data.pic.sharp.gatsbyImageData;
};

export default GetAvatar;
