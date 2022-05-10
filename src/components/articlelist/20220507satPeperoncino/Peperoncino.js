import React from 'react';
import picture1 from './20220507peperoncino.jpg';

function Peperoncino() {
  return (
    <div>
      <h1>Peperoncino ワンパン簡単ペペロンチーノ</h1>
      <h3>Sat 07.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='peperoncino' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sausage 2(40g)</li>
            <li>Spaghetti 100g</li>
            <li>Broccoli 5 buts(50g)</li>
            <li>Water 400cc</li>
            <li>Salt 1/2 tsp</li>
            <li>Pepper</li>
            <li>Ground garlic 1/3 tsp</li>
            <li>Chili 1 tsp</li>
            <li>Olive oil 1 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add oil, garlic and Chili in a pan</li>
          <li>Add broccoli and sausages</li>
          <li>Add water and salt to boil</li>
          <li>Add spaghetti and cook til soften</li>
          <li>Add pepper</li>
        </ol>
      </div>
    </div>
  )
}

export default Peperoncino;
