import React from 'react';
// import ReactDOM from 'react-dom';
import Test from "../src/Test"

const Caro = () => {
  const images = ['Frame41.png', 'Frame43.png', 'Frame43a.png'];

  return (
    <div>
      <h1>React Carousel</h1>
      <Test images={images} interval={1000} /> {/* Adjust interval (in milliseconds) */}
    </div>
  );
};

export default Caro