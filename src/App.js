import React from 'react';
import './styles/hotel.css';
import Hotel from './Hotel';

import { hotelData } from './hotelData';
import Counter from './Counter';
import ShowData from './ShowData';
import Form from './Form';
import ShowImageData from './ShowImageData';
import MealComponent from './MealComponent';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

console.log('hotelData', hotelData);

const App = () => {
  return (
    <div className="main">
      <h1>My React Application</h1>
      {/* {hotelData.map((data) => {
        return <Hotel name={data.title} image={data.thumbnailUrl} />;
      })} */}
      {/* <Counter /> */}
      {/* <ShowData /> */}
      {/* <Form /> */}
      {/* <ShowImageData /> */}
      {/* <MealComponent /> */}
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<Form />} />
          <Route path="/meal-comp" element={<MealComponent />} />
          <Route path="/show-data" element={<ShowData />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
