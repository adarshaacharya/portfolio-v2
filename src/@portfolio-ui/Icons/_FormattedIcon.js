import React from 'react';
import PropTypes from 'prop-types';

import {
  IconExternal,
  IconGitHub,
  IconLinkedin,
  IconTwitter,
  IconHome,
  IconBlog,
  IconProject,
  IconContact,
  IconSun,
  IconMoon,
} from '@portfolio-ui/Icons';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;

    case 'Linkedin':
      return <IconLinkedin />;

    case 'Twitter':
      return <IconTwitter />;

    case 'External':
      return <IconExternal />;

    case 'Home':
      return <IconHome />;

    case 'Project':
      return <IconProject />;

    case 'Blog':
      return <IconBlog />;

    case 'Contact':
      return <IconContact />;

    case 'Sun':
      return <IconSun />;

    case 'Moon':
      return <IconMoon />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
