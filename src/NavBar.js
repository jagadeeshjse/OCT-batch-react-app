import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <button className="btn-nav">Home</button>
      </Link>
      <Link to="/counter">
        <button className="btn-nav">counter</button>
      </Link>
      <Link to="/form">
        <button className="btn-nav">form</button>
      </Link>
      <Link to="/meal-comp">
        <button className="btn-nav">meal comp</button>
      </Link>
      <Link to="show-data">
        <button className="btn-nav">show data</button>
      </Link>
      <Link to="/about">
        <button className="btn-nav">about</button>
      </Link>
    </div>
  );
};

export default NavBar;
