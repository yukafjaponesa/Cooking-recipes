import React from 'react';
import picture1 from './20220625stirchickenpotato.jpg';

function StirChickenPotatoSaltLeek() {
  return (
    <div>
      <h1>Stir Chicken Potato Salt Leek 鶏肉とジャガイモの旨ねぎ塩炒め</h1>
      <h3>Sat 25.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chicken-potato-salt-leek' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Potato 2(medium)</li>
            <li>Leek white part 1/2</li>
            <li>Chicken 200g(鶏もも)</li>
            <li>Sake 2 tbsp</li>
            <li>Shiro dashi 1.5 tbsp</li>
            <li>Pepper 1/4 tsp</li>
            <li>Salt</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut potato and boil to soften</li>
          <li>Cut chicken and stir</li>
          <li>Add potato in chicken pan</li>
          <li>Chop leek and mix with ingredients</li>
          <li>Pour into the pan and mix</li>
        </ol>
      </div>
    </div>
  )
}

export default StirChickenPotatoSaltLeek;
