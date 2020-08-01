import React from 'react';
import Layout from '@components/Layout';
import styled from 'styled-components';
import SEO from '@components/Seo';
import { Flex } from '@portfolio-ui/';
import { DiscussionEmbed } from 'disqus-react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { disqusShortName, siteUrl } from '../../config/data';

const PostHeader = styled.div`
  font-family: ${p => p.theme.UbuntuFontFamily};
  span {
    color: ${p => p.theme.primaryText};
    margin-bottom: 5px;
  }
`;
const PostTitle = styled.h1`
  font-family: ${p => p.theme.UbuntuFontFamily};
  font-size: 1.8rem;
  font-weight: 600;
  padding: 1rem;
  @media ${p => p.theme.media.mobile} {
    font-size: 1.6rem;
    padding: 0.3rem;
  }
`;

// page context from gatsby-node and data from below graphql query
const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.mdx;
  const { previous, next, slug } = pageContext;

  const baseSlugUrl = `${siteUrl}/blog/${slug}`;
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
      <hr />
      <PostHeader>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <Flex justify="space-between">
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
      </PostHeader>

      <hr />

      <div className="blog-content">
        <MDXRenderer>{post.body}</MDXRenderer>
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
