import React from 'react';
import PropTypes from 'prop-types';

import { IconExternal, IconGitHub } from '@portfolio-ui/Icons';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;

    case 'External':
      return <IconExternal />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
