import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="section">
      <h2>About Page</h2>
      <Link to="/" className="btn">
        back home
      </Link>
    </section>
  );
};

export default About;
