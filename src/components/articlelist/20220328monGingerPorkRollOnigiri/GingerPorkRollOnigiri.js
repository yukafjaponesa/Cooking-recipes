
import React from 'react';
import picture1 from './20220328gingerporkrollonigiri.jpg';

function GingerPorkRollOnigiri() {
  return (
    <div>
      <h1>Ginger Pork Roll Onigiri 生姜焼き肉巻きおにぎり</h1>
      <h3>Mon 28.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='ginger-pork-roll-onigiri' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rice 400g 6 onigiri balls</li>
            <li>Thin por slice 6</li>
            <li>Perilla 4 pieces</li>
            <li>White sesame 1 tbsp</li>
            <li>Potato starch 1 tbsp</li>
            <li>Oil 1 tsp</li>
            <li>Sake 1 tbsp</li>
            <li>Mirin, soy sauce 2 tbsp/ea</li>
            <li>Sugar 1/2 tbsp</li>
            <li>Grains ginger 1 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop perilla and mix with rice and sesame</li>
          <li>Sift potato starch on pork and roll onigiri</li>
          <li>Add oil in a pan and cook onigiri</li>
          <li>Add sauce</li>
        </ol>
      </div>
    </div>
  )
}

export default GingerPorkRollOnigiri;
