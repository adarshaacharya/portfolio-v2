import Layout from '@components/Layout';
import SEO from '@components/Seo';
import getPosts from '@lib/get-posts';
import { SectionTitle } from '@portfolio-ui/';
import Search from '@src/components/Search';
import React from 'react';

export default function Blog({ ...props }) {
  const blogs = getPosts();
  return (
    <Layout>
      <SEO title={`Blogs`} />
      <SectionTitle>Blogs.</SectionTitle>
      <Search props={props} />
      {/* {blogs.map(blog => (
        <BlogPreview blog={blog} key={blog.slug} />
      ))} */}
    </Layout>
  );
}
