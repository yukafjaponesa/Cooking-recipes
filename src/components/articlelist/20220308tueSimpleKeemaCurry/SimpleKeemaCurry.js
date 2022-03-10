import React from 'react';
import picture1 from './20220308simplekeemacurry.jpg';
import picture2 from './20220308tomatocreamsoupmaggi1.jpg';
import picture3 from './20220308tomatocreamsoupmaggi2.jpg';

function SimpleKeemaCurry() {
  return (
    <div>
      <h1>Simple Keema Curry シンプルキーマカレー</h1>
      <h3>Tue 08.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='simple-keema-curry' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chopped onion 1 big</li>
            <li>Graind meat 200g</li>
            <li>Graind ginger & garlic 1/2 tsp/ea</li>
            <li>Curry powder 1.5 tbsp</li>
            <li>Tomato can 200g</li>
            <li>Consome 1 tsp</li>
            <li>Salt & pepper</li>
            <li>Paserly</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add oil, garlic and ginger in a pan</li>
          <li>Then onion</li>
          <li>Add meat</li>
          <li>Add curry powder and mix well</li>
          <li>Add tomato can, consome, slat & pepper</li>
          <br />
          <li>Maggi Tomato cream soup 4 porttion</li>
          <li>Add 1 L cold water and maggi soup in a pot</li>
          <li>Mix well until boiled</li>
          <li>Serve with fresh cream</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='maggi-tomato-cream-soup1' />
      <br />
      <img className='food-pic' src={picture3} alt='maggi-tomato-cream-soup2' />
    </div>
  )
}

export default SimpleKeemaCurry;
