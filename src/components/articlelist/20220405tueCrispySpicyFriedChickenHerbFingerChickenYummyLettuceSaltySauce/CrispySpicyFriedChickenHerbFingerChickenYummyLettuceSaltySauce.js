import React from 'react';
import picture1 from './20220405crispyspicyherbfingerchicken.jpg';

function CrispySpicyFriedChickenHerbFingerChickenYummyLettuceSaltySauce() {
  return (
    <div>
      <h1>Crispy Spicy Fried Chicken & Herb Finger Chicken & Yummy Lettuce Salty Sauce</h1>
      <h1>ザクザクスパイシーフライドチキン & ハーブチキンフィンガー & やみつき塩だれレタス</h1>
      <h3>Tue 05.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='bacon-cheese-steamed-bun' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***Crispy spicy fried chicken***</li>
            <li>Chicken 300g</li>
            <li>Beaten egg 1/2</li>
            <li>Milk 2 tbsp</li>
            <li>Flour 2 tbsp</li>
            <li>Soy sauce 1 tbsp</li>
            <li>Graind ginger 1 tbsp</li>
            <li>Graind garlic 1 tsp</li>
            <li>Chili powder 1 tsp</li>
            <li>Cayenne pepper 1 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>***For Crispy spicy fried chicken***</li>
          <li>Mix all with chicken except flour 50g</li>
          <li>Rest in fridge for 1 hour</li>
          <li>Sift flour on chicken and deep fry</li>
          <br />
          <li>***Herb finger chicken***</li>
          <li>Chicken 200g</li>
          <li>Herb salt 1/2 tsp</li>
          <li>Egg 1</li>
          <li>Water 50ml</li>
          <li>Flour 3 tbsp</li>
          <br />
          <li>Add herb salt onto chicken</li>
          <li>Mix flour, water and egg</li>
          <li>Add chicken in it and deep fry</li>
          <br />
          <li>***Yummy lettuce salty sauce***</li>
          <li>Salt, graind garlic 1/3 tsp/ea</li>
          <li>Consommé 1/2 tsp</li>
          <li>Vinegar, sesame oil 1 tbsp/ea</li>
          <li>Pepper</li>
          <li>White sesame</li>
          <li>Lettuce 1</li>
          <br />
          <li>Cut lettuce and mix with the ingredients</li>
          <li>Add sesame</li>
        </ol>
      </div>
    </div>
  )
}

export default CrispySpicyFriedChickenHerbFingerChickenYummyLettuceSaltySauce;
