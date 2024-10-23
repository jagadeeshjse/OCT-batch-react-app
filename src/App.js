import React from 'react';
import './styles/hotel.css';
import Hotel from './Hotel';

import { hotelData } from './hotelData';
import Counter from './Counter';
import ShowData from './ShowData';
import Form from './Form';

console.log('hotelData', hotelData);

const App = () => {
  return (
    <div className="main">
      {/* {hotelData.map((data) => {
        return <Hotel name={data.title} image={data.thumbnailUrl} />;
      })} */}
      {/* <Counter /> */}
      {/* <ShowData /> */}
      <Form />
    </div>
  );
};

export default App;
