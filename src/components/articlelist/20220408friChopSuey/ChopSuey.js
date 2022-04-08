import React from 'react';
import picture1 from './20220408chopsuey.jpg';
import picture2 from './20220408chopsueymaggi1.jpg';
import picture3 from './20220408chopsueymaggi2.jpg';

function ChopSuey() {
  return (
    <div>
      <h1>Chop Suey チャプスイ</h1>
      <h3>Fri 08.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chop-suey' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 300g</li>
            <li>Yellow paprika 1</li>
            <li>Cooked rice 180g</li>
            <li>Spring onion 1</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop veg and cook them and meat</li>
          <li>Add maggi sauce and 300ml water</li>
          <li>Add rice</li>
          <img className='food-pic' src={picture2} alt='chop-suey-maggi2' />
          <br />
          <img className='food-pic' src={picture3} alt='chop-suey-maggi2' />
        </ol>
      </div>
    </div>
  )
}

export default ChopSuey;
