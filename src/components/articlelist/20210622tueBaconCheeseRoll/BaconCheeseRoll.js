import React from 'react';
import picture1 from './20210622baconcheeseroll.jpg';
import picture2 from './20210622friedbreadcrust.jpg';

function BaconCheeseRoll() {
  return (
    <div>
      <h1>Bacon Cheese Roll ベーコンチーズロール</h1>
      <h3>Tue 22.06.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='bacon-cheese-roll-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Toast 4 slices</li>
            <li>Cheese</li>
            <li>Bacon</li>
            <li>Butter</li>
            <li>For Fried bread curst</li>
            <li>Oil</li>
            <li>Sugar</li>
            <li>Cinamon</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop off bread curst and spread the toast bread</li>
          <li>Put cheese and roll it</li>
          <li>Roll bacon on the toast</li>
          <li>Stir fired with butter</li>
        </ol>
      </div>

      <p>!Extra!</p>
      <p>Fired Bread curst</p>
        <ol>
          <li>Spray oil on curst and put in oven for 5 min to crispy</li>
          <li>Mix sugar and cinamon</li>
        </ol>
      <img className='food-pic' src={picture2} alt='bread-crust-pic' />
    </div>
  )
}

export default BaconCheeseRoll;
