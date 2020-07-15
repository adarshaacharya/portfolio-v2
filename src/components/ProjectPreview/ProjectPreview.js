import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FormattedIcon, ExternalLinkContainer } from '@portfolio-ui/';

import {
  ProjectPreviewWrapper,
  Project,
  ProjectLinks,
  ProjectLink,
  ProjectImgContainer,
  ProjectImg,
  ProjectTitleContainer,
  ProjectTitle,
  ProjectDescription,
  TechList,
} from './ProjectPreview.style';

const ProjectPreview = ({
  project: { title, repo, demo, description, thumbnail, techs },
}) => {
  return (
    <>
      <ProjectPreviewWrapper>
        <Project>
          <ProjectImgContainer href={demo ? demo : repo}>
            <ProjectImg fluid={thumbnail} alt={title} />
          </ProjectImgContainer>

          <ProjectTitleContainer href={demo ? demo : repo}>
            <ProjectTitle>{title}</ProjectTitle>
          </ProjectTitleContainer>

          <ProjectLinks>
            {repo && (
              <ProjectLink href={repo} aria-label="GitHub Link">
                <FormattedIcon name="GitHub" />
              </ProjectLink>
            )}
            {demo && (
              <ProjectLink href={demo} aria-label="External Link">
                <FormattedIcon name="External" />
              </ProjectLink>
            )}
          </ProjectLinks>

          <ProjectDescription>{description}</ProjectDescription>

          <TechList>
            {techs.map(tech => (
              <li>{tech}</li>
            ))}
          </TechList>
        </Project>
        <hr />
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
