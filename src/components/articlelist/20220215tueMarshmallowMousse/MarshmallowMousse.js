import React from 'react';
import picture1 from './20220215marshmallomousse.jpg';
import picture2 from './20220215marshmallow.jpg';

function MarshmallowMousse() {
  return (
    <div>
      <h1>Marshmallow Mousse マシュマロムース</h1>
      <h3>Tue 15.02.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='marshmallo-mousse' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Dark chocolate 30g(5g for topping)</li>
            <li>Heavy cream 150cc</li>
            <li>Milk 50cc</li>
            <li>Marshmallow 50g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop chocolate into small pieces</li>
          <li>Add milk and heavy cream in a pan and cook till short before boiled</li>
          <li>Remove from stove and add chocolate and marshmallo</li>
          <img className='food-pic' src={picture2} alt='marshmallo' />
          <li>Pour in cups and cool down for 1 hour in fridge</li>
        </ol>
      </div>
    </div>
  )
}

export default MarshmallowMousse;
