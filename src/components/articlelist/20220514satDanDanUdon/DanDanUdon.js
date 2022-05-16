import React from 'react';
import picture1 from './20220514dandanudon.jpg';

function DanDanUdon() {
  return (
    <div>
      <h1>DanDan Udon ニラ香る坦々つけうどん</h1>
      <h3>Sat 14.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='dandan-udom' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chinese chive 20g</li>
            <li>Spring onion white part 5 cm</li>
            <li>Ground pork meat 70g</li>
            <li>Water 250ml</li>
            <li>Ground white sesame 3 tbsp</li>
            <li>Tenmenjan, miso paste 2 tsp</li>
            <li>Consomme, toubanjan 1/2 tsp/ea</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut chinese chive, chop spring onion</li>
          <li>Cook meat and then add water</li>
          <li>Add sauces and then spring onion and chive</li>
          <li>Add chili oil if you want</li>
        </ol>
      </div>
    </div>
  )
}

export default DanDanUdon;
