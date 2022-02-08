import React from 'react';
import picture1 from './20220208easymatchacookie.jpg';
import picture2 from './20220208easymatchacookieprep1.jpg';
import picture3 from './20220208easymatchacookieprep2.jpg';

function EasyMatchaCookie() {
  return (
    <div>
      <h1>Easy Matcha Cookie 袋1つで抹茶クッキー</h1>
      <h3>Tue 08.02.2022</h3>
      <h4>Matcha or cocoa powder as you wish</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='matcha-cookie' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Hot cake mix 150g</li>
            <li>or</li>
            <li>FLour 110g, baking powder 9g, sugar 30g and salt a bit</li>
            <li>Sugar 2 tbsp</li>
            <li>Matcha powder or cocoa powder 1 tbsp</li>
            <li>Oil 3 tbsp</li>
            <li>Milk 2 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 170℃</li>
          <li>Add hot cake mix, sugar and match in a plastic bag and shake it</li>
          <li>Add oil and milk and make it gather</li>
          <img className='food-pic' src={picture2} alt='matcha-cookie-prep1' />
          <li>Spread the dough 3 - 4 mm</li>
          <li>Cut upper plastic bag and make shapes</li>
          <img className='food-pic' src={picture3} alt='matcha-cookie-prep2' />
          <li>Bake for 15 min</li>
        </ol>
      </div>
    </div>
  )
}

export default EasyMatchaCookie;
