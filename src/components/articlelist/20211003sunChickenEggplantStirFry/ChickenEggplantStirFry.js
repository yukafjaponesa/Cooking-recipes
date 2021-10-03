import React from 'react';
import picture1 from './20211003chickeneggplant.jpg';

function ChickenEggplantStirFry() {
  return (
    <div>
      <h1>Chicken Eggplant Stir-Fried 鶏肉とナスのさっぱり炒め</h1>
      <h3>Sun 03.10.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='quiche-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chiken breast</li>
            <li>Eggplant</li>
            <li>Green onion</li>
            <li>Graind ginger</li>
            <li>Chili(powder)</li>
            <li>Soy sauce 1 tbsp & 1/2 tsp</li>
            <li>Sake or white wine 1 tsp</li>
            <li>Cornstarch or flour 1 tsp</li>
            <li>Mirin 1 tbsp</li>
            <li>Vinegar 1 tbsp</li>
            <li>Sugar 1 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>First, stir fry eggplant</li>
          <li>Mix chicken with soy sauce 1 tsp, sake 1tsp, graind ginger 1/2 tsp & cornstarch 1 tsp </li>
          <li>Put eggplant in plate</li>
          <li>Second, stir fry chicken</li>
          <li>Add green onion(white part) and eggplant in chicken pan</li>
          <li>Add soy sauce 1 tbsp, Mirin 1 tbsp, vinegar 1 tbsp and sugar</li>
          <li>Add green onion(green part) and chili powder</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenEggplantStirFry;
