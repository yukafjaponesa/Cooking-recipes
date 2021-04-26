import React from 'react';
import picture1 from './20210425cabbageroll.jpg';

function CabbageRoll() {
  return (
    <div>
      <h1>Mille-feuille Cabbege Roll (without roling)</h1>
      <h1>巻かないロールキャベツ</h1>
      <h3>Sun 25.04.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cabbageroll-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chopped meat</li>
            <li>Cabbage</li>
            <li>Onion</li>
            <li>Tomato can</li>
            <li>Mushroom</li>
            <li>Oregano</li>
            <li>Garlic</li>
            <li>Pepper & salt</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Copped cabbage & onion & garlic</li>
          <li>Mix meat with onion, garlic, oregano pepper & salt</li>
          <li>Make a mille-feuille in a pan cabbage ☞ meat. Covered with cabbage on top</li>
          <li>Put tomato can and mushroom in the pan and bring to boil.</li>
          <li>After boiling, put a lid to steam for 15 minutes</li>
        </ol>
      </div>
    </div>
  )
}

export default CabbageRoll;
