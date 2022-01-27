import React from 'react';
import picture1 from './20220129spinachitomato.jpg';
import picture2 from './20220129spinachitortelloni.jpg';

function SpinachiTortelloni() {
  return (
    <div>
      <h1>Spinachi Tortelloni トルテローニ</h1>
      <h3>Sat 29.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='spinachi-tortelloni' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Tortelloni 250g</li>
            <li>Tomato sauce 300g</li>
            <li>Minced meat 400g</li>
            <li>Vegs - carrot, onion, paprika, garlic</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>After boiling water, cook tortelloni 2 min(when it is up from bottom)</li>
          <li>Cut vegs and cook with meat</li>
          <li>Add tomato sauce and gnocchi</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='spinachi-tomato' />
    </div>
  )
}

export default SpinachiTortelloni;
