import { graphql, useStaticQuery } from 'gatsby';

const GetWebsites = () => {
  const data = useStaticQuery(graphql`
    query {
      # since file name in websites.json so allWebsitesJson
      allWebsitesJson {
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
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);

  return data.allWebsitesJson.edges.map(({ node }, index) => ({
    thumbnail: data.allFile.edges[index].node.sharp.gatsbyImageData, // optimized image
    title: node.title,
    repo: node.repo,
    demo: node.demo,
    image: node.image, // raw image
    description: node.description,
    techs: node.techs,
  }));
};

export default GetWebsites;
