import React from 'react';

import { NavWrapper, NavContent, TabBarWrapper } from './Navbar.style';
import NavDesktop from './desktop/NavDesktop';
import TabBar from './mobile/TabBar';

 const Navbar = () => {
  return (
    <header>
      <NavWrapper>
        <NavContent>
          <NavDesktop />
        </NavContent>
      </NavWrapper>

      <TabBarWrapper>
        <TabBar />
      </TabBarWrapper>
    </header>
  );
};


export default Navbar 
