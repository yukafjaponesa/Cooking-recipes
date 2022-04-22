import React from 'react';
import picture1 from './20220423friedporkwithkimchi.jpg';

function FriedPorkWithKimchi() {
  return (
    <div>
      <h1>Fried Pork With Kimchi 豚キムチ</h1>
      <h3>Sat 23.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='fried-pork-with-kimchi' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Leek 100g</li>
            <li>Chinese chive 50g</li>
            <li>Thin pork meat 100g</li>
            <li>Kimchi 100g</li>
            <li>Soy sauce 1 tbsp</li>
            <li>Sesame oil 1 tap</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop vegs and slice pork</li>
          <li>Add sesame oil in a pan and stir pork</li>
          <li>Add kimchi</li>
          <li>Add leek and Chinese chive</li>
          <li>Add soy sauce</li>
        </ol>
      </div>
    </div>
  )
}

export default FriedPorkWithKimchi;
