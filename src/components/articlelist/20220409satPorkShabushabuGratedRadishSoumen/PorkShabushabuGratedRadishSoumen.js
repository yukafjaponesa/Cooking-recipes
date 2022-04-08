import React from 'react';
import picture1 from './20220409porkshabugratedradishsoumen.jpg';

function PorkShabushabuGratedRadishSoumen() {
  return (
    <div>
      <h1>Pork Shabushabu Grated Radish Soumen</h1>
      <h1>豚しゃぶおろし、ぶっかけそうめん</h1>
      <h3>Sat 09.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='pork-grrated-radish-soumen' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>White radish sprouts 10g</li>
            <li>Radish 1/4</li>
            <li>Thin sliced pork 150g</li>
            <li>Salt 1/4 tsp</li>
            <li>Sesame oil 1/2 tsp</li>
            <li>Mentsuyu & water</li>
            <li>Soumen 1</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Peel white radish and grated the rest</li>
          <li>Boil pork. After that, mix with salt and sesame oil</li>
          <li>Cook soumen noodle</li>
        </ol>
      </div>
    </div>
  )
}

export default PorkShabushabuGratedRadishSoumen;
