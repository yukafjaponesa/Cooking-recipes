import React from 'react';
import picture1 from './20220508bangbangjisalad.jpg';

function BangbangjiSalad() {
  return (
    <div>
      <h1>Bangbangji Salad バンバンジーサラダ</h1>
      <h3>Sun 08.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='bangbangji-salad' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Miso paste, soy sauce, sesame oil 1/2 tbsp/ea</li>
            <li>Sugar 1 tsp</li>
            <li>White sesame</li>
            <li>Lettuce,  tomato, cucumber</li>
            <li>Chicken 1 stuck</li>
            <li>Ito togarashi</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Boil chicken and cut in stripes</li>
          <li>Cut vegs</li>
          <li>Mix sauce</li>
        </ol>
      </div>
    </div>
  )
}

export default BangbangjiSalad;
