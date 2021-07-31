import React from 'react';
import picture1 from './20210731breakysand.jpg';

function BreakySandwich() {
  return (
    <div>
      <h1>Breaky Sandwich 朝食サンド</h1>
      <h3>Sat 31.07.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='breaky-sand-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Toast</li>
            <li>Tomato, avocado, cucumer, lettuce</li>
            <li>Egg</li>
            <li>Mayo</li>
            <li>Butter</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Make boiled egg</li>
          <li>Mix it with mayo, salt & pepper</li>
          <li>Slice vegs</li>
          <li>Spread butter on toast and make your own sandwiches</li>
        </ol>
      </div>
    </div>
  )
}

export default BreakySandwich;
