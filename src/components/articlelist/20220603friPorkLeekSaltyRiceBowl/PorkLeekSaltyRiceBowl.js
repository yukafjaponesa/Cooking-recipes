import React from 'react';
import picture1 from './20220603porkleeksaltyricebowl.jpg';

function PorkLeekSaltyRiceBowl() {
  return (
    <div>
      <h1>Pork Leek Salty Rice Bowl 豚バラのねぎ塩丼</h1>
      <h3>Fri 03.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='pork-salt' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Bean sprout 50g</li>
            <li>Consomme a bit</li>
            <li>Chili oil 3 drops</li>
            <li>Chili powder a bit</li>
            <li>Leek(white part) 10cm</li>
            <li>Pork 150g</li>
            <li>Sesame oil 1 tsp</li>
            <li>Salt & white sesame a bit</li>
            <li>Potato starch & water mix 1 tsp/ea</li>
            <li>Water 100ml</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Stem bean sprout and mix with consomme, chili oil and chili powder</li>
          <li>Add sesame oil in a pan and cook pork and salt & white sesame to the taste</li>
          <li>Remove pork from the pan and cook leek</li>
          <li>Add water and consomme, white sesame and poatato starch</li>
        </ol>
      </div>
    </div>
  )
}

export default PorkLeekSaltyRiceBowl;
