import React from 'react';
import { Flex, ExternalLink } from '@portfolio-ui/';
import { FormattedIcon } from '@portfolio-ui/';
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
      <FormattedIcon name="Resume" />
      <ExternalLink href="https://drive.google.com/file/d/1q3F5F5a_U1Jq-GQDPvvpVqZ0t2H4a9pZ/view">
        View Resume
      </ExternalLink>
    </ResumeWrapper>
  </Flex>
);

export default Resume;
