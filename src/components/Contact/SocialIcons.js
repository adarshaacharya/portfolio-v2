import React from 'react';
import styled from 'styled-components';
import SimpleIcon from '@src/hooks/use-simple-icons';
import { SOCIALS } from '@src/constants/social';
import { ExternalLink, Flex, IconPrefix } from '@portfolio-ui/';

const SocialIconsContainer = styled(Flex)`

`;

const SocialIcons = () => {
  return (
    <>
      <SocialIconsContainer justify="space-between">
        {SOCIALS.data.map((el, i) => (
          <div key={i}>
            <SimpleIcon stack={el.social} />
            <IconPrefix>
              <ExternalLink href={el.link}>{el.social}</ExternalLink>
            </IconPrefix>
          </div>
        ))}
      </SocialIconsContainer>
    </>
  );
};

export default SocialIcons;
