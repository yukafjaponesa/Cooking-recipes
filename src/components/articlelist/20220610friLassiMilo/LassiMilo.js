import React from 'react';
import picture1 from './20220610lassimilo.jpg';

function LassiMilo() {
  return (
    <div>
      <h1>Lassi Milo ラッシーミロ風味</h1>
      <h3>Fri 10.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='lassi-milo' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Yogurt 100g</li>
            <li>Water 100ml</li>
            <li>Milo 2 tbsp</li>
            <li>Ice cubes</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Mix all together</li>
          <li>Optionally, add ice cubes</li>
        </ol>
      </div>
    </div>
  )
}

export default LassiMilo;
