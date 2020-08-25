import Layout from '@components/Layout';
import SEO from '@components/Seo';
import getPosts from '@lib/get-posts';
import { SectionTitle } from '@portfolio-ui/';
import BlogPreview from '@src/components/BlogPreview/';
import React from 'react';

export default function Blog() {
  const blogs = getPosts();
  console.log(blogs)
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
