/*mdxQuery retrieves all the published posts. 3 Then my transformer method takes the data received and massages it into a shape I can use for my Algolia records by lifting the keys of the frontmatter object up to the same level as the rest of the node. /posts/ is the fir of posts. */

// add rawbody if you want to search body too
const mdxQuery = `
query {
    allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
      edges {
        node {
          frontmatter {
            tags
            title
            description
            slug
            id
            date(formatString: "MMMM Do, YYYY")
          }
          fields {
            readingTime {
              text
            }
          }
          
        }
      }
    }
  }
`;

const unnestFrontmatter = node => {
  const { frontmatter, ...rest } = node;

  return {
    ...frontmatter,
    ...rest,
  };
};

const queries = [
  {
    query: mdxQuery,
    transformer: ({ data }) =>
      data.allMdx.edges.map(edge => edge.node).map(unnestFrontmatter),
  },
];

module.exports = queries;
