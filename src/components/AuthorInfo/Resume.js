import React from 'react';
import { Flex, ExternalLink } from '@portfolio-ui/';
import { FormattedIcon } from '@portfolio-ui/';
import styled from 'styled-components';
import { SvgAnimation } from '@src/@portfolio-ui';

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
      <FormattedIcon name="Resume" />
      <ExternalLink href="https://drive.google.com/file/d/1yRn7sCfYR29rYTFr8dpLe0CnAyZQod-c/view">
        View Resume
      </ExternalLink>
    </ResumeWrapper>
  </Flex>
);

export default Resume;
