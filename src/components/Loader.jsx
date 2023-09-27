import React from 'react';
import { HashLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <HashLoader color="#a034a2" />
    </div>
  );
};

export default Loader;
