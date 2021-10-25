import React from 'react';
import picture1 from './20211025pumpkincake1.jpg';
import picture2 from './20211025pumpkincake2.jpg';
import picture3 from './20211025pumpkincake3.jpg';
import picture4 from './20211025pumpkincake4.jpg';
import picture5 from './20211025pumpkincake5.jpg';
import picture6 from './20211025pumpkincake6.jpg';

function BakedPumpkinCheeseCake() {
  return (
    <div>
      <h1>Baked Pumpkin Cheese Cake かぼちゃのベイクドチーズケーキ</h1>
      <h3>Mon 25.10.2021</h3>

      <div className='food-and-ingredients'>
        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>For a round cake shape 18 cm</li>
            <li>Pumpkin 1/4</li>
            <li>Heavy cream 200g</li>
            <li>Cream cheese 200g</li>
            <li>Egg 2</li>
            <li>Sugar 80g</li>
            <li>Flour 2 tbsp</li>
            <li>Chocolate powder 1 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut off pumpkin skin and steam to soften</li>
          <li>Smash pumpkin and add heavy cream 3 times. Mix well every time.</li>
          <img className='food-pic' src={picture1} alt='pumpkin-cake1-pic' />
          <li>Strain pumpkin cream</li>
          <img className='food-pic' src={picture2} alt='pumpkin-cake2-pic' />
          <li>In another bowl, mix cream cheese and sugar until smooth</li>
          <li>Add eggs into cream cheese bowl 1 by 1 and mix each time</li>
          <img className='food-pic' src={picture3} alt='pumpkin-cake3-pic' />
          <li>Sift flour into cream cheese bowl and mix well</li>
          <li>Separate pumpkin cream 2 tbsp into a small cup and add chocolate powder</li>
          <li>Add pumpkin cream into cream cheese bowl and mix well</li>
          <li>Preheat oven 170 ℃</li>
          <li>Pour cake cream into a pan and decolate with chocolate cream</li>
          <img className='food-pic' src={picture4} alt='pumpkin-cake4-pic' />
          <li>Heat for 40-45 min</li>
        </ol>
      </div>
      <img className='food-pic' src={picture5} alt='pumpkin-cake5-pic' />
      <img className='food-pic' src={picture6} alt='pumpkin-cake6-pic' />
    </div>
  )
}

export default BakedPumpkinCheeseCake;
