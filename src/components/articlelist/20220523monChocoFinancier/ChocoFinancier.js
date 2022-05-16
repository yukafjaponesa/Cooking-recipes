import React from 'react';
import picture1 from './20220523financier.jpg';

function ChocoFinancier() {
  return (
    <div>
      <h1>Choco Financier 生チョコフィナンシェ</h1>
      <h3>Mon 23.05.2022</h3>
      <h4>Mini muffin 12 pieces</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='choco-financier' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Egg white 2</li>
            <li>Butter 40g</li>
            <li>Almond powder(kinako powder) 40g</li>
            <li>Flour 15g</li>
            <li>Cocoa powder 20g</li>
            <li>Sugar 4 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat iven 180℃</li>
          <li>Mix egg white to a bit bubbles and add sugar</li>
          <li>Add flour, almond powder and cocoa and mix</li>
          <li>Add melted butter and mix</li>
          <li>Pour in muffin cups and bake for 15 min</li>
        </ol>
      </div>
    </div>
  )
}

export default ChocoFinancier;
