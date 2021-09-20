import React from 'react';
import picture1 from './20210920chickeneggplantsweetsour.jpg';

function ChickenEggplantSweetSour() {
  return (
    <div>
      <h1>Chicken Eggplant Sweet Sour 鶏ももとナスの甘酢だれ</h1>
      <h3>Mon 20.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweet-sour-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken thigh(without bones)</li>
            <li>Eggplant 1</li>
            <li>Green onion</li>
            <li>Vinegar, Mirin 2 tbsp/ea</li>
            <li>Soy sauce 1 tsp</li>
            <li>Cornstarch</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice eggplant and sort in water</li>
          <li>Chop chicken meat</li>
          <li>Cover with cornstarch</li>
          <li>First eggplant and then meat both shallow-fry</li>
          <li>Add sauces</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenEggplantSweetSour;
