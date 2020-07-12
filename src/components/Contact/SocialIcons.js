import React from 'react';
import Icon from '@hooks/use-icons';
import { SOCIALS } from '@src/constants/social';
import { PageTitle, Flex, IconPrefix } from '@portfolio-ui/';
import { SocialWrapper } from './Contact.style';

const SocialIcons = () => {
  return (
    <>
      <SocialWrapper>
        <PageTitle>Hit me up.</PageTitle>
        <Flex justify="space-between">
          {SOCIALS.data.map(el => (
            <div>
              <Icon stack={el.social} />
              <IconPrefix>
                <a href={el.link} target="_blank" rel="noopener noreferrer">
                  {el.social}
                </a>
              </IconPrefix>
            </div>
          ))}
        </Flex>
      </SocialWrapper>
    </>
  );
};

export default SocialIcons;
