import React from 'react';
import { useState } from 'react';
import data from './data';
import Question from './Questions';

const App = () => {
  const [questionId, setQuestionId] = useState(0);
  return (
    <main>
      <div className="container">
        <h3></h3>
        <section className="info">
          {data.map((question) => {
            return <Question question={question} questionId={questionId} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
