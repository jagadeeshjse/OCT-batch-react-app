import React from 'react';
import './styles/hotel.css';
import Hotel from './Hotel';

import { hotelData } from './hotelData';
import Counter from './Counter';

console.log('hotelData', hotelData);

const App = () => {
  return (
    <div className="main">
      {/* {hotelData.map((data) => {
        return <Hotel name={data.title} image={data.thumbnailUrl} />;
      })} */}
      <Counter />
    </div>
  );
};

export default App;
