import React from 'react';
import picture1 from './20220410kouignamann.jpg';

function KouignAmann() {
  return (
    <div>
      <h1>Kouign Amann クイニーアマン</h1>
      <h3>Sun 10.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='kouign-amann' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Toast 1</li>
            <li>Butter 30g</li>
            <li>Sugar 2 tbsp</li>
            <li>Whipped cream, mint</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut toast in 4 pieces</li>
          <li>Add 2/3 butter in a pan</li>
          <li>Add toast when butter melted half</li>
          <li>Stir both side and remove</li>
          <li>Add the rest of butter in the same pan and sugar and mix with low heat</li>
          <li>Put toast again and cook</li>
          <li>Cool down in baking paper</li>
        </ol>
      </div>
    </div>
  )
}

export default KouignAmann;
