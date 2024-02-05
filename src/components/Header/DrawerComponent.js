// DrawerComponent.js

import React from 'react';

const DrawerComponent = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <nav className={isDrawerOpen ? 'drawer open' : 'drawer'}>
      <ul>
        <li>Menü 1</li>
        <li>Menü 2</li>
      </ul>
      <button onClick={toggleDrawer}>Kapat</button>
    </nav>
  );
};

export default DrawerComponent;
