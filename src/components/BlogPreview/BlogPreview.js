import PropTypes from 'prop-types';
import React from 'react';
import {
  BlogItem,
  BlogTitle,
  DateTime,
  Description,
  Tags,
} from './BlogPreview.style';

const BlogPreview = ({
  blog: { title, date, tags, readingTime, slug, description },
}) => {
  return (
    <BlogItem to={'/blog/' + slug} key={title}>
      <DateTime>
        <span>📅 {date}</span> &nbsp; &nbsp; 🍿 {readingTime}
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
