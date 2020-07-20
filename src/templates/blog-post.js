import Layout from '@components/Layout';
import SEO from '@components/Seo';
import { Flex, SectionTitle } from '@portfolio-ui/';
import { DiscussionEmbed } from 'disqus-react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { disqusShortName, url } from '../../config/data';

// page context from gatsby-node and data from below graphql query
const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.mdx;
  const { previous, next, slug } = pageContext;

  const baseSlugUrl = `${url}/blog/${slug}`;
  const disqusConfig = {
    url: baseSlugUrl,
    identifier: post.frontmatter.id.toString(),
    title: post.frontmatter.title,
  };

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        author={post.frontmatter.author}
        description={post.frontmatter.description}
      />

      <div className="blog-content">
        <hr />
        <SectionTitle>{post.frontmatter.title}</SectionTitle>
        <Flex justify="space-around">
          <span role="img" aria-label="author">
            👤 {post.frontmatter.author}
          </span>
          <span role="img" aria-label="date">
            {' '}
            🗓️ {post.frontmatter.date}
          </span>
          <span role="img" aria-label="readingTime">
            🕒 {post.fields.readingTime.text}
          </span>
        </Flex>
        <hr />

        <MDXRenderer className="post-body">{post.body}</MDXRenderer>
      </div>

      <hr />

      <Flex justify="space-between" className="recommendation">
        {previous && (
          <Link to={`/blog/${previous.frontmatter.slug}/`} rel="prev">
            &larr; {previous.frontmatter.title}
          </Link>
        )}

        {next && (
          <Link to={`/blog/${next.frontmatter.slug}/`} rel="next">
            {next.frontmatter.title} &rarr;
          </Link>
        )}
      </Flex>

      <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
    </Layout>
  );
};

export default BlogPostTemplate;

// independent query to retrive data of post by using slug(post) which is provided as context
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        id
        title
        author
        slug
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
