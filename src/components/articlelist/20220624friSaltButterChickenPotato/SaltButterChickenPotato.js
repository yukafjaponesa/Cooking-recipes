import React from 'react';
import picture1 from './20220624saltbutterchickenpotato.jpg';

function SaltButterChickenPotato() {
  return (
    <div>
      <h1>Salt Butter Chicken Potato 塩バター鶏じゃが</h1>
      <h3>Fri 24.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='salt-butter-chicken-potato' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Potato 3(medium)</li>
            <li>Chicken 250g(鶏もも)</li>
            <li>Onion sliced 1/2</li>
            <li>Water 130ml</li>
            <li>Sake 2 tbsp</li>
            <li>Consomme 1 tsp</li>
            <li>Ground garlic 1/2 tsp</li>
            <li>Salt & pepper</li>
            <li>Butter 10g</li>
            <li>Black pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut potato and chicken and boil</li>
          <li>Add other ingredients</li>
          <li>Lastly add butter</li>
        </ol>
      </div>
    </div>
  )
}

export default SaltButterChickenPotato;
