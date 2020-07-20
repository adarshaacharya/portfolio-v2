import React from 'react';
import { Row, Col } from 'react-grid-system';
import { techstack } from '@src/constants/tech-stack';
import SimpleIcon from '@src/hooks/use-simple-icons';
import { SectionTitle, IconPrefix } from '@portfolio-ui/';
import { TechStackWrapper, TechItem } from './TechStack.style';

export default function TechStack() {
  return (
    <TechStackWrapper>
      <SectionTitle align="center">Technologies I've worked with.</SectionTitle>
      <Row>
        {techstack &&
          techstack.map((name, i) => (
            <Col lg={3} md={4} sm={4} xs={6} key={i}>
              <TechItem>
                <SimpleIcon stack={name} />
                <IconPrefix>{name}</IconPrefix>
              </TechItem>
            </Col>
          ))}
      </Row>
    </TechStackWrapper>
  );
}
