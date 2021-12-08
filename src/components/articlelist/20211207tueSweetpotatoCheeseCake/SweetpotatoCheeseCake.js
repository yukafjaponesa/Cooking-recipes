import React from 'react';
import picture1 from './20211207sweetpotatocheesecake.jpg';
import picture2 from './20211207sweetpotatocheesecakeoven.jpg';
import picture3 from './20211207sweetpotatocheesecakecut.jpg';

function SweetpotatoCheeseCake() {
  return (
    <div>
      <h1>Sweetpotato Cheese Cake スイートポテトチーズケーキ</h1>
      <h3>Tue 07.12.2021</h3>
      <h4>15cm</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweetpotato-cheese-cake-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sweet potato 250g without skin</li>
            <li>Cream cheese 200g</li>
            <li>Sugar 3 - 4 tbsp</li>
            <li>Milk or heavy cream 150ml</li>
            <li>Egg 2</li>
            <li>Flour 1 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre-heat oven 170℃</li>
          <li>Peel sweet potato skin and steam to soften</li>
          <li>Mash sweet potato and add sugar and mix well</li>
          <li>Add all the other ingredients and mix well with hand mixer or blender</li>
          <li>Bake for 45 min with 170℃. Use baking sheet</li>
          <li>Cool down for a half day in a fridge</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='sweetpotato-cheese-cake-oven-pic' />
      <br />
      <img className='food-pic' src={picture3} alt='sweetpotato-cheese-cake-cut-pic' />
    </div>
  )
}

export default SweetpotatoCheeseCake;
