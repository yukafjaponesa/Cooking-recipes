import React from 'react';
import picture1 from './20220226matchachocotart.jpg';

function MatchaChocoTart() {
  return (
    <div>
      <h1>Matcha Choco Tart 抹茶チョコタルト</h1>
      <h3>Sat 26.02.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='matcha-choco-tart' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Milk pack 7x7cm</li>
            <li>White chocolate 120g</li>
            <li>Matcha powder 2tsp</li>
            <li>Unsalted butter 40g(30g & 10g)</li>
            <li>Biscuit 9 pieces(50g)</li>
            <li>Powder sugar</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add biscuit in a plastic bag and crush it</li>
          <li>Add butter 10g and mix</li>
          <li>Add baking paper onto bottom of milk pack and put biscuit</li>
          <li>Put it in fridge</li>
          <li>Add white chocolate, butter 30g and heavy cream in a bowl and 2 min in microwaveoven 600w</li>
          <li>Add matcha powder and mix well</li>
          <li>Pour onto biscuit and over night in fridge</li>
        </ol>
      </div>
    </div>
  )
}

export default MatchaChocoTart;
