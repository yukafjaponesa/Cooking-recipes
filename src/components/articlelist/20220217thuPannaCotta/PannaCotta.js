import React from 'react';
import picture1 from './20220217pannacotta.jpg';

function PannaCotta() {
  return (
    <div>
      <h1>Panna Cotta パンナコッタ</h1>
      <h3>Thu 17.02.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='panna-cotta' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Water 1 tbsp & powder gelatine 3g</li>
            <li>Sugar 2 tbsp</li>
            <li>Milk 80cc</li>
            <li>Heavy cream 80ml</li>
            <li>Strawberry jam 1 tbsp</li>
            <li>Mint</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Soak gelatine in water</li>
          <li>Add milk, sugar and jam in a pan and cook till sugar melt</li>
          <li>Remove from stove and add gelatine</li>
          <li>Add heavy cream</li>
          <li>Pour in cups and 1 hour in frdige</li>
        </ol>
      </div>
    </div>
  )
}

export default PannaCotta;
