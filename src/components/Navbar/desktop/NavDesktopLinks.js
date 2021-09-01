import React from 'react';
import { ToggleSwitch } from '@portfolio-ui';
import { Link } from 'gatsby';
import { useSfx } from '@hooks/use-sfx';

const NavLinks = ({ NavItem }) => {
  const { playPop } = useSfx();

  return (
    <>
      <NavItem>
        <Link to="/projects/" activeClassName="active">
          Projects
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/blog/" activeClassName="active" partiallyActive={true}>
          Blog
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/contact/" activeClassName="active">
          Contact
        </Link>
      </NavItem>
      <NavItem className="active" onClick={playPop}>
        <ToggleSwitch />
      </NavItem>
    </>
  );
};

export default NavLinks;
