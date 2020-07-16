import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { ToggleSwitch } from '@portfolio-ui';

const MobileNavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  top: 0;
  width: 100%;
  z-index: 99;
  transition: 0.2s ease-out;
`;

const ToggleIcon = styled.div`
  border-radius: 50%;
  padding: 15px 20px 0 0;
  color: #f5f5f5;
  &:hover {
    cursor: pointer;
  }
`;

const NavMobile = () => {
  return (
    <>
      <MobileNavWrapper>
        <ToggleIcon>
          <ToggleSwitch />
        </ToggleIcon>
      </MobileNavWrapper>
    </>
  );
};

export default NavMobile;
