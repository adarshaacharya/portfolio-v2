import { graphql, useStaticQuery } from "gatsby"

export const useProjectsDescription = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
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
    }
  `)

  return data.allProjectsJson.edges.map(({node}) => ({
    title: node.title,
    repo: node.repo,
    demo: node.demo,
    image: node.image,
    description: node.description,
  }))
}


export const useProjectsImage = () => {
  




}