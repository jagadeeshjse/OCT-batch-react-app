import React, { useState } from 'react';

const ShowData = () => {
  const [display, setDisplay] = useState(false);
  const handleClickBtn = () => {
    setDisplay(!display);
  };
  return (
    <div>
      <button onClick={handleClickBtn}>{display ? 'hide' : 'show'}</button>
      {display ? (
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            blanditiis.
          </p>
        </div>
      ) : (
        <h1>The data is hidden</h1>
      )}
    </div>
  );
};

export default ShowData;

// condition ? true : false
