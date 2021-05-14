import React from 'react';
import picture1 from './20210514thaiholybasil.jpg';

function ThaiHolyBasil() {
  return (
    <div>
      <h1>Thai Holy Basil with minced meat タイガパオライス</h1>
      <h3>Fri 14.05.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='thaiholybasil-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Holy Basil sauce</li>
            <li>Onion</li>
            <li>Paprika</li>
            <li>Minced meat</li>
            <li>Baril for topping</li>
            <li>Egg</li>
            <li>Rice</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Start cooking rice</li>
          <li>Chop onion and paprika</li>
          <li>Stir fry meat and add vegs</li>
          <li>Put sauce and mix together</li>
          <li>Make fried egg</li>
        </ol>
      </div>
    </div>
  )
}

export default ThaiHolyBasil;
