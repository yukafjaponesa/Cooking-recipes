import React from 'react';
import picture1 from './20211229appleteacake1.jpg';
import picture2 from './20211229appleteacake2.jpg';

function AppleTeaCake() {
  return (
    <div>
      <h1>Apple Tea Cake りんごと紅茶の炊飯器ケーキ</h1>
      <h3>Wed 29.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='apple-tea-cake1-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Apple big 1 or 2-3 small ones</li>
            <li>Sugar 3 tbsp</li>
            <li>Lemon juice 1 tsp</li>
            <li>Tea pack(Earl gray) 1(2g)</li>
            <li>Hot water 150ml</li>
            <li>Egg 1</li>
            <li>Sugar 2 tbsp</li>
            <li>Unsalted melted butter 20g</li>
            <li>Hot cake mix 200g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Remove apple skin and slice 1 cm</li>
          <li>In a pod, add apple, sugar 3 tbsp and lemon juice and cook until the color changes slightly</li>
          <li>Put tea leaves in a cup and hot water and cool it down</li>
          <li>In a big bowl, add tea and egg and mix well</li>
          <li>Add sugar 2 tbsp → butter → sift hot cake mix and mix well each time</li>
          <li>Cover rice cooker with butter and add apple then pour cake liquid</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='apple-tea-cake2-pic' />
    </div>
  )
}

export default AppleTeaCake;
