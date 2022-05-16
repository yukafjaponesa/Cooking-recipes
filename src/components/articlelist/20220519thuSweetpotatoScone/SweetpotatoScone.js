import React from 'react';
import picture1 from './20220519sweetpotatoscone.jpg';
import picture2 from './20220519sweetpotatosconebeforebaking.jpg';

function SweetpotatoScone() {
  return (
    <div>
      <h1>Sweet Potato Scone おさつスコーン</h1>
      <h3>Thu 19.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweetpotato-scone' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pancake mix 200g</li>
            <li>Sweet potato 100g(with skin)</li>
            <li>Butter 50g</li>
            <li>Milk 100cc</li>
            <li>Balck sesame</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 180℃</li>
          <li>Cut in small pieces and steam sweet potato and smash it</li>
          <li>Add melted butter and pancake mix in sweet potato and mix with a rubber spatula</li>
          <li>Make a shape and add black sesame and bake for 20 min</li>
          <img className='food-pic' src={picture2} alt='sweetpotato-scone-before' />
        </ol>
      </div>
    </div>
  )
}

export default SweetpotatoScone;
