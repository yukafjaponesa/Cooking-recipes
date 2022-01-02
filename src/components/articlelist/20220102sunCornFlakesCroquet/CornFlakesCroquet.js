import React from 'react';
import picture1 from './20220102cornflakescroquet.jpg';

function CornFlakesCroquet() {
  return (
    <div>
      <h1>Corn Flakes Croquet コーンフレークコロッケ</h1>
      <h3>Fri 02.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cornflakes-chicken-gazpacho-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
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
            <li>Corn flakes</li>
            <li>***For tomato soup</li>
            <li>Tomato 200g</li>
            <li>Graind garlic 1/2 tsp</li>
            <li>Water 100ml</li>
            <li>Consome 2.5g</li>
            <li>Milk 50ml</li>
            <li>Pepper & salt</li>
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
          <li>Dip into flour → (egg) → corn flakes</li>
          <li>Deep fried or stir fried</li>
          <br />
          <li>***For Tomato soup***</li>
          <li>Put all in a mixer</li>
          <li>After that, put in a pod to warm it up(not boiled)</li>
        </ol>
      </div>
    </div>
  )
}

export default CornFlakesCroquet;
