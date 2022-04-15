import React from 'react';
import picture1 from './20220414bruleepudding.jpg';

function BruleePudding() {
  return (
    <div>
      <h1>Brulee Pudding 材料3つでブリュレプリン</h1>
      <h3>Thu 14.04.2022</h3>
      <h4>7 ramekin (ココット皿7個分)</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='brulee-pudding' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Vanille ice cream 400g</li>
            <li>Egg 2</li>
            <li>Sugar 60g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Melt ice cream and add egg and mix</li>
          <li>Add cream in cups evenly</li>
          <li>Put 3 kitchen paper in a pan and put ramekin on it</li>
          <li>Add water to 3 cm high</li>
          <li>Turn on stove till boiled</li>
          <li>After boiling, turn to low heat and put lid and cook 10 min</li>
          <li>Remove water and add sugar in the pan and caramelized</li>
        </ol>
      </div>
    </div>
  )
}

export default BruleePudding;
