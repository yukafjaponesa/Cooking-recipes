import React from 'react';
import picture1 from './20220422eastermeatlesslunch.jpg';

function EasterMeatlessLunch() {
  return (
    <div>
      <h1>Easter Meatless Lunch ほうれん草目玉焼き</h1>
      <h3>Fri 22.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='easter-meatless-lunch' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Spinach</li>
            <li>Heavy cream</li>
            <li>Sunny side egg</li>
            <li>Boiled potato</li>
            <li>Pepper & salt</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>I used frozen spinach and heavy cream mix to warm</li>
        </ol>
      </div>
    </div>
  )
}

export default EasterMeatlessLunch;
