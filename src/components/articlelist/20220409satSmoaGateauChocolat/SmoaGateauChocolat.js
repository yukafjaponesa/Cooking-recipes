import React from 'react';
import picture1 from './20220409smoagateauchocolat.jpg';
import picture2 from './20220409smoagateauchocolatinpan.jpg';

function SmoaGateauChocolat() {
  return (
    <div>
      <h1>Smoa Gateau Chocolat スモアガトーショコラ</h1>
      <h3>Sat 09.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='smoa-gateau-chocolat' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Egg 2</li>
            <li>Sugar 3 tbsp</li>
            <li>Milk chocolate 100g</li>
            <li>Unsalted butter 50g</li>
            <li>Flour 2 tbsp</li>
            <li>Marshmallow</li>
            <li>Mix nuts 20g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop mix nuts</li>
          <li>Add egg and sugar in a bowl and mix</li>
          <li>Add butter and chocolate in a plate 600w 1 min and mix to melt</li>
          <img className='food-pic' src={picture2} alt='smoa-gateau-chocolat-in-pan' />
          <li>Add chocolate in egg and mix</li>
          <li>Add flour and mix</li>
          <li>Add oil in a pan and cook for 15 - 20 min with low heat(cover with alminium folie)</li>
          <li>Add marshmallow and mix nuts and cook for 3 min</li>
        </ol>
      </div>
    </div>
  )
}

export default SmoaGateauChocolat;
