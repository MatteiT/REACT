import React from 'react';
import { useState, useEffect } from 'react';
const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (isLoading) {
    return (
      <main>
        <h1>loading...</h1>
      </main>
    );
  }

  const { company, dates, duties, title } = jobs[value];
  console.log(jobs);

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                className="job-btn"
                key={job.id}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index}>
                <div className="job-desc"></div>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default App;
