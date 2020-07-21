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
  IconResume,
  IconEmail,
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

    case 'Resume':
      return <IconResume />;

    case 'Email':
      return <IconEmail />;

    default:
      return null;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
