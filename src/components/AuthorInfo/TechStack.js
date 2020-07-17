import React from 'react';
import { Row, Col } from 'react-grid-system';
import { TECHS } from '@src/constants/stack';
import SimpleIcon from '@src/hooks/use-simple-icons';
import { SectionTitle, IconPrefix } from '@portfolio-ui/';
import { TechStackWrapper, TechItem } from './TechStack.style';

export default function TechStack() {
  return (
    <TechStackWrapper>
      <SectionTitle align="center">Technologies I've worked with.</SectionTitle>
      <Row>
        {TECHS.data.map(tech => (
          <Col lg={3} md={4} sm={4} xs={6} key={tech}>
            <TechItem>
              <SimpleIcon stack={tech} />
              <IconPrefix>{tech}</IconPrefix>
            </TechItem>
          </Col>
        ))}
      </Row>
    </TechStackWrapper>
  );
}
