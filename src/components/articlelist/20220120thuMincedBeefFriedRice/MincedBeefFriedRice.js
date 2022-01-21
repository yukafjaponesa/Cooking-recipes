import React from 'react';
import picture1 from './20220120mincedbeeffriedrice.jpg';

function MincedBeefFriedRice() {
  return (
    <div>
      <h1>Minced Beef Fried Rice 牛ひき肉の油めし</h1>
      <h3>Thu 20.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='beef-abura-rice' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chopped onion 1/4</li>
            <li>Salad oil 1 tsp</li>
            <li>Soy sauce, sugar, oyster sauce 2 tsp/ea</li>
            <li>Minced beef 100g</li>
            <li>Rice 200g</li>
            <li>Soft boiled egg</li>
            <li>Green onion</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add oil and chopped onion in a pan</li>
          <li>Add beef and cook well</li>
          <li>Add soy sauce, sugar, oyster sauce</li>
          <li>Add rice and cook well</li>
          <li>Top with green onino and egg</li>
        </ol>
      </div>
    </div>
  )
}

export default MincedBeefFriedRice;
