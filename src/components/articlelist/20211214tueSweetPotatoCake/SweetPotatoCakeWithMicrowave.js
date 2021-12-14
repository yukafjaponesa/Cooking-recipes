import React from 'react';
import picture1 from './20211214sweetpotatocake.jpg';

function SweetPotatoCakeWithMicrowave() {
  return (
    <div>
      <h1>Sweet Potato Cake スイートポテトケーキ</h1>
      <h3>Tue 14.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweetpotato-cake-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sweet potato 300g(no skin)</li>
            <li>Sugar 3- 4 tbsp</li>
            <li>Milk or heavy cream 150ml</li>
            <li>Egg 2</li>
            <li>Flour 1 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Steam sweet potato</li>
          <li>Put all in a blender to mix</li>
          <li>Add oil in a pan and cook chicken then add vegs</li>
          <li>Or add sugar, eggs and milk and mix well each time</li>
          <li>Add flour and mix well</li>
          <li>Microwave oven 600w 4 - 5 min or 180℃ oven for 45min</li>
        </ol>
      </div>
    </div>
  )
}

export default SweetPotatoCakeWithMicrowave;
