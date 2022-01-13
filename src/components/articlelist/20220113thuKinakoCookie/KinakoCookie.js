import React from 'react';
import picture1 from './20220113kinakocookie.jpg';

function KinakoCookie() {
  return (
    <div>
      <h1>Kinako Cookie きな粉クッキー</h1>
      <h3>Thu 13.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='kinako-cookie' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Flour 100g</li>
            <li>Kinako(Roasted soybean powder) 20g</li>
            <li>Sugar 30g</li>
            <li>Oil 2 tbsp</li>
            <li>Milk 2 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 170℃</li>
          <li>Add oil and milk in a bowl and mix well</li>
          <li>Add sugar and mix well</li>
          <li>Add kinano and flour and mix with a rubber spatula</li>
          <li>Stretch 5 - 7 mm</li>
          <li>Cut in square or shapes</li>
          <li>Oven 15 min</li>
        </ol>
      </div>
    </div>
  )
}

export default KinakoCookie;
