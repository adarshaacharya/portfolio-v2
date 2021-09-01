import React from 'react';

const Comment = React.forwardRef((props, commentBox) => {
  return <div ref={commentBox} className="comments" />;
});

export default Comment;
