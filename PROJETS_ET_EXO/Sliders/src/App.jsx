import React, { useState } from 'react';
import data from './data';

const App = () => {
  const [people, setpeople] = useState(data);
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;

      if (index > people.length - 1) {
        index = 0;
      }

      return index;
    });
  };

  const prev = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;

      if (index < 0) {
        index = people.length - 1;
      }

      return index;
    });
  };

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span></span>
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = 'nextSlide';

          if (personIndex === index) {
            position = 'activeSlide';
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <>
              <article key={id} className={position}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
              </article>
              <button className="prev" onClick={prev}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="next" onClick={next}>
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
