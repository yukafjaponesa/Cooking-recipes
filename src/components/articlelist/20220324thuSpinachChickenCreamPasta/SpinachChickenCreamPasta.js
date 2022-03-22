import React from 'react';
import picture1 from './20220324spinachchickencreampasta.jpg';

function SpinachChickenCreamPasta() {
  return (
    <div>
      <h1>Spinach Chicken Cream Pasta ほうれん草とチキンのクリームパスタ</h1>
      <h1>Tataki cucumber and chicken mix ごま油香るたたききゅうりとささみの簡単和え</h1>
      <h3>Thu 24.03.2022</h3>
      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='spinach-chicken-cream-pasta' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Spaghetti 100g</li>
            <li>Spinach 100g</li>
            <li>Chicken 125g</li>
            <li>Water 200ml</li>
            <li>Butter 10g</li>
            <li>Milk 100cc</li>
            <li>Salt 1/3 tsp</li>
            <li>Pepper</li>
            <li>Powdered cheese 1 tbsp</li>
            <li>***For tataki cucumber***</li>
            <li>Chicken 1 stick, Sake 1 tbsp</li>
            <li>Cucumber 1 small, Salt 1 tsp</li>
            <li>Soy sauce 1/2 tbsp</li>
            <li>Sesame oil 1 tbsp</li>
            <li>Sugar,toubanjan 1/4 tsp/ea</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add chicken and sake in boiled water and boil for 8 min</li>
          <li>Sprinkle salt on cucumber and drain with water</li>
          <li>Add cucumber in a plastic bag and crush it</li>
          <li>Add all the other ingredients and loosen chicken</li>
        </ol>
      </div>
    </div>
  )
}

export default SpinachChickenCreamPasta;
