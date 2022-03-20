import React from 'react';
import picture1 from './20220321yummyspicybellowcucumber.jpg';
import picture2 from './20220321bellowcucumber.jpg';

function YummySpicyBellowCucumber() {
  return (
    <div>
      <h1>Yummy Spicy Bellow Cucumber ジャバラきゅうりのウマ辛漬け</h1>
      <h3>Mon 21.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='bellow-cucumber1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Small cucumber 2</li>
            <li>Water 400ml & salt 2 tsp</li>
            <li>Vinegar, soy sauce & sesame oil 1 tsp/ea</li>
            <li>Graind garlic, toubanjan 1/2 tsp/ea</li>
            <li>Graind white sesame 2 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut cucumber in bellow and store in salty water for 10 min</li>
          <img className='food-pic' src={picture2} alt='bellow-cucumber2' />
          <li>Mix with other ingredients</li>
        </ol>
      </div>
    </div>
  )
}

export default YummySpicyBellowCucumber;
