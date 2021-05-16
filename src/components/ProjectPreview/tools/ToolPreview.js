import React from 'react';
import PropTypes from 'prop-types';
import { ToolPreviewWrapper, TechList } from './Tools.style';
import Link from 'gatsby-link';
import { ExternalLink } from '@src/@portfolio-ui';
import { FormattedIcon } from '@portfolio-ui/';

const ToolsPreview = ({
  tool: { title, repo, external, description, techs },
}) => {
  return (
    <>
      <ToolPreviewWrapper>
        <h3 className="tools-title">
          <ExternalLink href={repo}>{title}</ExternalLink>
        </h3>

        <p className="tools-info">{description}</p>

        {techs.length > 0 && (
          <ul className="tech-list">
            {techs.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        )}

        <div className="tools-links">
          {repo && (
            <ExternalLink href={repo} aria-label="GitHub Link">
              <FormattedIcon name="GitHub" />
            </ExternalLink>
          )}
          {external && (
            <ExternalLink href={external} aria-label="External Link">
              <FormattedIcon name="External" />
            </ExternalLink>
          )}
        </div>
      </ToolPreviewWrapper>
    </>
  );
};

ToolsPreview.propTypes = {
  tool: PropTypes.object.isRequired,
};

export default ToolsPreview;
