import React from 'react';
import picture1 from './20220110kumamonramen.jpg';
import picture2 from './20220110kumamonramenpack1.jpg';
import picture3 from './20220110kumamonramenpack2.jpg';

function KumamonRamen() {
  return (
    <div>
      <h1>Kumamon Ramen くまもんラーメン</h1>
      <h3>Mon 10.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='kumamon-ramen' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Kumamon ramen pack 1 (this is for 2 portions)</li>
            <li>Green onion</li>
            <li>Meat</li>
            <li>Vegs</li>
            <li>Water 900ml</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>After boiling water, add noodle and cook for 3 min</li>
          <li>Stir fry meat and vegs</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='kumamonn-ramen1' />
      <br />
      <img className='food-pic' src={picture3} alt='kumamonn-ramen2' />
    </div>
  )
}

export default KumamonRamen;
