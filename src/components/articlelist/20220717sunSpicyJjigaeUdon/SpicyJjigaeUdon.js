import React from 'react';
import picture1 from './20220717spicyjjigaeudon.jpg';

function SpicyJjigaeUdon() {
  return (
    <div>
      <h1>Spicy Jjigae Udon ピリ辛チゲ風うどん</h1>
      <h3>Sun 17.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='spicy-jjigae-udon' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chinese chive 20g</li>
            <li>Pork(豚ばら) 100g</li>
            <li>Water 400ml</li>
            <li>Kochujan 1 tbsp</li>
            <li>Soy sauce, sake, miso paste 2 tsp/ea</li>
            <li>Sugar 1 tsp</li>
            <li>Consomme 1/2 tsp</li>
            <li>Kimchi 50g</li>
            <li>Egg york</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook udon noodle</li>
          <li>Add all in a pot and to boil</li>
          <li>Add udon in a plate and pour the soup and top of egg york</li>
        </ol>
      </div>
    </div>
  )
}

export default SpicyJjigaeUdon;
