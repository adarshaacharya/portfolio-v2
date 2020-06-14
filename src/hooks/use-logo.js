import { graphql, useStaticQuery } from "gatsby"

export const useLogo = () => {
  const data = useStaticQuery(graphql`
    query {
        #since we have put source file system up to  /images
      logo: file(relativePath: { eq: "logo.png" }) {
        sharp: childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return data.logo.sharp.fixed
}

