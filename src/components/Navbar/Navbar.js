import React from 'react';

import { Visible } from 'react-grid-system';

import { NavWrapper, NavContent } from './Navbar.style';
import NavDesktop from './desktop/NavDesktop';
import TabBar from './mobile/TabBar';

const Navbar = () => {
  return (
    <header>
      <NavWrapper>
        <NavContent>
          <Visible md lg xl>
            <NavDesktop />
          </Visible>
        </NavContent>
      </NavWrapper>

      <Visible xs sm>
        <TabBar />
      </Visible>
    </header>
  );
};

export default Navbar;
