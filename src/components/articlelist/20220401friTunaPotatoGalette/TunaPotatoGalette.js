import React from 'react';
import picture1 from './20220401tunapotatogalette1.jpg';
import picture2 from './20220401tunapotatogalette2.jpg';

function TunaPotatoGalette() {
  return (
    <div>
      <h1>Tuna Potato Galette ツナポテトガレット</h1>
      <h3>Fri 01.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tuna-potato-galette1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Potato 2 medium</li>
            <li>Tuna can 70g</li>
            <li>Cheese 60g</li>
            <li>Potato starch 2 tbsp</li>
            <li>Salt & pepper 1/4 tsp/ea</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Peel potato skin and thin slice</li>
          <li>Mix all</li>
          <li>Add oil in a pan and stir fry</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='tuna-potato-galette2' />
    </div>
  )
}

export default TunaPotatoGalette;
