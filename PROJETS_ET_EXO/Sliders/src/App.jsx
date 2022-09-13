import React, { useState } from 'react';
import data from './data';

const App = () => {
  const [people, setpeople] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span></span>
        </h2>
      </div>
      <div className="section-center">
        {people.map((person) => {
          const { id, image, name, title, quote } = person;
          return (
            <>
              <article key={index}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
              </article>
              <button
                className="prev"
                onClick={() => {
                  index > 0 ? setIndex(index - 1) : setIndex(data.length - 1);
                }}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                className="next"
                onClick={() => {
                  index < data.length - 1 ? setIndex(index + 1) : setIndex(0);
                }}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default App;
