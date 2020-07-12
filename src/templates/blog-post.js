import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { DiscussionEmbed } from 'disqus-react';

import Layout from '@components/Layout';
import SEO from '@components/Seo';
import { Flex } from '@portfolio-ui/';
import { url, disqusShortName } from '../../config/data';

import './style.scss';

// page context from gatsby-node and data from below graphql query
const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.mdx;
  const { previous, next, slug } = pageContext;

  const baseSlugUrl = `${url}/${slug}`;
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
        <div className="article-header">
          <h1>{post.frontmatter.title}</h1>
          <Flex>
            <span>👤 {post.frontmatter.author}</span>
            <span> 🗓️ {post.frontmatter.date}</span>
            <span>🕒{post.fields.readingTime.text}</span>
          </Flex>
        </div>

        <MDXRenderer className="post-body">{post.body}</MDXRenderer>
      </div>

      <hr />
      <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
      <hr />
      <nav className="bottom-nav">
        <h2>Up Next</h2>
        <ul>
          <li>
            {previous && (
              <Link to={previous.frontmatter.slug} rel="prev">
                🔥 {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.frontmatter.slug} rel="next">
                {next.frontmatter.title} 🤟🏻
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
