import React from 'react';
import picture1 from './20220510caesarsalad.jpg';

function CaesarSalad() {
  return (
    <div>
      <h1>Caesar Salad シーザーサラダ</h1>
      <h3>Tue 10.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='caesar-salad' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Mayo 1 tbsp</li>
            <li>Vinegar 1 tbsp</li>
            <li>Powdered cheese 1 tbsp</li>
            <li>Ground garlic 1/3 tsp</li>
            <li>Black pepper</li>
            <li>Lettuce, tomato, cucumber</li>
            <li>Boiled egg 1</li>
            <li>Boiled chicken 1 stick</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop vegs, chicken and egg</li>
          <li>Mix sauce</li>
          <li>Add powdered cheese again on top</li>
        </ol>
      </div>
    </div>
  )
}

export default CaesarSalad;
