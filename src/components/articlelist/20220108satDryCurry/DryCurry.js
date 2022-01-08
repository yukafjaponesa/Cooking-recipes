import React from 'react';
import picture1 from './20220108drycurry.jpg';

function DryCurry() {
  return (
    <div>
      <h1>Dry Curry 焼きドライカレー</h1>
      <h3>Sat 08.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='dry-curry' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rice 300g</li>
            <li>Minced meat 200g</li>
            <li>Chopped onion 1</li>
            <li>Graind garlic & ginger 1 tsp/ea</li>
            <li>Water 200ml</li>
            <li>Curry powder 2 tbsp</li>
            <li>Curry roux 2 pieces(40g)</li>
            <li>Oil</li>
            <li>Konsome 2 tsp</li>
            <li>Oster sauce 1 tbsp</li>
            <li>Ketchap 2 tbsp</li>
            <li>Egg</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add oil in a pan and garlic and ginger</li>
          <li>Add onion</li>
          <li>Add meat to cook</li>
          <li>Add curry powder and mix well</li>
          <li>Add ketchap, konsome, curry roux, oster sauce and water to cook</li>
          <li>Add rice and mix well and top with egg(raw or cooked)</li>
        </ol>
      </div>
    </div>
  )
}

export default DryCurry;
