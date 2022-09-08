import React from 'react';
import Tour from './Tour';

const Tours = (props) => {
  const { voyages, removeItem } = props;
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {voyages.map((voyage) => {
          return (
            <Tour voyage={voyage} key={voyage.id} removeItem={removeItem} />
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
