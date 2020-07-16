import React from 'react';
import { FormattedIcon } from '@portfolio-ui/';

const TabBarLinks = ({ TabItem, TabLabel }) => {
  return (
    <>
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
    </>
  );
};

export default TabBarLinks;
