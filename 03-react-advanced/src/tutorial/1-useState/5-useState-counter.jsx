import { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const plus = () => {
    setValue(value + 1);
  };

  const minus = () => {
    setValue(value - 1);
  };

  const reset = () => {
    setValue(0);
  };

  const complexeIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section>
        <h2>compteur regulier</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={minus}>
          décrementer
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={plus}>
          incrémenter
        </button>
      </section>
      <section>
        <h2>compteur plus complexe</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexeIncrease}>
          incrémenter
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
