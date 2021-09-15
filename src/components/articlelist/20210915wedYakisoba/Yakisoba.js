import React from 'react';
import picture1 from './20210915yakisoba.jpg';

function Yakisoba() {
  return (
    <div>
      <h1>Yakisoba 焼きそば</h1>
      <h3>Wed 15.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='yakisoba-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Noodle</li>
            <li>Cabagge, carrot, onion</li>
            <li>Meat or ham</li>
            <li>Otafuku sauce</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook noodle</li>
          <li>Chop vegs and stir fry</li>
          <li>Add meat</li>
          <li>Add noodle and sauce, mix well</li>
        </ol>
      </div>
    </div>
  )
}

export default Yakisoba;
