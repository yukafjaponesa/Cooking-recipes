import React from 'react';
import picture1 from './20220131snowball.jpg';
import picture2 from './20220131snowballpan.jpg';
import picture3 from './20220131snowballpowdersugar.jpg';

function SnowBall() {
  return (
    <div>
      <h1>Snow Ball サクサクスノーボール</h1>
      <h3>Mon 31.01.2022</h3>
      <h4>For 20 pieces</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='snow-ball' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Unsalte butter 40g</li>
            <li>Sugar 2 tbsp</li>
            <li>Flour 100g</li>
            <li>Potato starch 2 tbsp</li>
            <li>Milk 2 tbsp</li>
            <li>Powder sugar 3 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Buuter in room tempurature</li>
          <li>Add butter in a bowl and mix and add sugar and mix</li>
          <li>Sift flour and potato starch and mix with a spatula</li>
          <li>Add milk and gather it</li>
          <li>Make 20 balls and press a bit</li>
          <li>Add in a pan and cook o r14 - 20 min with low heat with a cover</li>
          <li>Cook other side for 15 - 20 min with a cover</li>
          <li>Cool down and add them in a plastic bag and cover iwth powder sugar</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='snow-ball-pan' />
      <br />
      <img className='food-pic' src={picture3} alt='snow-ball-powder-sugar' />
    </div>
  )
}

export default SnowBall;
