import React from 'react';

import { useState, useEffect } from 'react';

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checksize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checksize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checksize);
    };
  });

  return (
    <>
      <h1>Fenetre</h1>
      <h2>{size}PX</h2>
    </>
  );
};

export default UseEffectCleanup;
