import React from 'react';
import { ToggleSwitch } from '@portfolio-ui';
import { Link } from 'gatsby';

const NavLinks = ({ NavItem }) => {
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
      <NavItem className="active">
        <ToggleSwitch />
      </NavItem>
    </>
  );
};

export default NavLinks;
