import React from 'react';
import picture1 from './20211122sweetpotatopoundcake.jpg';

function SweetpotatoPoundCake() {
  return (
    <div>
      <h1>Sweetpotato Pound Cake さつまいもパウンドケーキ</h1>
      <h3>Mon 22.11.2021</h3>
      <h4>Cake 18cm</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweetpotato-pound-cake-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sweet potato 200g</li>
            <li>Hot cake mix 150g</li>
            <li>*** Sugar 30g, Baking powder 6g, salt a bit and add flour up tp 150g ***</li>
            <li>Sugar 50g</li>
            <li>Unsalted butter 70g</li>
            <li>Beaten egg 2</li>
            <li>Sliced almond 10g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre-heat oven 170℃</li>
          <li>Peal skin and steam sweet potato</li>
          <li>Mashed it roughly</li>
          <li>In a bowl, add butter and mix till smooth</li>
          <li>Add sugar in it and mix well</li>
          <li>Add egg 3 - 4 times and mix well each time</li>
          <li>Add sweet potato</li>
          <li>Add hot cake mix and mix well</li>
          <li>Pour in a bake pad and hollow the middle and add sliced almond</li>
          <li>170℃ 40min</li>
        </ol>
      </div>
    </div>
  )
}

export default SweetpotatoPoundCake;
