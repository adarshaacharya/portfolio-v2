import React from 'react';
import PropTypes from 'prop-types';
import { FormattedIcon } from '@portfolio-ui/';

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
import { useSfx } from '@hooks/use-sfx';

const ProjectPreview = ({
  project: { title, repo, demo, description, thumbnail, techs },
}) => {
  const { playPop } = useSfx();

  return (
    <>
      <ProjectPreviewWrapper>
        <Project>
          <ProjectImgContainer href={demo ? demo : repo} onMouseEnter={playPop}>
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
              <li key={tech}>{tech}</li>
            ))}
          </TechList>
        </Project>
      </ProjectPreviewWrapper>
    </>
  );
};

ProjectPreview.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectPreview;
