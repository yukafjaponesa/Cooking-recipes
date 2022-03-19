import React from 'react';
import picture1 from './20220320barillatoscanapasta.jpg';
import picture2 from './20220320barillatoscanasauce.jpg';

function BrillaToscana() {
  return (
    <div>
      <h1>Brilla Toscana バリラトスカーナソース</h1>
      <h3>Sun 20.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='barilla-toscana' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Barilla Toscana sauce 1(400g)</li>
            <li>Pasta</li>
            <li>Vegs</li>
            <li>Onion, carrot, mushroom</li>
            <li>Graind meat 200g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook pasta</li>
          <li>Chop vegs and stir in oil</li>
          <li>Add meat to cook</li>
          <li>Add barilla toscana sauce</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='barilla-toscana-sauce' />
    </div>
  )
}

export default BrillaToscana;
