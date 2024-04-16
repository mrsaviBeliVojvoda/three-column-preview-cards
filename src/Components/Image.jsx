import React from 'react';

const Image = ({ title, img }) => {
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  );
};

export default Image;
