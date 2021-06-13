import React from 'react';
import picture1 from './20210604nagahamaramen.jpg';
import picture2 from './20210604tunasalad.jpg';
import picture3 from './20210604nagahamaramenpack.jpg';

function NagahamaRamen() {
  return (
    <div>
      <h1>Nagahama Ramen 長浜ラーメン</h1>
      <h3>Fri 04.06.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='nagahamaramen-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Instant Ramen</li>
            <li>For toppings</li>
            <li>Asian vegetables</li>
            <li>For Tuna Salad</li>
            <li>Tuna can 1 (200g)</li>
            <li>Chinese cabbage 4 leaves</li>
            <li>Sesame oil 2 tbsp</li>
            <li>Vinegar 2 tsp</li>
            <li>Soy sauce 1tsp and half </li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook ramen as following the instructions</li>
          <li>Chop chinese cabbage and put salt and rest for 5 min</li>
          <li>Rinse the salt and mix with ingredients </li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='tunasalad-pic' />
      <img className='food-pic' src={picture3} alt='nagahamaramen-pack-pic' />
    </div>
  )
}

export default NagahamaRamen;
