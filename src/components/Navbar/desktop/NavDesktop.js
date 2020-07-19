import React from 'react';

import { NavItem, NavItems, Logo } from './NavDesktop.style';
import NavDesktopLinks from './NavDesktopLinks';

const NavDesktop = () => {
  return (
    <>
      <Logo to="/">
        <span>aada</span>
        rsha
      </Logo>

      <nav>
        <NavItems>
          <NavDesktopLinks NavItem={NavItem} />
        </NavItems>
      </nav>
    </>
  );
};

export default NavDesktop;
