import { useState } from 'react';
import { data } from './data';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon"></span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => {
            index > 0 ? setIndex(index - 1) : setIndex(data.length - 1);
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="next-btn"
          onClick={() => {
            index < data.length - 1 ? setIndex(index + 1) : setIndex(0);
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <button
        className="random-btn"
        onClick={() => {
          const random = Math.floor(Math.random() * data.length);
          setIndex(random);
        }}
      >
        random
      </button>
    </article>
  );
};

export default Review;
