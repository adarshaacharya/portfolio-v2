import React from 'react';
import ToolsPreview from './ToolPreview';
import { ToolsList } from './Tools.style';
import PropTypes from 'prop-types';

const Tools = ({ tools }) => {
  return (
    <ToolsList>
      {tools.map(tool => (
        <ToolsPreview tool={tool} key={tool.title} />
      ))}
    </ToolsList>
  );
};

Tools.propTypes = {
  tools: PropTypes.array.isRequired,
};

export default Tools;
