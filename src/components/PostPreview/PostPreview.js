import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { PostPreviewWrapper } from './PostPreview.style';

const PostPreview = ({
  post: { title, date, tags, readingTime, slug, description },
}) => {
  return (
    <PostPreviewWrapper>
      <Link to={`/${slug}`} key={title}>
        <div className="post">
          <h2>{title}</h2>
          <div className="prefix">
            <div className="date">{date}</div>
            <div className="reading-time"> {readingTime}</div>
          </div>
          <p>{description}</p>

          <ul className="tags">
            {tags.map(tag => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
        </div>
      </Link>
    </PostPreviewWrapper>
  );
};

// PostPreview.propTypes = {
//   title: PropTypes.string.isRequired,
//   slug: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   tags: PropTypes.array.isRequired,
//   readingTime: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
// };
export default PostPreview;
