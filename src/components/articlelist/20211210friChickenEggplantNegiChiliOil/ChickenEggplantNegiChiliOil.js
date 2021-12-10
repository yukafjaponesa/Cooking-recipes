import React from 'react';
import picture1 from './20211210chicekneggplantchilioil.jpg';

function ChickenEggplantNegiChiliOil() {
  return (
    <div>
      <h1>Chicken Eggplant Negi Chili Oil 鶏もも肉となすのねぎラー油炒め</h1>
      <h3>Fri 10.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chicekn-eggplant-chilioil-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 250g</li>
            <li>Eggplant 2 smalls or 1 big</li>
            <li>Leek 1/2</li>
            <li>Salt & pepper</li>
            <li>Potato starch 1 tbsp</li>
            <li>Oil 2 tbsp</li>
            <li>☆Sake 1 tbsp</li>
            <li>☆Vinegar, soy sauce 1 tbsp/ea or Ponzu 2 tbsp</li>
            <li>☆Chili oil 1 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut eggplant in pieces and cover with 1 tbsp oil</li>
          <li>Chop leek (white part) into small pieces</li>
          <li>Chop chicken and add pepper & salt and potato starch</li>
          <li>Add 1 tbsp oil in a pan and cook chicken</li>
          <li>Then add eggplant and steam for 3 min with low heat</li>
          <li>Add leek and ☆</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenEggplantNegiChiliOil;
