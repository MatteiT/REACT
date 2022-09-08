import React from 'react';

const ErrorExample = () => {
  let title = 'titre au pif';

  const handleClick = () => {
    title = 'hello world';
  };

  return (
    <>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>
        changer le titre
      </button>
    </>
  );
};

export default ErrorExample;
