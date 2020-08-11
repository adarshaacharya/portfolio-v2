import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      pic: file(relativePath: { eq: "my-pic.png" }) {
        sharp: childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return data.pic.sharp.fixed;
};
