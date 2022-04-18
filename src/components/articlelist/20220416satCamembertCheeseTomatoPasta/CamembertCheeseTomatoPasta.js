import React from 'react';
import picture1 from './20220416camembercheesetomatopasta.jpg';

function CamembertCheeseTomatoPasta() {
  return (
    <div>
      <h1>Camembert Cheese Tomato Pasta カマンベールトマトパスタ</h1>
      <h3>Sat 16.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='camember-cheese-tomato-pasta' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sliced onion 1/2</li>
            <li>Bacon 60g</li>
            <li>Garlic 1 glove</li>
            <li>Camember cheese 1/2 - 1 pack</li>
            <li>Olive oil</li>
            <li>Pasta for 2 servings</li>
            <li>Tomato can 1(400g)</li>
            <li>Consomme 1 tsp</li>
            <li>Water 50ml</li>
            <li>Sugar 1 tsp</li>
            <li>Paserly</li>
            <li>Pepper & salt</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut cheese and bacon and chop garlic</li>
          <li>Add olive oil and garlic in a pan</li>
          <li>Add onion and bacon</li>
          <li>Add tomato can, water, consomme, pepper & salt and sugar</li>
          <li>Cook for 15 min wiht low heat. Cook pasta</li>
          <li>Add past in the pan and cheese</li>
        </ol>
      </div>
    </div>
  )
}

export default CamembertCheeseTomatoPasta;
