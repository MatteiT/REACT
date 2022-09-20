import { useEffect } from 'react';
import { useState, useRef } from 'react';

// ne déclenche pas de nouveau rendu
// cibler élements / noeuds du DOM
// préserve la valeur comme useState

const useRefBasics = () => {
  const divContainer = useRef(null);
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(divContainer.current);
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    refContainer.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" ref={refContainer} />
        <button type="submit">soumettre</button>
      </form>
      <div ref={divContainer}>Hello world</div>
    </>
  );
};

export default useRefBasics;
