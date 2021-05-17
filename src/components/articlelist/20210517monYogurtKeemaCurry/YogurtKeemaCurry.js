import React from 'react';
import picture1 from './20210517yogurtkeemacurry.jpg';

function YogurtKeemaCurry() {
  return (
    <div>
      <h1>Yogurto Keema Curry ヨーグルトキーマカレー</h1>
      <h3>Mon 17.05.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='yogurtokeemacurry-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients 3 - 4 people</h4>
          <ul className='ingredients-list'>
            <li>I used carrots & paprika too.</li>
            <li>Minced meat 400g</li>
            <li>Onion chopped</li>
            <li>Garic & ginger chopped</li>
            <li>Tomate can 1(400g)</li>
            <li>Plain yogurt 200g</li>
            <li>*Curry powder 2 tbsp</li>
            <li>*Oster sauce 1 tbsp</li>
            <li>Butter</li>
            <li>Rice</li>
            <li>Parsely</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Start cooking rice</li>
          <li>Put butter, garic & ginger in a pan.</li>
          <li>After smell comes out, put meat & onion.</li>
          <li>Add tomate can and salt and Cook off the excess liquid</li>
          <li>Add yogurt & *</li>
          <li>If you like, put some parsely on rice.</li>
        </ol>
      </div>
    </div>
  )
}

export default YogurtKeemaCurry;
