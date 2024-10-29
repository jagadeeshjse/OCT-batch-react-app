import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate('/about');
  };
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, placeat
        quod! Excepturi reprehenderit ab dignissimos dicta fuga, officia
        repellendus ullam?
      </p>
      <button onClick={goTo}>Go to about page</button>
    </div>
  );
};

export default Home;
