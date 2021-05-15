import { graphql, useStaticQuery } from 'gatsby';

const GetTools = () => {
  const data = useStaticQuery(graphql`
    query {
      # since file name in projects.json so allToolsJson
      allToolsJson {
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
    }
  `);

  return data.allToolsJson.edges.map(({ node }) => ({
    title: node.title,
    repo: node.repo,
    external: node.external,
    description: node.description,
    techs: node.techs,
  }));
};

export default GetTools;
