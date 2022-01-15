import React from 'react';
import picture1 from './20220115chicekneggplanttomato.jpg';

function ChickenEggplantTomatoSauce() {
  return (
    <div>
      <h1>Chicken Eggplant Tomato Sauce</h1>
      <h1>鶏ひき肉とナスのトマト煮</h1>
      <h3>Sat 15.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='easy-madeleine' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Eggplant 1</li>
            <li>Chopped nion 50g</li>
            <li>Chicken graind meat 150g</li>
            <li>Graind garlic 1/2 tsp</li>
            <li>Oil 1 tbsp</li>
            <li>Tomato can 1(200g)</li>
            <li>Ketchap 2 tbsp</li>
            <li>Oster sauce 1 tbsp</li>
            <li>Konsome 1 tsp</li>
            <li>Lorie 1</li>
            <li>Paserly for topping</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut eggplant in small pieces</li>
          <li>Add oil and garlic in a pan</li>
          <li>Add onion</li>
          <li>Add meat</li>
          <li>Add eggplant</li>
          <li>Add other ingredients to cook</li>
          <li>Top with paserly</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenEggplantTomatoSauce;
