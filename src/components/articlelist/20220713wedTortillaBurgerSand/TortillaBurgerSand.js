import React from 'react';
import picture1 from './20220713tortillaburgersand.jpg';
import picture2 from './20220713tortillasand1.jpg';
import picture3 from './20220713tortillasand2.jpg';
import picture4 from './20220713tortillasand3.jpg';
import picture5 from './20220713tortillasand4.jpg';
import picture6 from './20220713hotsand.jpg';

function TortillaBurgerSand() {
  return (
    <div>
      <h1>Tortilla Burger Sand トルティーヤバーガーサンド</h1>
      <h3>Wed 13.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tortilla-burger-sand' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Burger pattie</li>
            <li>Tortilla</li>
            <li>Chili mayo</li>
            <li>Brwoned onion</li>
            <li>Lettuce</li>
            <li>Cheese</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut tortilla and add mayo and lettuce</li>
          <li>Add browned onion, burger pattie and cheese</li>
          <li>Holt it one by one and toast with a hotsand maker</li>
          <img className='food-pic' src={picture2} alt='tortilla-sand1' />
          <br />
          <img className='food-pic' src={picture3} alt='tortilla-sand2' />
          <br />
          <img className='food-pic' src={picture4} alt='tortilla-sand3' />
          <br />
          <img className='food-pic' src={picture5} alt='tortilla-sand4' />
          <br />
          <img className='food-pic' src={picture6} alt='hotsand' />
        </ol>
      </div>
    </div>
  )
}

export default TortillaBurgerSand;
