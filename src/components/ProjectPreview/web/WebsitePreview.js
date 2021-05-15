import React from 'react';
import PropTypes from 'prop-types';
import { FormattedIcon } from '@portfolio-ui/';

import {
  WebsitePreviewWrapper,
  Website,
  WebsiteLinks,
  WebsiteLink,
  WebsiteImgContainer,
  WebsiteImg,
  WebsiteTitleContainer,
  WebsiteTitle,
  WebsiteDescription,
  TechList,
} from './Website.style';
import { useSfx } from '@hooks/use-sfx';

const WebsitePreview = ({
  website: { title, repo, demo, description, thumbnail, techs },
}) => {
  const { playPop } = useSfx();

  return (
    <>
      <WebsitePreviewWrapper>
        <Website>
          <WebsiteImgContainer href={demo ? demo : repo} onMouseEnter={playPop}>
            <WebsiteImg image={thumbnail} alt={title} />
          </WebsiteImgContainer>

          <WebsiteTitleContainer href={demo ? demo : repo}>
            <WebsiteTitle>{title}</WebsiteTitle>
          </WebsiteTitleContainer>

          <WebsiteLinks>
            {repo && (
              <WebsiteLink href={repo} aria-label="GitHub Link">
                <FormattedIcon name="GitHub" />
              </WebsiteLink>
            )}
            {demo && (
              <WebsiteLink href={demo} aria-label="External Link">
                <FormattedIcon name="External" />
              </WebsiteLink>
            )}
          </WebsiteLinks>

          <WebsiteDescription>{description}</WebsiteDescription>

          <TechList>
            {techs.map(tech => (
              <li key={tech}>{tech}</li>
            ))}
          </TechList>
        </Website>
      </WebsitePreviewWrapper>
    </>
  );
};

WebsitePreview.propTypes = {
  website: PropTypes.object.isRequired,
};

export default WebsitePreview;
