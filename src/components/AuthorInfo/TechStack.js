import React from 'react';
import { Row, Col } from 'react-grid-system';
import { TECHS } from '@src/constants/stack';
import Icon from '@hooks/use-icons';
import { SectionTitle, IconPrefix } from '@portfolio-ui/';
import { TechStackWrapper, TechItem } from './AuthorInfo.style';

export default function TechStack() {
  return (
    <TechStackWrapper>
      <SectionTitle>Technologies I've worked with.</SectionTitle>
      <Row>
        {TECHS.data.map(tech => (
          <Col lg={3} md={4} sm={4} xs={6} key={tech}>
            <TechItem>
              <Icon stack={tech} />
              <IconPrefix>{tech}</IconPrefix>
            </TechItem>
          </Col>
        ))}
      </Row>
    </TechStackWrapper>
  );
}
