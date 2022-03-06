import React from 'react';
import picture1 from './20220307butterchickencurry.jpg';

function ButterChickenCurry() {
  return (
    <div>
      <h1>Butter Chicken Curry 市販のルーでバターチキンカレー</h1>
      <h3>Mon 07.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='butter-chicken-curry' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Butter 40g</li>
            <li>Chicken 300g</li>
            <li>Garlic 3 gloves</li>
            <li>Onion 1(big one)</li>
            <li>Tomato can 250g</li>
            <li>Heavy cream 100cc</li>
            <li>Curry rouex 3 pieces</li>
            <li>Paprika powder 1 tbsp</li>
            <li>Soy sauce 1 tbsp</li>
            <li>Paserly</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop garlic and onion and cut chicken</li>
          <li>Add butter in a pan and cook garlic and onion</li>
          <li>Add chicken to cook</li>
          <li>Add tomato can and heavy cream</li>
          <li>Add curry rouex till melt. Add water occacionally</li>
          <li>Add soy sauce short before completed</li>
          <li>Cook pasta as shown on the package</li>
        </ol>
      </div>
    </div>
  )
}

export default ButterChickenCurry;
