import React from 'react';
import picture1 from './20220722cheeseseaweedpotato.jpg';

function CheeseSeaweedPotato() {
  return (
    <div>
      <h1>Cheese Seaweed Potato じゃがいもの海苔チーズ炒め</h1>
      <h3>Fri 22.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='potato-cheese-seaweed' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Potato 2 smalls</li>
            <li>Oil 1 1/2 tbsp</li>
            <li>Seaweed(青のり) 1 tsp</li>
            <li>Powedered cheese1 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Peel ppotato skin and rest in water</li>
          <li>Cut in pieces</li>
          <li>Add oil in a pan and cook potato</li>
          <li>Add seaweed and cheese</li>
        </ol>
      </div>
    </div>
  )
}

export default CheeseSeaweedPotato;
