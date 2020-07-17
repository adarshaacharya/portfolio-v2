import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import {
  BlogItem,
  BlogTitle,
  Description,
  DateTime,
  Tags,
} from './BlogPreview.style';

const BlogPreview = ({
  blog: { title, date, tags, readingTime, slug, description },
}) => {
  return (
    <BlogItem to={'/blog/' + slug} key={title}>
      <DateTime>
        📅 {date} &nbsp; 🕒 {readingTime}
      </DateTime>
      <BlogTitle>{title}</BlogTitle>

      <Description>{description}</Description>

      <Tags>
        {tags.map(tag => (
          <span key={tag} className={`tag-${tag}`}>
            {tag}
          </span>
        ))}
      </Tags>
    </BlogItem>
  );
};

BlogPreview.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogPreview;
