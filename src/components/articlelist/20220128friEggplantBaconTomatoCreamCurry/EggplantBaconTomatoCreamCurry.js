import React from 'react';
import picture1 from './20220128eggplantbacontomatocreamsauce.jpg';

function EggplantBaconTomatoCreamCurry() {
  return (
    <div>
      <h1>Eggplant Bacon Tomato Cream Curry</h1>
      <h1>ナスとベーコンのトマトクリームカレー</h1>
      <h3>Fri 28.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='eggplant-bacon-tomato-cram-curry' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Onion 1/4</li>
            <li>Eggplant 1</li>
            <li>Bacon 30g</li>
            <li>Curry ruex 1 piece</li>
            <li>Butter 10g</li>
            <li>Tomato can 100g</li>
            <li>Heavy cram 100ml</li>
            <li>Oster sauce, graind garlic 1 tsp</li>
            <li>Paserly</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop vegs and bacon</li>
          <li>Add butter in a pan and stir fry onion</li>
          <li>Add eggplant and then add bacon</li>
          <li>Add tomato can and heavy cream</li>
          <li>Add other ingredients and cook</li>
          <li>Serve with rice and paserly</li>
        </ol>
      </div>
    </div>
  )
}

export default EggplantBaconTomatoCreamCurry;
