import { graphql, useStaticQuery } from "gatsby"

export const useProjects = () => {
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
  `)

  // data.allFile.edges.map(({ node }, index) => console.log(node, index))

  return data.allProjectsJson.edges.map(({ node }, index) => ({
    currentImg: data.allFile.edges[index].node.sharp.fluid,
    title: node.title,
    repo: node.repo,
    demo: node.demo,
    image: node.image,
    description: node.description,
  }))
}
