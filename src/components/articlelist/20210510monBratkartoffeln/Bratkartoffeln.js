import React from 'react';
import picture1 from './20210510bratkartoffeln.jpg';

function Bratkartoffeln() {
  return (
    <div>
      <h1>Bratkartoffeln ブラットカトフレン</h1>
      <h3>Mon 10.05.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='bratkartoffeln-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Potato</li>
            <li>Onion</li>
            <li>Meat / Bacon</li>
            <li>Pickled cucumer</li>
            <li>Egg</li>
            <li>Pepper & salt</li>
            <li>Butter</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Boil potatoes a day before to cool down</li>
          <li>Cut everything in thick slice</li>
          <li>First put butter in a pan and potatoes and stir until brown & a bit crispy</li>
          <li>Put all the other ingredients except eggs</li>
          <li>After stir fried, put eggs and mix together</li>
          <li>Pepper & salt to the taste</li>
        </ol>
      </div>
    </div>
  )
}

export default Bratkartoffeln;
