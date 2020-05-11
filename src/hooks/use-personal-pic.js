import { graphql, useStaticQuery } from "gatsby"

const usePersonalPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "my-pic.png" }) {
        sharp: childImageSharp {
          fixed(width: 270, height: 270) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return data.logo.sharp.fixed
}

export default usePersonalPhoto
