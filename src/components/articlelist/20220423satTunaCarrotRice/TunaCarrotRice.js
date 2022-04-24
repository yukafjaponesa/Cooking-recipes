import React from 'react';
import picture1 from './20220423tunacarrotrice.jpg';

function TunaCarrotRice() {
  return (
    <div>
      <h1>Tuna Carrot Rice ツナと人参の炊き込みご飯</h1>
      <h3>Sat 23.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tuna-carrot-rice' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rice 2 cups</li>
            <li>Carrot 1/2</li>
            <li>Tuna can 1(70g)</li>
            <li>Mentsuyu 2 tbsp</li>
            <li>Powder dashi 1 pack</li>
            <li>Salt 1/3 tsp or no salt</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add rice and water a bit less than 2 cups line</li>
          <li>Add dashi, mentsuyu (and salt) and mix</li>
          <li>Add carrot and tuna on top of it and cook</li>
        </ol>
      </div>
    </div>
  )
}

export default TunaCarrotRice;
