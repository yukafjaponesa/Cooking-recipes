import React from 'react';
import picture1 from './20220418gateauchocolat.jpg';
import picture2 from './20220418gateauchocolatoven.jpg';

function GateauChocolat3ingredients() {
  return (
    <div>
      <h1>Gateau Chocolat 3 ingredients 材料3つでガトーショコラ</h1>
      <h3>Mon 18.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='gateau-chocolat-3ingredients' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Milk chocolate & dark chocolate 2 each(total 4 sheet 400g)</li>
            <li>Egg 4</li>
            <li>Unsalted butter 150g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 190℃</li>
          <li>Put chocolates and butter in a bowl and melt them</li>
          <li>Add eggs in a bowl and mix well</li>
          <li>Add egg into chocolate little by little and mix each time</li>
          <li>Bake for 20 min</li>
          <img className='food-pic' src={picture2} alt='gateau-chocolat-oven' />
        </ol>
      </div>
    </div>
  )
}

export default GateauChocolat3ingredients;
