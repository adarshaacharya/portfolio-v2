/*utility function that fetches all the mdx  posts and transformer method takes the data received and massages it into a shape I can use for my Algolia records by lifting the keys of the frontmatter object up to the same level as the rest of the node*/


const mdxQuery = `
query {
    allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
      edges {
        node {
          excerpt 
          frontmatter {
            title
            description
            slug
            tags      
            id    
          }
          rawBody
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
