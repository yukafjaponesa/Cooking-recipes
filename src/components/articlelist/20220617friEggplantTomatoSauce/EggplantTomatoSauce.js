import React from 'react';
import picture1 from './20220617eggplanttomatosauce.jpg';

function EggplantTomatoSauce() {
  return (
    <div>
      <h1>Eggplant Tomato Sauce 鶏ひき肉とナスのトマト煮</h1>
      <h3>Fri 17.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='eggplant-tomato-sauce' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Eggplant 1</li>
            <li>Onion 50g</li>
            <li>Oil 1 tbsp</li>
            <li>Ground garlic 1/2 tsp</li>
            <li>Ground chicken meat 150g</li>
            <li>Tomato can 200g</li>
            <li>Ketchup 2 tbsp</li>
            <li>Chunou sauce 1 tbsp(中濃ソース)</li>
            <li>Consomme 1/2 tsp</li>
            <li>Bay leaf 1</li>
            <li>Paserly</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut eggplant and chop onion</li>
          <li>Add oil in a pan and cook onion, meat and eggplant</li>
          <li>Add other ingredients and cook</li>
        </ol>
      </div>
    </div>
  )
}

export default EggplantTomatoSauce;
