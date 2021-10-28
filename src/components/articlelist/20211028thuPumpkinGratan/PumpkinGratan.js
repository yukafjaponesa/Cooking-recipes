import React from 'react';
import picture1 from './20211028pumpkingratan.jpg';

function PumpkinGratan() {
  return (
    <div>
      <h1>Pumpkin　Gratan かぼちゃグラタン</h1>
      <h3>Thu 28.10.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='pumpkin-gratan-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pumpkin 1/4</li>
            <li>Chopped onion</li>
            <li>Mushroom</li>
            <li>Chicken 200g</li>
            <li>Milk 200ml</li>
            <li>Flour 2 tbsp</li>
            <li>Water 100ml</li>
            <li>Cheese, parserly</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut off pumpkin skin and steam to soften</li>
          <li>Stir fry onion and add flour</li>
          <li>Add mushroom and chicken and water to cook</li>
          <li>Add milk, pepper & salt and pumpkin</li>
          <li>Put in bakeware and put in oven for 5 min or till cheese melts</li>
          <li>Top with parserly</li>
        </ol>
      </div>
    </div>
  )
}

export default PumpkinGratan;
