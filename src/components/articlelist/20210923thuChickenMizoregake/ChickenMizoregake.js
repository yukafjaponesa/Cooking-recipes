import React from 'react';
import picture1 from './20210923chickenmizore.jpg';

function ChickenMizoregake() {
  return (
    <div>
      <h1>Chicken Mizoregake ささみの大根みぞれがけ</h1>
      <h3>Thu 23.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chickenmizore-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 400g</li>
            <li>Grated radish 200g</li>
            <li>Sesame oil 1 tbsp</li>
            <li>Green onion</li>
            <li>Soy sauce 2 tbsp</li>
            <li>Vinegar 1 tbsp</li>
            <li>Sugar 1/2 tsp</li>
            <li>Salt to the taste</li>
            <li>Cornstarch 1 tbsp</li>
            <li>For Coleslaw</li>
            <li>Cabbage, carrot</li>
            <li>Corn</li>
            <li>Mayo 3 tbsp</li>
            <li>Vinegar 1 tbsp</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop chicken and add cornstarch</li>
          <li>Grill with sesame oil</li>
          <li>Add radish and sauces</li>
          <li>For Coleslaw</li>
          <li>Slice vegs and mix all together</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenMizoregake;
