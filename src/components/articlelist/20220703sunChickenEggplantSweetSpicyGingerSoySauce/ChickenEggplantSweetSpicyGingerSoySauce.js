import React from 'react';
import picture1 from './20220703chickeneggplantsweetspicy.jpg';

function ChickenEggplantSweetSpicyGingerSoySauce() {
  return (
    <div>
      <h1>Chicken Eggplant Sweet Spicy Ginger Soy Sauce</h1>
      <h1>鶏肉と茄子の甘辛しょうが醤油炒め</h1>
      <h3>Sun 03.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweet-spicy' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 300g</li>
            <li>Eggplant 2(220g)</li>
            <li>Potato starch 3 tbsp</li>
            <li>☆Sake, soy sauce 2 tsp</li>
            <li>☆Ground ginger 1 tsp</li>
            <li>Soy sauce, mirin 1 1/2 tbsp/ea</li>
            <li>Sugar 2 tsp</li>
            <li>Ground ginger 1/2 tsp</li>
            <li>Chopped spring onion</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut eggplant. Cut chicken and mix with ☆</li>
          <li>Add oil in a pan and cook chicken first</li>
          <li>Add eggplant</li>
          <li>Add other ingredients</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenEggplantSweetSpicyGingerSoySauce;
