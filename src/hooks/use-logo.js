import { graphql, useStaticQuery } from "gatsby"

export const useLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        #since we have put source file system up to  /assests
        sharp: childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return data.logo.sharp.fixed
}

