import React from 'react';
import picture1 from './20220106crispysweetpotato.jpg';

function CrispySweetPotato() {
  return (
    <div>
      <h1>Crispy Sweet Potato カリカリポテト</h1>
      <h3>Thu 06.01.2022</h3>


      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='crispy-sweet-potatoes' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sweet potato 250g</li>
            <li>Butter 15g</li>
            <li>Sugar 2 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop sweet potato in small pieces(with or without skin as you like)</li>
          <li>Stay in water for 5 min</li>
          <li>Steam it until soften or microwave oven 600w 3 min with lightly cover with wrap</li>
          <li>Add butter and sweet potato in a pan with strong heat</li>
          <li>When it is browned, turn the heat lower adn add sugar and mirin</li>
          <li>Stir fry until they are terued</li>
          <li>It will be crispy after cooling down</li>
        </ol>
      </div>
    </div>
  )
}

export default CrispySweetPotato;
