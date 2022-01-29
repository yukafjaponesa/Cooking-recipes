import React from 'react';
import picture1 from './20220130chiaseedpudding.jpg';

function ChiaseedPudding() {
  return (
    <div>
      <h1>Chiaseed Pudding チアプディング</h1>
      <h3>Sun 30.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chiaseed-pudding' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chiaseed 4 tbsp</li>
            <li>Milk 200ml</li>
            <li>Honey 3- 4 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Mix all and stay over a night</li>
          <li>Topping with fruits and cocnuts chips</li>
          <li>Avocado, kiwi and banan smoothie</li>
        </ol>
      </div>
    </div>
  )
}

export default ChiaseedPudding;
