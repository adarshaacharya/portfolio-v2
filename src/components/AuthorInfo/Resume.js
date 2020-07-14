import React from 'react';
import { Flex } from '@portfolio-ui/';
import resume from '@images/download.svg';
import styled from 'styled-components';

const ResumeWrapper = styled(Flex)`
  padding-top: 1rem;
  a {
    border-bottom: 2px dashed ${props => props.theme.primaryBlack};
    margin: 0 1rem;
    align-self: center;
  }
`;
const Resume = () => (
  <Flex>
    <ResumeWrapper>
      <img src={resume} alt="adarsha resume" />
      <a
        href="https://drive.google.com/file/d/1yRn7sCfYR29rYTFr8dpLe0CnAyZQod-c/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </a>
    </ResumeWrapper>
  </Flex>
);

export default Resume;
