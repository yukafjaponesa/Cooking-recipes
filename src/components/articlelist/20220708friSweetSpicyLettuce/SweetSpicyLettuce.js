import React from 'react';
import picture1 from './20220708sweetspicylettuce.jpg';

function SweetSpicyLettuce() {
  return (
    <div>
      <h1>Sweet Spicy Lettuce 甘辛ぱくぱくレタス</h1>
      <h3>Fri 08.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweet-spicy-lettuce' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Lettuce 1/2(200g)</li>
            <li>Salt</li>
            <li>White sesame 1/2 tbsp</li>
            <li>Yakiniku-no-tare 2 tbsp</li>
            <li>or</li>
            <li>Soy sauce 2 tbsp</li>
            <li>Sugar, sake, mirin 1 tbsp/ea</li>
            <li>Ground ginger & garlic 1/2 tsp/ea</li>
            <li>Sesame oil, vinegar 1 tsp/ea</li>
            <li>Sesame</li>
            <li>Kochujan 1/2 - 2 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop lettuce and mix with all, rest for 5 min</li>
        </ol>
      </div>
    </div>
  )
}

export default SweetSpicyLettuce;
