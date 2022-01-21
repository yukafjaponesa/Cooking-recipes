import React from 'react';
import picture1 from './20220119bananacake1.jpg';
import picture2 from './20220119bananacakebeforebake.jpg';
import picture3 from './20220119bananacake2.jpg';

function BananCakeWithoutButter() {
  return (
    <div>
      <h1>Banan Cake Without Butter</h1>
      <h1>バナナケーキ～バター不要～</h1>
      <h3>Wed 19.01.2022</h3>
      <h4>18cm Pound cake shape</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='banana-cake1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>☆Banana 125g</li>
            <li>☆Sugar 125g</li>
            <li>☆Egg 2</li>
            <li>☆Milk 40g</li>
            <li>☆Salad oil 35g</li>
            <li>☆Salt a bit</li>
            <li>☆Vanilla oil/essence 3 drops</li>
            <li>Flour 125g</li>
            <li>Baking powder 6g</li>
            <li>Banana 1</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 160℃</li>
          <li>Add ☆ in a mixer and mix well</li>
          <li>Pour it in a bowl and sift foulr and baking powder and mix well</li>
          <li>Put baking paper and pour cake sauce and add half cutted banana on it</li>
          <li>Bake for 45 min</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='banana-cake-before-bake' />
      <br />
      <img className='food-pic' src={picture3} alt='banana-cake2' />
    </div>
  )
}

export default BananCakeWithoutButter;
