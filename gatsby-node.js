/* Welcome to node interface */

const path = require(`path`);

// alias for folder system
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.join(__dirname, 'src'),
        '@src': path.join(__dirname, 'src'),
        '@components': path.join(__dirname, 'src/components'),
        '@pages': path.join(__dirname, 'src/pages'),
        '@hooks': path.join(__dirname, 'src/hooks'),
        '@lib': path.join(__dirname, 'src/lib'),
        '@images': path.join(__dirname, 'static/images'),
        '@portfolio-ui': path.join(__dirname, 'src/@portfolio-ui'),
        '@context': path.join(__dirname, 'src/context'),
      },
    },
  });
};

/*======================================================
  Create Page for Each Blog Post ( Programmatic Page Gen)
======================================================*/

exports.createPages = async ({ actions, graphql, resporter }) => {
  const blogPostTemplate = path.resolve('./src/templates/blog-post.js');

  // get only slug to create pages and pages themselves query for data. Title is queried for next & prev
  const result = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `);

  if (result.erros) {
    reporter.panic('Failed to create posts', result.errors);
  }

  // get data out of all mdx (contains : frontmatter -> slug)
  const posts = result.data.allMdx.nodes;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];

    // create each blog post with template using slug
    actions.createPage({
      path: '/blog/' + post.frontmatter.slug, // url of each post will be /blog/slug
      component: blogPostTemplate,

      // pass slug to the template (data to be passed to tmplate so that it can independently query its data )
      context: {
        slug: post.frontmatter.slug,
        previous,
        next,
      },
    });
  });
};
