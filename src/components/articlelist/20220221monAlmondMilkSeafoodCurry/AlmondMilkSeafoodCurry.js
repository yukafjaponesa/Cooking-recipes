import React from 'react';
import picture1 from './20220221almonmilkseafoodcurry.jpg';

function AlmondMilkSeafoodCurry() {
  return (
    <div>
      <h1>Almond Milk Seafood Curry アーモンドミルクのシーフードカレー</h1>
      <h3>Mon 21.02.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='almond-milk-curry' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Seafood 200g</li>
            <li>Sliced onion 1/2</li>
            <li>White wine 1 tbsp</li>
            <li>Almon milk 300ml</li>
            <li>Water 100ml</li>
            <li>Curry rouex 40g(2 pieces)</li>
            <li>Paserly</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add oil in a pan and cook seafood with white wine</li>
          <li>Remove seafood and add onion to cook</li>
          <li>Add milk, water and curry rouex</li>
          <li>Add seafood</li>
        </ol>
      </div>
    </div>
  )
}

export default AlmondMilkSeafoodCurry;
