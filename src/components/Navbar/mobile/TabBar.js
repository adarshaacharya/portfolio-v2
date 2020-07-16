import React from 'react';
import NavMobile from './NavMobile';
import { TabItem, TabLabel, TabItems } from './TabBar.style';
import TabLinks from './TabBarLinks';

const TabBar = () => {
  return (
    <>
      <NavMobile />
      <TabItems>
        <TabLinks TabItem={TabItem} TabLabel={TabLabel} />
      </TabItems>
    </>
  );
};

export default TabBar;
