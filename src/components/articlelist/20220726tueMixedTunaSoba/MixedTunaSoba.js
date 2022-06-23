import React from 'react';
import picture1 from './20220726mixedtunasoba.jpg';
import picture2 from './20220726whiteleek.jpg';

function MixedTunaSoba() {
  return (
    <div>
      <h1>Mixed Tuna Soba ツナ混ぜそば</h1>
      <h3>Tue 26.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tuna-soba' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Ramen noodle 1</li>
            <li>Tuna can 1(70g)</li>
            <li>Kaiware 1/2 pack</li>
            <li>Leek 5cm(15g)</li>
            <li>Seaweed(刻みのり)</li>
            <li>Egg york 1</li>
            <li>☆Yakiniku-no tare 1 tbsp</li>
            <li>☆Toubanjan 1/4 tsp</li>
            <li>Soy sauce 1 tsp & sesame oil 1/2 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut white leek in half vertically and thinly sliced</li>
          <img className='food-pic' src={picture2} alt='white-leek' />
          <li>Add tuna in a bowl and mix with ☆ (drain tuna oil)</li>
          <li>Boil ramen noodle</li>
          <li>Mix noodle with soy sauce and sesame oil and place in a plate</li>
        </ol>
      </div>
    </div>
  )
}

export default MixedTunaSoba;
