import React from 'react';
import { TbPlus, TbMinus } from 'react-icons/tb';

const Question = (props) => {
  const { id, title, info } = props.question;
  const { questionId } = props;
  return (
    <article className="question" key={id}>
      <header>
        <h4>{title}</h4>
        <button className="btn">{questionId ? <TbMinus /> : <TbPlus />}</button>
      </header>
      <p>{info}</p>
    </article>
  );
};

export default Question;
