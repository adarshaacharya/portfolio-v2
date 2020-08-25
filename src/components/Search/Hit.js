import BlogPreview from '@components/BlogPreview';
import PropTypes from 'prop-types';
import React from 'react';

const Hit = props => {
  const { hit } = props;

  const blog = {
    ...hit,
    readingTime: hit.fields.readingTime.text,
  };

  return (
    <>
      <BlogPreview blog={blog} />
    </>
  );
};

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;
