import React from 'react';
import picture1 from './20220429eggplantporkudon.jpg';

function EggplantPorkUdon() {
  return (
    <div>
      <h1>Eggplant Pork Udon なすと豚バラのつけうどん</h1>
      <h3>Fri 29.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='eggplant-pork-udon' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Eggplant 70g</li>
            <li>Pork 50g</li>
            <li>Sesame oil 1 tbsp</li>
            <li>Water 150ml</li>
            <li>Mentsuyu 80ml</li>
            <li>Sugar 1 tsp</li>
            <li>Spring onion, chili powder</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook udon</li>
          <li>Chop eggplant and pork</li>
          <li>Add sesame oil in a pan and cook eggplant and pork</li>
          <li>Add water, sugar and mentsuyu</li>
        </ol>
      </div>
    </div>
  )
}

export default EggplantPorkUdon;
