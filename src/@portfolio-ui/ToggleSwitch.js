import ThemeToggleContext from '@context/ThemeToggleContext';

import React, { useContext } from 'react';
import styled from 'styled-components';

const SwitchWrapper = styled.div``;

const ToggleSwitch = () => {
  const { toggleTheme, theme } = useContext(ThemeToggleContext);

  return (
    <SwitchWrapper>
      <div className="button r" id="button-1">
        <input
          className="checkbox"
          aria-label="toggle theme"
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === 'dark' ? true : false}
        />
      </div>
    </SwitchWrapper>
  );
};

export default ToggleSwitch;
