import React from 'react';
import picture1 from './20210913rollcabagge.jpg';
import picture2 from './20210913macaronisalad.jpg';

function RollCabagge() {
  return (
    <div>
      <h1>Roll Cabagge & Macaroni Salad ロールキャベツとマカロニサラダ</h1>
      <h3>Mon 13.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='rollcabagge-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>For Cabbage roll</li>
            <li>Cabagge leaves 6</li>
            <li>Minced beef 250g</li>
            <li>Chopped carrot & onion</li>
            <li>Bread crumble 1 tbsp</li>
            <li>Milk 2 tbsp</li>
            <li>Salt & pepper</li>
            <li>Tomato can 400g</li>
            <li>For macaroni sald</li>
            <li>Macaroni 80g</li>
            <li>Cucumber, corn, ham for toppings</li>
            <li>Mayonaise, salt & pepper</li>
            <li>Olive oil</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Boil water and soften cabagge for 1 min</li>
          <li>Mix meat, vegs, milk, bread crumble, salt & pepper</li>
          <li>Make it like balls and roll with cabagge</li>
          <li>Put in a pot, tomato can, water, salt to the taste</li>
          <li>Cook for 20 min after boiling</li>
          <li>For macaroni salad</li>
          <li>Cook macaroni pasta after boiling water. Add olive oil</li>
          <li>Slice cucumber and ham and mix with all</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='macaronisalad-pic' />
    </div>
  )
}

export default RollCabagge;
