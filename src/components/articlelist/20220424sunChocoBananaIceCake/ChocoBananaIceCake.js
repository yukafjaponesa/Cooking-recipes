import React from 'react';
import picture1 from './20220424chocobananaicecake1.jpg';
import picture2 from './20220424chocobananaicecakepack.jpg';
import picture3 from './20220424chocobananaicecake2.jpg';

function ChocoBananaIceCake() {
  return (
    <div>
      <h1>Choco Banana Ice Cake チョコバナナアイスケーキ</h1>
      <h3>Sun 24.04.2022</h3>
      <h4>20 x 22.5 cm</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='choco-banana-ice-cake1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Milk chocolate 50g</li>
            <li>Banana 1</li>
            <li>Oreo cookie 9 pieces</li>
            <li>Heavy cream 200cc</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Crush banana with a fork</li>
          <li>Melt chocolate in microwave oven 600w 1 min</li>
          <li>Add 50cc of heavy cream in chocolate and mix</li>
          <li>Add banana and oreo cookies(left 3 pieces) in small pieces in chocolate</li>
          <li>Mix heavy cream with a hand mixer</li>
          <li>Add it into chocolate 2 - 3 times and mix each time</li>
          <li>Pour in a bat and top with oreo</li>
          <img className='food-pic' src={picture2} alt='choco-banana-ice-cake-pack' />
          <br />
          <img className='food-pic' src={picture3} alt='choco-banana-ice-cake2' />
        </ol>
      </div>
    </div>
  )
}

export default ChocoBananaIceCake;
