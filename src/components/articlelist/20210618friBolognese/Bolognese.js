import React from 'react';
import picture1 from './20210618bolognese.jpg';
import picture2 from './20210618bolopack.jpg';
import picture3 from './20210618bolopackback.jpg';

function Bolognese() {
  return (
    <div>
      <h1>Bolognese ボロネーゼ</h1>
      <h3>Fri 18.06.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='bolognesen-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Ground meat</li>
            <li>Tomato</li>
            <li>Onion</li>
            <li>Paprika</li>
            <li>Bolognese sauce</li>
            <li>Oregano</li>
            <li>Spaghetti</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook pasta</li>
          <li>Stir fry meat</li>
          <li>Chop vegs and add to the meat</li>
          <li>Add Bolognese sauce</li>
          <li>Add pasta and serve with oregano</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='bolopack-pic' />
      <img className='food-pic' src={picture3} alt='bolopackback-pic' />
    </div>
  )
}

export default Bolognese;
