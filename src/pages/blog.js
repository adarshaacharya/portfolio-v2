import React from 'react';

import Layout from '../components/Layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/PostPreview';
import SEO from '../components/Seo';
import { SectionTitle } from '@portfolio-ui/';

export default function Blog() {
  const posts = usePosts();

  return (
    <Layout>
      <SEO title={`Blogs`} />
      <SectionTitle>Read my blogs.</SectionTitle>

      {posts.map(post => (
        <PostPreview post={post} key={post.slug} />
      ))}
    </Layout>
  );
}
