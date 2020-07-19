import React, { useContext } from 'react';
import Switch from 'react-switch';
import styled from 'styled-components';

import ThemeToggleContext from '@context/ThemeToggleContext';
import Sun from '@images/toggle/sun.png';
import Moon from '@images/toggle/moon.png';

const SwitchWrapper = styled(Switch)`
  .sun {
    height: 22px;
    width: auto;
    padding: 2px 0 0 8px;
  }

  .moon {
    height: 20px;
    width: auto;
    padding: 2px 0 0 7px;
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
        checkedIcon={<img src={Moon} alt="moon icon" className="moon" />}
        uncheckedIcon={<img src={Sun} alt="sun icon" className="sun"  />}
        boxShadow="0 0 2px 3px #2D85F4"
        activeBoxShadow="0 0 2px 3px #2D85F4"
        handleDiameter={23}
        height={25}
        width={55}
        aria-checked={theme === 'dark' ? true : false}
      />
    </>
  );
};
