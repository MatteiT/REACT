import React from 'react';

import { useState } from 'react';

const ShortCircuit = () => {
  const [text, setText] = useState('peter');
  const [isError, setIsError] = useState(false);

  return (
    <>
      {/* <h1>{text && 'hello world'}</h1> */}
      <h1>{text || 'john doe'}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1> error</h1>}
      {isError ? (
        <p>il y a une erreur...</p>
      ) : (
        <div>
          <h2>il n'y a pas d'erreur</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
