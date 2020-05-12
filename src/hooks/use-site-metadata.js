import { graphql, useStaticQuery } from "gatsby"

const useSiteMetaData = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          keywords
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetaData
