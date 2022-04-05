import React from 'react';
import picture1 from './20220406poundcake1.jpg';
import picture2 from './20220406poundvcakebeforebake.jpg';
import picture3 from './20220406poundcakeafterbake.jpg';
import picture4 from './20220406poundcake2.jpg';

function PoundCakeWithToast() {
  return (
    <div>
      <h1>Marble Pattern Pound Cake With Toast 食パンでマーブルパウンドケーキ</h1>
      <h3>Wed 06.04.2022</h3>
      <h4>5 x 18 x 8 cm pound cake shape</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='toast-pound-cake1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Toast 4 -5 slices</li>
            <li>Egg 1</li>
            <li>Sugar 40g</li>
            <li>Milk 250cc</li>
            <li>Melted butter 10g</li>
            <li>Chocolate 50g</li>
            <li>Powdred sugar</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut toast in 1 bite</li>
          <li>Add egg, milk, sugar and butter in a bowl and mix</li>
          <li>Add toast in it</li>
          <li>Put baking paper in a cake shape and add toast → chocolate(and egg liquid)</li>
          <img className='food-pic' src={picture2} alt='toast-pound-cake-before' />
          <li>Pre heat oven 190℃ and bake for 30 min</li>
          <img className='food-pic' src={picture3} alt='toast-pound-cake-after' />
        </ol>
      </div>
      <img className='food-pic' src={picture4} alt='toast-pound-cake2' />
    </div>
  )
}

export default PoundCakeWithToast;
