import React from 'react';
import picture1 from './20220521nonbakedrawchocolatecake.jpg';
import picture2 from './20220521chocolatecakebase.jpg';

function NonBakedRawChocolateCake() {
  return (
    <div>
      <h1>Non Baked Raw Chocolate Cake 焼かない生チョコケーキ</h1>
      <h3>Sat 21.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='raw-choco-cake' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Oreo cookie 12 pieces</li>
            <li>Milk 150cc</li>
            <li>Chocolate 100g</li>
            <li>Heavy cream 80ml</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Crush oreo and remove a bit for a topping</li>
          <li>Add milk in crushed oreo and mix well</li>
          <li>Pour in a plate and microwave oven 500w 5 -6 min or oven 20 min 180℃</li>
          <img className='food-pic' src={picture2} alt='choco-cake-base' />
          <li>Add heavy cream and chocolate in a bowl and 600w 50sec and mix to melt</li>
          <li>or put on stove and melt it (not to boil)</li>
          <li>Pour onto cake base and 3 hr in fridge</li>
          <li>Add crushed oreo on the edge of cake</li>
        </ol>
      </div>
    </div>
  )
}

export default NonBakedRawChocolateCake;
