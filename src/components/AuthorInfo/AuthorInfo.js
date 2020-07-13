import React from 'react';

import useAvatar from '@src/hooks/use-avatar';
import { Flex } from '@portfolio-ui/';
import download from '@images/download.svg';

import { AuthorInfoWrapper, Avatar, ResumeWrapper } from './AuthorInfo.style';
import TechStack from './TechStack';

export default function AuthorInfo() {
  const photo = useAvatar();

  return (
    <>
      <AuthorInfoWrapper>
        <Avatar fixed={photo} alt="adarsha" />
        <Flex>
          <img src={download} alt="Resume" />
          <a
            href="https://drive.google.com/file/d/1yRn7sCfYR29rYTFr8dpLe0CnAyZQod-c/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </Flex>
      </AuthorInfoWrapper>

      <TechStack />
    </>
  );
}
