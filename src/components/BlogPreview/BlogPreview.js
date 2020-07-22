import React from 'react';
import PropTypes from 'prop-types';

import {
  BlogItem,
  BlogTitle,
  Description,
  DateTime,
  Tags,
} from './BlogPreview.style';

import { useSfx } from '@hooks/use-sfx';

const BlogPreview = ({
  blog: { title, date, tags, readingTime, slug, description },
}) => {
  const { playPop, playClick } = useSfx();
  return (
    <BlogItem
      to={'/blog/' + slug}
      key={title}
      onMouseEnter={playPop}
      onClick={playClick}
    >
      <DateTime>
        <span>📅 {date}</span> &nbsp; &nbsp; 🕒 {readingTime}
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
