import React from 'react';
import picture1 from './20220524ketchuptunapasta.jpg';

function KetchupTunaPasta() {
  return (
    <div>
      <h1>Ketchup Tuna Pasta ケチャップツナパスタ</h1>
      <h3>Tue 24.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='ketchup-tuna-pasta' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Spaghetti 100g</li>
            <li>Tuna can 1(70g)</li>
            <li>Egg 1</li>
            <li>Salt & pepper</li>
            <li>☆Ground garlic 1/2 tsp</li>
            <li>☆Sugar 1/2 tsp</li>
            <li>☆Soy sauce 1/2 tbsp</li>
            <li>☆Ketchup 2 tbsp</li>
            <li>☆Water 300ml</li>
            <li>Paserly</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add tuna(with oil) and ☆ in a pan and make it to boil</li>
          <li>Add spaghetti and cook until it is shown on the pack</li>
          <li>Cook off the excess liquid and add beaten egg(mix with salt & pepper)</li>
        </ol>
      </div>
    </div>
  )
}

export default KetchupTunaPasta;
