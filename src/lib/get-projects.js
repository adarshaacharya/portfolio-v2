import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson(sort: { fields: image }) {
        edges {
          node {
            title
            repo
            demo
            image
            description
            techs
          }
        }
      }

      # query to get image
      allFile(
        filter: { name: { regex: "/^project_/" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            relativePath
            sharp: childImageSharp {
              fluid(quality: 90, maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return data.allProjectsJson.edges.map(({ node }, index) => ({
    thumbnail: data.allFile.edges[index].node.sharp.fluid, // optimized image
    title: node.title,
    repo: node.repo,
    demo: node.demo,
    image: node.image, // raw image
    description: node.description,
    techs: node.techs,
  }));
};
