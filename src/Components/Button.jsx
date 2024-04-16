import React, { useState } from 'react';

const Button = ({ color }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    color: isHovered ? '#f2f2f2' : color,
    backgroundColor: isHovered ? color : '#f2f2f2',
    border: isHovered ? '1px solid white' : 'none',
  };

  return (
    <button
      type='button'
      className='btn'
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Learn More
    </button>
  );
};

export default Button;
