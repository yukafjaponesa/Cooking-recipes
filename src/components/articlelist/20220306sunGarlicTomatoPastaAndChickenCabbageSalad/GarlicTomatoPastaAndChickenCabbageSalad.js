import React from 'react';
import picture1 from './20220306garlictomatopastachickencabbagesalad.jpg';

function GarlicTomatoPastaAndChickenCabbageSalad() {
  return (
    <div>
      <h1>Garlic Tomato Pasta And Chicken Cabbage Salad</h1>
      <h1>ガーリックトマトパスタ & ささみとキャベツのあっさりネギ和え</h1>
      <h3>Sun 06.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='garlic-tomato-pasta' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Garlic 3 pieces</li>
            <li>Tomato can 400g</li>
            <li>Chili 3 slices</li>
            <li>Olive oil 3 tbsp</li>
            <li>Pasta 160g</li>
            <li>Water 400cc</li>
            <li>Salt  2/3 tsp</li>
            <li>Pepper a bit</li>
            <li>Paserly, cheese</li>
            <br />
            <li>***For chicken cabbage salad***</li>
            <li>Chicken 2 sticks</li>
            <li>Cabagge, spring onion</li>
            <li>Sake 1 tbsp</li>
            <li>Ponzu-soy sauce 2 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice garlic</li>
          <li>Add olive oil in a pan and use half of garlic to make chips</li>
          <li>Remove them and add the rest of garlic</li>
          <li>Add chili and cook till good smell</li>
          <li>Add tomato can and cook till less water</li>
          <li>Add salt and water to boil and then add pasta</li>
          <li>Cook pasta as shown on the package</li>
          <li>After that, cook for 2 min with high heat and add pepper</li>
          <br />
          <li>***For chicken cabbage salad***</li>
          <li>Boil chicken for 8 min and then cut in small pieces</li>
          <li>Slice cabagge and stem it</li>
          <li>Chop green onion and mix with sauce</li>
          <li>Put chicken on cabagge and add spring onion sauce</li>
        </ol>
      </div>
    </div>
  )
}

export default GarlicTomatoPastaAndChickenCabbageSalad;
