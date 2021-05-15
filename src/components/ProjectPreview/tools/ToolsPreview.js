import React from 'react';
import PropTypes from 'prop-types';
import { ToolsPreviewWrapper, TechList } from './Tools.style';

const ToolsPreview = ({
  tool: { title, repo, external, description, techs },
}) => {
  return (
    <>
      <ToolsPreviewWrapper>
        <h3>{title}</h3>
        <a href={repo}>Repo</a>
        <a href={external}>External</a>
        <p>{description}</p>

        {techs.length > 0 && (
          <TechList>
            {techs.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </TechList>
        )}
      </ToolsPreviewWrapper>
    </>
  );
};

ToolsPreview.propTypes = {
  tool: PropTypes.object.isRequired,
};

export default ToolsPreview;
