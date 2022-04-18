import React from 'react';
import picture1 from './20220416rawchocofinancier.jpg';
import picture2 from './20220416financierbeforebake.jpg';
import picture3 from './20220416financierafterbake.jpg';

function RawChocolateFinancier() {
  return (
    <div>
      <h1>Raw Chocolate Financier 生チョコフィナンシェ</h1>
      <h3>Sat 16.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='financier' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Milk chocolate 100g</li>
            <li>Heavy cream 100cc</li>
            <li>Unsalted butter 40g</li>
            <li>Egg white 2</li>
            <li>Sugar 30g(I used 15g)</li>
            <li>Flour 30g</li>
            <li>Almond powder 25g(or kinako powder soy bean powder)</li>
            <li>Kokoa powder 10g</li>
            <li>Baking powder 1/2 tsp</li>
            <li>Dark chocolate 50h(12 pieces)</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 170℃</li>
          <li>Chop milk chocolate</li>
          <li>Heat heavy cream(not to boiled)</li>
          <li>Pour heavy cream on chocolate and melt it</li>
          <li>Melt butter</li>
          <li>Add egg white and sugar in a bowl and mix</li>
          <li>Sift flour, almond powder, cocoa powder and baking powder in egg white</li>
          <li>Add chocolate cream in egg white</li>
          <li>Add butter</li>
          <li>Put dark chocolate on dough and bake for 15 min</li>
          <img className='food-pic' src={picture2} alt='financier-before-bake' />
          <br />
          <li>Use square and flat plate so dark chocolates don't sink</li>
          <img className='food-pic' src={picture3} alt='financier-after-bake' />
        </ol>
      </div>
    </div>
  )
}

export default RawChocolateFinancier;
