import React from 'react';
import picture1 from './20210316croquet.jpg';

function Croquet() {
  return(
    <div>
      <h1>Croquet</h1>
      <h3>Tue 16.03.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='croquet-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients - 6 small croquets</h4>
          <ul className='ingredients-list'>
            <li>Copped meat - 250g beef or pork or mix</li>
            <li>Onion</li>
            <li>Potato</li>
            <li>Soy sauce - 1 tbsp</li>
            <li>Sugar - 1 tbsp</li>
            <li>Chiken soup broth - 1 tsp</li>
            <li>Papper & salt</li>
            <li>Egg</li>
            <li>Flour melted in water</li>
            <li>Bread crumbs</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Peel potatoes and boil to be soften</li>
          <li>Chop onion and stir lightly</li>
          <li>Mix soy sauce, sugar and meat. Add sal & pepper</li>
          <li>knead the meat. Smash potatoes. All put together</li>
          <li>Preheat the oven</li>
          <li>Make a round shape</li>
          <li>Dip into flour → (egg) → bread crumbs</li>
          <li>Heat in oven for 10 minutes, 230℃</li>
        </ol>
      </div>
    </div>
  )
};

export default Croquet;
