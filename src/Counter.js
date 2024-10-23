import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);
  const increment = () => {
    setCount(count + 1);
    console.log('inc');
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }

    console.log('dec');
  };
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
