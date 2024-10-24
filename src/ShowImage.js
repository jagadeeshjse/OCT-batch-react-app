import React from 'react';

const ShowImage = (props) => {
  const { id, title, url } = props;
  return (
    <div className="data">
      <img src={url} alt={title} />
      <h4>title</h4> <p>{title}</p>
      <button>click more</button>
    </div>
  );
};

export default ShowImage;
