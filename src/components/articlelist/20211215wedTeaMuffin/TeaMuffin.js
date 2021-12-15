import React from 'react';
import picture1 from './20211215teamuffin1.jpg';
import picture2 from './20211215tealeaves.jpg';
import picture3 from './20211215teamuffin2.jpg';

function TeaMuffin() {
  return (
    <div>
      <h1>Tea Muffin 紅茶マフィン</h1>
      <h3>Wed 15.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tea-muffin1-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Milk 80cc</li>
            <li>Tea back 1</li>
            <li>Egg 1</li>
            <li>SUgar 3 tbsp(I used 2 tbsp and sweet enough)</li>
            <li>Salad oil 60cc</li>
            <li>Hot cake mix 150g</li>
            <li>*** or ***</li>
            <li>Sugar 30g, baking powder 6g, a bit salt</li>
            <li>Flour out 114g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Milk and tea leaves in a cup 600w 30 sec. 5 min steam</li>
          <li>Pre heat oven 180℃</li>
          <li>Beaten egg in a bowl and add sugar mix well</li>
          <li>Add tea and oil and mix well</li>
          <li>Add hot cake mix</li>
          <li>12- 15 min in oven</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='tea-leaves-pic' />
      <br />
      <img className='food-pic' src={picture3} alt='tea-muffin2-pic' />
    </div>
  )
}

export default TeaMuffin;
