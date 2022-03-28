import React from 'react';
import picture1 from './20220330seaweedmochi1.jpg';
import picture2 from './20220330seaweedmochi2.jpg';

function SeaweedMochi() {
  return (
    <div>
      <h1>Seaweed Mochi 磯辺チーズ餅</h1>
      <h3>Thu 31.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='seaweed-mochi1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Potato 2 big</li>
            <li>Milk 3 tbsp</li>
            <li>Potato starch 2 tbsp</li>
            <li>Salt</li>
            <li>Seaweed flake 1 tbsp</li>
            <li>Cheese</li>
            <li>Butter</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Boil potatoes and smash</li>
          <li>Add milk, salt, seaweed and potato starch and make 4 balls</li>
          <li>Add cheese in it and stir with butter</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='seaweed-mochi2' />
    </div>
  )
}

export default SeaweedMochi;
