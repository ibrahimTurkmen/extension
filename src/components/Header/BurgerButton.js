import React from "react";

export const BurgerButton = ({isDrawerOpen,toggleDrawer}) => {
  return (
    <div
      className={isDrawerOpen ? " menu-btn-1 active" : "menu-btn-1 close"}
      onClick={toggleDrawer}
    >
      <span></span>
    </div>
  );
};
