import React from 'react';
import { ToggleSwitch } from '@portfolio-ui';
import { Link } from 'gatsby';
import { useSfx } from '@hooks/use-sfx';

const NavLinks = ({ NavItem }) => {
  const { playClick, playPop } = useSfx();
  return (
    <>
      <NavItem>
        <Link to="/projects/" activeClassName="active" onClick={playClick}>
          Projects
        </Link>
      </NavItem>
      <NavItem>
        <Link
          to="/blog/"
          activeClassName="active"
          partiallyActive={true}
          onClick={playClick}
        >
          Blog
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/contact/" activeClassName="active" onClick={playClick}>
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
