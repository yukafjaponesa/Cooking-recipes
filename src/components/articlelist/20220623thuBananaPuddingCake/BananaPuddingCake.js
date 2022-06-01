import React from 'react';
import picture1 from './20220623bananapuddingcake.jpg';
import picture2 from './20220623bananapuddingcakeoven.jpg';

function BananaPuddingCake() {
  return (
    <div>
      <h1>Banana Pudding Cake 材料3つでバナナプリンケーキ</h1>
      <h3>Thu 22.06.2022</h3>
      <h4>15cm square form</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='banana-pudding-cake' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pancake mix 100g</li>
            <li>Banana 1</li>
            <li>Pudding 1</li>
            <li>or egg 1, sugar 1 tbsp, milk 120 cc for a pudding</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 180℃</li>
          <li>Remove caramel and add pudding in a bowl</li>
          <li>Put caramel in microwave oven 600w 20 sec and mix to smooth</li>
          <li>Add pancake mix in pudding and mix well</li>
          <li>Slice banana</li>
          <li>Pour in cake plate and top with banana and bake for 15 min</li>
          <li>After baking, spread caramel on it</li>
          <img className='food-pic' src={picture2} alt='banana-pudding-cake-oven' />
        </ol>
      </div>
    </div>
  )
}

export default BananaPuddingCake;
