import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        montrer / cacher
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checksize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checksize);
    return () => {
      window.addEventListener('resize', checksize);
    };
  });

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>fenetre</h1>
      <h2>taille : {size}PX</h2>
    </div>
  );
};
export default ShowHide;
