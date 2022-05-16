import React from 'react';
import picture1 from './20220518snowballcookie.jpg';
import picture2 from './20220518snowballdough.jpg';
import picture3 from './20220518snowballcookieafterbaking.jpg';

function SnowBallCookie() {
  return (
    <div>
      <h1>Snow Ball Cookie スノーボールクッキー</h1>
      <h3>Wed 18.05.2022</h3>
      <h4>16 pieces</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='snow-ball' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Flour 120g</li>
            <li>Sugar 20g</li>
            <li>Salt</li>
            <li>Unsalted melted butter 55g</li>
            <br />
            <li>***For cocoa ver.***</li>
            <li>Flour 105g</li>
            <li>Cocoa powder 15g</li>
            <li>Sugar 20g</li>
            <li>Salt</li>
            <li>Unsalted melted butter 55g</li>
            <li>Powdere sugar</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 170℃</li>
          <li>Sift flour, sugar and salt</li>
          <li>Add butter in it and mix with a rubber spatula</li>
          <img className='food-pic' src={picture2} alt='snow-ball-dough' />
          <li>Make small balls (12g/piece)</li>
          <li>Bake for 15min</li>
          <img className='food-pic' src={picture3} alt='snow-ball-after-baking' />
          <li>Cover with powdered sugar when it is COMPLETELY cooled down</li>
        </ol>
      </div>
    </div>
  )
}

export default SnowBallCookie;
