import Comment from '@components/Comment';
import Layout from '@components/Layout';
import SEO from '@components/Seo';
import useDarkMode from '@hooks/use-dark-mode';
import { Flex } from '@portfolio-ui/';
import Subscribe from '@src/components/Subscribe';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import { commentsRepo } from '../../config/SiteConfig';

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
  const commentBox = React.createRef();
  const { theme } = useDarkMode();

  const post = data.mdx;
  const { previous, next, slug } = pageContext;

  React.useEffect(() => {
    const commentScript = document.createElement('script');

    // theme for github
    const commentsTheme =
      theme && theme === 'dark' ? 'github-dark' : 'github-light';

    commentScript.async = true;
    commentScript.src = 'https://utteranc.es/client.js';
    commentScript.setAttribute('repo', commentsRepo);
    commentScript.setAttribute('issue-term', 'pathname');
    commentScript.setAttribute('label', 'blog-comment');
    commentScript.setAttribute('theme', commentsTheme);
    commentScript.setAttribute('crossorigin', 'anonymous');
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript);
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`);
    }

    const removeScript = () => {
      commentScript.remove();
      document.querySelectorAll('.utterances').forEach(el => el.remove());
    };
    // clean up on component unmount
    return () => {
      removeScript();
    };
  }, [theme]); // eslint-disable-line

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        author={post.frontmatter.author}
        description={post.frontmatter.description}
        keywords={post.frontmatter.tags}
        slug={`/blog/${slug}`}
        isBlogPost
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
            🍿 {post.fields.readingTime.text}
          </span>
        </Flex>
      </PostHeader>

      <hr />

      <div className="blog-content">
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>

      <hr />

      <div id="comments">
        <h2>Comments</h2>
        <Comment ref={commentBox} />
      </div>

      {/* recommendation */}
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
      <Subscribe />
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
        tags
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
