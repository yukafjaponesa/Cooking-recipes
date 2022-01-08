import React from 'react';
import picture1 from './20220109spicysweetchicken.jpg';

function SpicySweetChiken() {
  return (
    <div>
      <h1>Spicy Sweet Chiken 甘辛チキン</h1>
      <h3>Sun 09.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='korean-chicken' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 4(ささみ4本)</li>
            <li>Flour 1 tbsp</li>
            <li>Soy sauce, sake, mirin 1 tbsp/ea</li>
            <li>Sesame, sugar, chili powder(七味) 2 tsp/ea</li>
            <li>Oil</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cover chicken with flour</li>
          <li>Add all ingredients and cook well</li>
        </ol>
      </div>
    </div>
  )
}

export default SpicySweetChiken;
