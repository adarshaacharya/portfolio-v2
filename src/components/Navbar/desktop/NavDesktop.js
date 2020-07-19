import React from 'react';

import { useLogo } from '@hooks/use-logo';
import { NavItem, NavItems, Logo } from './NavDesktop.style';
import NavDesktopLinks from './NavDesktopLinks';

const NavDesktop = () => {
  // const logo = useLogo();
  return (
    <>
      <Logo to="/">
        {/* <Image fixed={logo} alt="Aadarsha" className="nav-image" /> */}
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
