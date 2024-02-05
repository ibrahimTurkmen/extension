import React, { useState } from 'react';

const VPNComponent = () => {
  const [connected, setConnected] = useState(false);

  const handleButtonClick = () => {
    setConnected(!connected); 

  };

  return (
    <div className='vpn-button'>
      <button className={connected ? "connected" : "disconnected"} onClick={handleButtonClick} />
      <p>{connected ? "connected" : "disconnected"} </p>
    </div>
  );
};

export default VPNComponent;
