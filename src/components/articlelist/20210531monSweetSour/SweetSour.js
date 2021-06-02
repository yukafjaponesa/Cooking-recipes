import React from 'react';
import picture1 from './20210531sweetsour.jpg';
import picture2 from './20210531seasoning.jpg';

function SweetSour() {
  return (
    <div>
      <h1>Sweet Sout 甘酢炒め</h1>
      <h3>Mon 31.05.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweetsour-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Your choice of meat</li>
            <li>Vegs - onion, carrot, paprika and etc</li>
            <li>Rice</li>
            <li>Sweet Sour seasoning</li>
            <li>Water 120ml</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Start cooking rice</li>
          <li>Chop vegs and stir fry</li>
          <li>Add meat</li>
          <li>Mix seasoning with 120ml water and add in pan</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='seasoning-pic' />
    </div>
  )
}

export default SweetSour;
