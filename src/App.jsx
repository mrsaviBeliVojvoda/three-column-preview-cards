import React from 'react';
import Button from './Components/Button';
import Title from './Components/Title';
import Image from './Components/Image';
import Card from './Components/Card';
import ContentText from './Components/ContentText';

import img1 from './assets/icon-sedans.svg';
import img2 from './assets/icon-suvs.svg';
import img3 from './assets/icon-luxury.svg';

const data = [
  {
    id: 1,
    image: img1,
    title: 'sedans',
    text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    color: '#e38826',
  },
  {
    id: 2,
    image: img2,
    title: 'suvs',
    text: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    color: '#006970',
  },
  {
    id: 3,
    image: img3,
    title: 'luxury',
    text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    color: '#004241',
  },
];

const App = () => {
  return (
    <>
      <div className='f-row'>
        {data.map((item) => {
          return (
            <ul key={item.id}>
              <Card id={item.id} color={item.color}>
                <Image title={item.title} img={item.image} />
                <Title title={item.title} />
                <ContentText content={item.text} />
                <Button color={item.color} />
              </Card>
            </ul>
          );
        })}
      </div>
      <div class='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href='https://www.frontendmentor.io/profile/mrsaviBeliVojvoda'>
          mrsaviBeliVojvoda
        </a>
        .
      </div>
    </>
  );
};

export default App;
