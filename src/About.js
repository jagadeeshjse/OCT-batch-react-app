import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate('/');
  };
  return (
    <div>
      <h1>about page</h1>
      <button onClick={goTo}>Go to Home page</button>
    </div>
  );
};

export default About;
