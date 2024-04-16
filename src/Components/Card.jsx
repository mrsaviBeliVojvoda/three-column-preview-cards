import React from 'react';

const Card = ({ children, color, id }) => {
  const roundedClass =
    id === 1
      ? 'rounded-t-xl lg:rounded-tr-none lg:rounded-bl-xl'
      : id === 2
      ? ''
      : 'rounded-b-xl lg:rounded-l-none lg:rounded-r-xl';

  const classes = 'card ' + roundedClass;

  return (
    <div className={classes} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

export default Card;
