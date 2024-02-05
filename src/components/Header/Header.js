import React, { useState, lazy, Suspense, useCallback } from 'react';
import { BurgerButton } from './BurgerButton';
import DrawerComponent from '../Header/DrawerComponent'
// const DrawerComponent = lazy(() => import('./DrawerComponent'));

 const Header = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = useCallback(() => {
        setDrawerOpen((prevState) => !prevState);
      }, []);
    
  return (
    <header style={headerStyle}>
      <div style={leftButtonsContainerStyle}>
        <button className='button-protect'   />
        <button className='button-exclude'   />
      </div>
      <BurgerButton isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>
        {isDrawerOpen && <DrawerComponent  isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>}
    </header>

  )
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    color: '#fff',
};
  
  const leftButtonsContainerStyle = {
    display: 'flex',
  };
  
  const buttonStyle = {
    padding: '8px',
    margin: '0 5px',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    background: 'none'

  };

export default  Header
