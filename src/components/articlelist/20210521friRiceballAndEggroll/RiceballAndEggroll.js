import React from 'react';
import picture1 from './20210521riceballandeggroll.jpg';

function RiceballAndEggroll() {
  return (
    <div>
      <h1>Rice ball & Egg roll おにぎり&玉子焼き</h1>
      <h3>Fri 21.05.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='riceballeggroll-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rice</li>
            <li>Seasonings(Furikake)</li>
            <li>For Egg roll</li>
            <li>3 Eggs</li>
            <li>Spinach, parsely, corn, salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Start cooking rice</li>
          <li>Mix with seasonings and make a triangle shape</li>
          <li>Mix egg in a bowl with toppings</li>
          <li>Use tamago-yaki pan to roll the egg</li>
        </ol>
      </div>
    </div>
  )
}

export default RiceballAndEggroll;
