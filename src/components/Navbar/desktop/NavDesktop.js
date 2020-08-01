import React from 'react';

import { NavItem, NavItems, Logo } from './NavDesktop.style';
import NavDesktopLinks from './NavDesktopLinks';
import { useSfx } from '@hooks/use-sfx';

const NavDesktop = () => {
  const { playClick } = useSfx();
  return (
    <>
      <Logo to="/" onClick={playClick}>
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
