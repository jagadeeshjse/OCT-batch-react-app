import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './reducer';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log('useeffect will excuteon every render');
  //   }, [count]);

  //   console.log(count);
  //   console.log(setCount);
  //   const increment = () => {
  //     setCount(count + 1);
  //     console.log('inc');
  //   };

  //   const decrement = () => {
  //     if (count > 0) {
  //       setCount(count - 1);
  //     }

  //     console.log('dec');
  //   };
  return (
    <div>
      <button onClick={dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
