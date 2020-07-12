import { useLogo } from '@hooks/use-logo';
import { Link } from 'gatsby';
import React from 'react';
import { NavItem, NavItems } from './Navbar.style';
import NavLinks from './NavLinks';

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
          <NavLinks NavItem={NavItem} />
        </NavItems>
      </nav>
    </>
  );
};

export default NavDesktop;
