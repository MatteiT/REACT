import { useState, useEffect } from 'react';

//* par défaut s'execute apres chaque rendu

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('appel de use effect');

    if (value > 0) {
      document.title = `Nouveaux messages (${value})`;
    }
  }, [{ value }]);

  useEffect(() => {
    console.log('hello world');
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        clique-moi
      </button>
    </>
  );
};

export default UseEffectBasics;
