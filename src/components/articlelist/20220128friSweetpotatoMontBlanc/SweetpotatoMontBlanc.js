import React from 'react';
import picture1 from './20220128sweetpotatomontblanc.jpg';

function SweetpotatoMontBlanc() {
  return (
    <div>
      <h1>Sweet Potato Mont Blanc さつまいもモンブラン</h1>
      <h3>Fri 28.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweetpotato-mont-blanc' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sweet potato 1(230g)</li>
            <li>Vanilla ice cream 100g</li>
            <li>Black sesame</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut sweet potato in 3 cm and rest in water for 5 min</li>
          <li>Heat it with microwave oven 600w 5 min lightly cover with folio</li>
          <li>Hollow out the contents and add in a bowl with vanilla ice cream</li>
          <li>Smash with a fork and mix and then 600w 3 min in microwave oven without folio</li>
          <li>Mix again and cool it down</li>
          <li>Squeeze the content in sweet potato cups and top with balck sesame</li>
        </ol>
      </div>
    </div>
  )
}

export default SweetpotatoMontBlanc;
