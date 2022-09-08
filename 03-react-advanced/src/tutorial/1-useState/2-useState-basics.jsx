import React from 'react';
import { useState } from 'react';

//* tous les hooks commencent par use...
//* le nom d'un composant commence par une majuscule sinon => erreur
//* un hook doit être dans une fonction/le body d'un composant
//* ne peut pas être appeler dans une condition

const UseStateBasics = () => {
  const [text, setText] = useState('titre au pif');

  const handleClick = () => {
    if (text === 'titre au pif') {
      setText('hello world');
    } else {
      setText('titre au pif');
    }
  };

  return (
    <>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        changer le titre
      </button>
    </>
  );
};

export default UseStateBasics;
