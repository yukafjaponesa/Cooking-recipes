import React from 'react';
import picture1 from './20220419ovenmaccaroni.jpg';
import picture2 from './20220419ovenmaccaroniknorr1.jpg';
import picture3 from './20220419ovenmaccaroniknorr2.jpg';

function OvenMaccaroni() {
  return (
    <div>
      <h1>Oven Maccaroni オーブンマカロニ</h1>
      <h3>Tue 19.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='oven-maccaroni' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Maccaroni 150g</li>
            <li>Ground meat 300g</li>
            <li>Cream cheese 100g</li>
            <li>Cheese 50g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 200℃</li>
          <li>Cook meat with oil and add knorr and 500ml water</li>
          <li>Add maccaroni in a plate</li>
          <li>Pour meat on it and add cheese</li>
          <li>Bake for 30 in 175℃</li>
          <img className='food-pic' src={picture2} alt='oven-maccaroni-knorr1' />
          <br />
          <img className='food-pic' src={picture3} alt='oven-maccaroni-knorr2' />
        </ol>
      </div>
    </div>
  )
}

export default OvenMaccaroni;
