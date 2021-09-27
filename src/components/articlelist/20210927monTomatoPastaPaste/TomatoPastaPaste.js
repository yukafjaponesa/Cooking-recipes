import React from 'react';
import picture1 from './20210927tomatopasta.jpg';
import picture2 from './20210927tomatopaste.jpg';

function TomatoPastaPaste() {
  return (
    <div>
      <h1>Tomato Pasta Paste トマトパスタ</h1>
      <h3>Mon 27.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tomatopasta-pic' />
        <img className='food-pic' src={picture2} alt='tomatopaste-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pasta 250g</li>
            <li>Pasta paste 200g</li>
            <li>Red paprika, carrot, tomato, red onion, garlic</li>
            <li>Parsely, basil</li>
            <li>Bacon</li>
            <li>Salt & olive oil</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop vegs</li>
          <li>Grill bacon to crispy and chop into small pieces</li>
          <li>Stir fry carrot, red onion and garic</li>
          <li>Add tomato and paprika, herbs</li>
          <li>Cook pasta</li>
          <li>Add tomato paste into pan</li>
          <li>Add pasta to the pan</li>
        </ol>
      </div>
    </div>
  )
}

export default TomatoPastaPaste;
