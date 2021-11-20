import React from 'react';
import picture1 from './20211120tiramisu.jpg';

function Tiramisu() {
  return (
    <div>
      <h1>Tiramisu ティラミス</h1>
      <h3>Sat 20.11.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tiramisu-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cream cheese 200g</li>
            <li>Heavy cream 150g</li>
            <li>Sugar 4 tbsp (I used 3 tbsp)</li>
            <li>Biscuit 100g</li>
            <li>Instant coffee 5g</li>
            <li>Hot water 50ml</li>
            <li>Cocoa powder 1 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cream cheese room temprature</li>
          <li>Put coffee in hot water</li>
          <li>Crush biscuit in a bowl and mix with coffee</li>
          <li>In another bowl, put heavy cream and sugar and mix with hand mixer while cooling till 8 temprature</li>
          <li>In another bowl, add cream cheese and mix with a rubber spatula</li>
          <li>Add heavy cream into cream cheese bowl mix well</li>
          <li>Biscuit, cream and cocoa powder</li>
        </ol>
      </div>
    </div>
  )
}

export default Tiramisu;
