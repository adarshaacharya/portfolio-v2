import React from 'react';
import { Link } from 'gatsby';
import { FormattedIcon } from '@portfolio-ui/';

import { TabItem, TabLabel, TabItems } from './NavMobile.style';
const NavMobile = () => {
  return (
    <>
      <TabItems>
        <TabItem to="/" activeClassName="active">
          <FormattedIcon name="Home" />
          <TabLabel>Home</TabLabel>
        </TabItem>

        <TabItem to="/projects/" activeClassName="active">
          <FormattedIcon name="Project" />
          <TabLabel>Projects</TabLabel>
        </TabItem>

        <TabItem to="/blog/" activeClassName="active">
          <FormattedIcon name="Blog" />
          <TabLabel>Blog</TabLabel>
        </TabItem>

        <TabItem to="/contact/" activeClassName="active">
          <FormattedIcon name="Contact" />
          <TabLabel>Contact</TabLabel>
        </TabItem>
      </TabItems>
    </>
  );
};

export default NavMobile;
