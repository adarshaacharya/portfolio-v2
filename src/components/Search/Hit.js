import PropTypes from 'prop-types';
import React from 'react';
import BlogPreview from '../BlogPreview';

const Hit = props => {
  const { hit } = props;
  return (
    <>
      <BlogPreview blog={hit} />
    </>
  );
};

Hit . propTypes  =  {
    hit: PropTypes.object.isRequired
  }

export default Hit;
