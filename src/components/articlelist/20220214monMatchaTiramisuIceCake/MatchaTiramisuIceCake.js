import React from 'react';
import picture1 from './20220214matchatiramisuicecake.jpg';
import picture2 from './20220214icecakebase.jpg';
import picture3 from './20220214marshmallow.jpg';
import picture4 from './20220214cakecream.jpg';
import picture5 from './20220214icecake.jpg';

function MatchaTiramisuIceCake() {
  return (
    <div>
      <h1>Matcha Tiramisu Ice Cake</h1>
      <h1>抹茶ティラミスアイスケーキ</h1>
      <h3>Mon 14.02.2022</h3>
      <h4>Use normal white marshmallow / 15cm round cake shape</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='match-tiramisu-ice-cake' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Coffee powder 1 tbsp & boiled water 80cc</li>
            <li>Biscuit or castella cake(sponge cake) 4 slices</li>
            <li>Milk 200cc</li>
            <li>Marshmallow 100g</li>
            <li>Cream cheese 200g</li>
            <li>Match powder 1 tbsp (or cocoa powder)</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Press biskuit onto bottom of a cake shape</li>
          <li>Pour coffee on it</li>
          <img className='food-pic' src={picture2} alt='biskuit-bottom' />
          <li>Add milk and marshmallow in a pod and cook till marshmallow melt</li>
          <img className='food-pic' src={picture3} alt='match-tiramisu-ice-cake' />
          <li>Remove from heat and add cream cheese to mix</li>
          <img className='food-pic' src={picture4} alt='match-tiramisu-ice-cake' />
          <li>Pour on biskuit</li>
          <li>4 hours in freezer</li>
          <li>Top with match powder and mint</li>
        </ol>
      </div>
      <img className='food-pic' src={picture5} alt='match-tiramisu-ice-cake' />
    </div>
  )
}

export default MatchaTiramisuIceCake;
