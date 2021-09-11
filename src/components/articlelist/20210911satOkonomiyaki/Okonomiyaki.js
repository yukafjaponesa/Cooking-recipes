import React from 'react';
import picture1 from './20210911okonomiyaki.jpg';
import picture2 from './20210911otafukusauce.jpg';
import picture3 from './20210911tunacabbagesalad.jpg';

function Okonomiyaki() {
  return (
    <div>
      <h1>Okonomiyaki お好み焼き</h1>
      <h3>Sat 11.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='okonomiyaki-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>For 2 pieces</li>
            <li>Okonomiyaki powder 100g(1 cup)</li>
            <li>Water 100ml</li>
            <li>Chopped cabbage 300g</li>
            <li>Egg 1</li>
            <li>Bacon, green onion</li>
            <li>Mayo & Otafuku sauce</li>
            <li>For Tuna cabbage sald</li>
            <li>Chopped cabbage, carrot</li>
            <li>Vinegar 2 tbsp</li>
            <li>Oil 1 tbsp</li>
            <li>Sugar 1/2 tsp</li>
            <li>Pepper & salt</li>
            <li>Sesame</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Mix powder and water(it is heavy texture)</li>
          <li>Pre heat a pan, add egg and cabbage in the powder</li>
          <li>Put in the pan and heat for 4 min</li>
          <li>Flip Okonomiyaki and steam for 4 min(if you like, add bacon under the dough)</li>
          <li>Topped with mayo and Otafuku sauce</li>
          <li>For Tuna Cabbage Sald</li>
          <li>Steam vegs</li>
          <li>Mix with ingredients</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='otafuku-sauce-pic' />
      <img className='food-pic' src={picture3} alt='tunacabbage-salad-pic' />
    </div>
  )
}

export default Okonomiyaki;
