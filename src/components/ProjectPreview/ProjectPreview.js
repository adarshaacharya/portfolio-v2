import Icon from '@hooks/use-icons';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import { ProjectPreviewWrapper } from './ProjectPreview.style';

const ProjectPreview = ({
  project: { title, repo, demo, description, currentImg },
}) => {
  return (
    <>
      <ProjectPreviewWrapper>
        <Image fluid={currentImg} alt={title} />
        <div>
          <h3>{title}</h3>

          <p>{description}</p>

          <div className="project-links">
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="repo"
            >
              {' '}
              <Icon stack="GitHub" key="github" className="github" />
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="demo"
            >
              Demo &rarr;
            </a>
          </div>
        </div>
      </ProjectPreviewWrapper>
    </>
  );
};

// ProjectPreview.propTypes = {
//   title: PropTypes.string.isRequired,
//   repo: PropTypes.string.isRequired,
//   demo: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   currentImg: PropTypes.string.isRequired,
// };

export default ProjectPreview;
