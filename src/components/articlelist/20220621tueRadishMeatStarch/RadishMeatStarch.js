import React from 'react';
import picture1 from './20220621radishmeatstarch.jpg';

function RadishMeatStarch() {
  return (
    <div>
      <h1>Radish Meat Starch とろとろ大根と豚ひき肉煮</h1>
      <h3>Tue 21.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='radish-meat-starch' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Radish 200g</li>
            <li>Ground pork 200g</li>
            <li>Water 200ml</li>
            <li>Soy sauce, mirin, sake, ground ginger, sugar 1 tbsp/ea</li>
            <li>Dashi 1 tsp</li>
            <li>Water 2 tbsp & potato starch 2 tbspb mixed</li>
            <li>Spring onion</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slightly thick slice radish</li>
          <li>Add all in a pot and cook</li>
          <li>Pour potato starch mix</li>
          <li>Put chopped spring onion</li>
        </ol>
      </div>
    </div>
  )
}

export default RadishMeatStarch;
