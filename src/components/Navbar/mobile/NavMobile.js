import React from 'react';
import styled from 'styled-components';

import { ToggleSwitch } from '@portfolio-ui';
import { useSfx } from '@src/hooks/use-sfx';

const MobileNavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  top: 0;
  width: 100%;
  z-index: 99;
  transition: 0.2s ease-out;
`;

const ToggleIcon = styled.div`
  margin: 15px 20px 0 0;
`;

const NavMobile = () => {
  const { playPop } = useSfx();
  return (
    <>
      <MobileNavWrapper>
        <ToggleIcon onClick={playPop}>
          <ToggleSwitch />
        </ToggleIcon>
      </MobileNavWrapper>
    </>
  );
};

export default NavMobile;
