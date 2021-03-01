import React from 'react';
import { FormattedIcon } from '@portfolio-ui/';
import { useSfx } from '@hooks/use-sfx';

const TabBarLinks = ({ TabItem, TabLabel }) => {
  const { playClick } = useSfx();
  return (
    <>
      <TabItem to="/" activeClassName="active" onClick={playClick}>
        <FormattedIcon name="Home" />
        <TabLabel>Home</TabLabel>
      </TabItem>

      <TabItem to="/projects/" activeClassName="active" onClick={playClick}>
        <FormattedIcon name="Project" />
        <TabLabel>Projects</TabLabel>
      </TabItem>

      <TabItem to="/blog/" activeClassName="active" onClick={playClick}>
        <FormattedIcon name="Blog" />
        <TabLabel>Blog</TabLabel>
      </TabItem>

      <TabItem to="/contact/" activeClassName="active" onClick={playClick}>
        <FormattedIcon name="Contact" />
        <TabLabel>Contact</TabLabel>
      </TabItem>
    </>
  );
};

export default TabBarLinks;
