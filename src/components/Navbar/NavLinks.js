import { ToggleSwitch } from '@portfolio-ui';
import { Link } from 'gatsby';
import React from 'react';

const NavLinks = ({ NavItem }) => {
  return (
    <>
      <NavItem>
        <Link to="/projects/" activeClassName="active">
          Projects
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/blog/" activeClassName="active">
          Blogs
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
