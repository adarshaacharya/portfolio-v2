import React from 'react';

import Layout from '@components/Layout';
import usePosts from '@hooks/use-posts';
import SEO from '@components/Seo';
import { SectionTitle } from '@portfolio-ui/';
import BlogPreview from '@src/components/BlogPreview/';

export default function Blog() {
  const blogs = usePosts();

  return (
    <Layout>
      <SEO title={`Blogs`} />
      <SectionTitle>Blogs.</SectionTitle>

      {blogs.map(blog => (
        <BlogPreview blog={blog} key={blog.slug} />
      ))}
    </Layout>
  );
}
