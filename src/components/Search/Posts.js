import React from 'react';
import BlogPreview from '../BlogPreview';
import getPosts from '@lib/get-posts';

const Posts = () => {
  const data = getPosts();
  return (
    <>
      {data.map(blog => (
        <BlogPreview blog={blog} key={blog.slug} />
      ))}
    </>
  );
};

export default Posts;
