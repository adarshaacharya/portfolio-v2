import React from 'react';
import Icon from '@hooks/use-icons';
import { SOCIALS } from '@src/constants/social';
import { SectionTitle, Flex, IconPrefix } from '@portfolio-ui/';
import { SocialWrapper } from './Contact.style';

const SocialIcons = () => {
  return (
    <>
      <SocialWrapper>
        <SectionTitle>Hit me up.</SectionTitle>
        <Flex justify="space-between">
          {SOCIALS.data.map((el, i) => (
            <div key={i}>
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
