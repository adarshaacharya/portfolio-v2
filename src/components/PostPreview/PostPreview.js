import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import {
  PostItem,
  PostTitle,
  Description,
  DateTime,
  Tags,
} from './PostPreview.style';

const PostPreview = ({
  post: { title, date, tags, readingTime, slug, description },
}) => {
  return (
    <PostItem to={`/${slug}`} key={title}>
      <DateTime>
        📅 {date} &nbsp; 🕒 {readingTime}
      </DateTime>
      <PostTitle>{title}</PostTitle>

      <Description>{description}</Description>

      <Tags>
        {tags.map(tag => (
          <span key={tag} className={`tag-${tag}`}>
            {tag}
          </span>
        ))}
      </Tags>
    </PostItem>
  );
};

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostPreview;
