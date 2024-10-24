import React, { useEffect, useState } from 'react';
import ShowImage from './ShowImage';
import './showImage.css';

const URL = 'https://jsonplaceholder.typicode.com/photos';

const ShowImageData = () => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const imgData = await response.json();
        setData(imgData);
      } catch (error) {
        console.log('error', error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="imgData">
      {data.map((eachData) => {
        const { id, title, thumbnailUrl } = eachData;
        return <ShowImage id={id} title={title} url={thumbnailUrl} />;
      })}
    </div>
  );
};

export default ShowImageData;
