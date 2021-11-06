import React from 'react';
import picture1 from './20211030sweetpotatocake.jpg';
import picture2 from './20211030sweetpotatocakeprep.jpg';

function SweetPotatoCakeWithoutEgg() {
  return (
    <div>
      <h1>Sweet Potato Cake さつまいもケーキ 卵なし</h1>
      <h3>Sat 30.10.2021</h3>
      <h4>I forgot to add eggs and it became like '<em>crème brûlée</em>'.</h4>
      <h4>Diameter 15cm round shape</h4>
      
      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweetpotato-cake-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sweet potato 500g</li>
            <li>Sugar 60g</li>
            <li>Unsalted butter 30g</li>
            <li>Heavy cream 200cc</li>
            <li>Milk 2 tbsp</li>
            <li>(Egg 2) ← I forgot to add them</li>
            <li>Flour 60g</li>
            <li>***For Mitarashi sauce***</li>
            <li>Sugar 3 tbsp</li>
            <li>Soy sauce 1 tbsp</li>
            <li>Flour 60g</li>
            <li>Corn starch, water mix well 1/2 tbsp/ea</li>
            <li>Black sesame</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut off sweet potato skin and steam to soften</li>
          <li>Samsh it and add sugar and butter and mix well</li>
          <li>Strain it</li>
          <img className='food-pic' src={picture2} alt='sweetpotato-cakeprep-pic' />
          <li>Preheat oven 170℃</li>
          <li>Add heave cream, milk, egg and flour and mix well each time</li>
          <li>Put in a plate and heat it for 40 - 50 min</li>
          <li>For Mitarashi sauce</li>
          <li>Add all in a pan with low heat</li>
          <li>Add on a cake and topped with sesame</li>
        </ol>
      </div>
    </div>
  )
}

export default SweetPotatoCakeWithoutEgg;
