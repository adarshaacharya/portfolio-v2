import React, { useContext } from 'react';
import Switch from 'react-switch';
import styled from 'styled-components';

import { FormattedIcon } from '@portfolio-ui/';

import ThemeToggleContext from '@context/ThemeToggleContext';


const SwitchWrapper = styled(Switch)`
  svg {
    height: 27px;
    transform: rotate(-91.13deg);
  }

  .moon {
    svg {
    }
    /* height: 20px; */
  }
`;

export const ToggleSwitch = () => {
  const { toggleTheme, theme } = useContext(ThemeToggleContext);

  return (
    <>
      <SwitchWrapper
        aria-label="Switch between Dark and Light mode"
        onChange={toggleTheme}
        checked={theme === 'dark' ? true : false}
        onColor="#555"
        offColor="#222"
        checkedIcon={<FormattedIcon name="Moon" className="moon" />}
        uncheckedIcon={<FormattedIcon name="Sun" />}
        boxShadow="0 0 2px 3px #2D85F4"
        activeBoxShadow="0 0 2px 3px #2D85F4"
        handleDiameter={23}
        height={25}
        width={55}
      />
    </>
  );
};
