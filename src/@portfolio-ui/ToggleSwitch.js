import React, { useContext } from 'react';
import styled from 'styled-components';

import ThemeToggleContext from '@context/ThemeToggleContext';

import moon from '@images/toggle/moon-icon.svg';
import sun from '@images/toggle/sun-icon.svg';

const SwitchWrapper = styled.div`
  cursor: pointer;
  border: none;
  position: relative;

  img {
    background: transparent;
    margin: 0;
  }
`;

// export const ToggleSwitch = () => {
//   const { toggleTheme, theme } = useContext(ThemeToggleContext);

//   return (
//     <SwitchWrapper>
//       <div className="button r" id="button-1">
//         <input
//           className="checkbox"
//           aria-label="toggle theme"
//           type="checkbox"
//           onChange={toggleTheme}
//           checked={theme === 'dark' ? true : false}
//         />
//       </div>
//     </SwitchWrapper>
//   );
// };

export const ToggleSwitch = () => {
  const { toggleTheme, theme } = useContext(ThemeToggleContext);

  return (
    <SwitchWrapper type="button" onClick={toggleTheme}>
      <img src={theme === 'dark' ? sun : moon} alt={theme} />
    </SwitchWrapper>
  );
};
