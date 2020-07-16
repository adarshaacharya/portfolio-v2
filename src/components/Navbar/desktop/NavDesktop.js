import { useLogo } from '@hooks/use-logo';
import { Link } from 'gatsby';
import React from 'react';
import { NavItem, NavItems } from './NavDesktop.style';
import NavDesktopLinks from './NavDesktopLinks';
import { ToggleSwitch } from '@portfolio-ui';

const NavDesktop = () => {
  const logo = useLogo();
  return (
    <>
      <Link to="/" className="logo">
        {/* <Image fixed={logo} alt="Aadarsha" className="nav-image" /> */}
        Aadarsha
      </Link>

      <nav>
        <NavItems>
          <NavDesktopLinks NavItem={NavItem} />
        </NavItems>
      </nav>
    </>
  );
};

export default NavDesktop;
