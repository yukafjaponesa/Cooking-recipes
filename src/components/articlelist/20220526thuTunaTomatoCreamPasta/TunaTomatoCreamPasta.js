import React from 'react';
import picture1 from './20220526tunatomatocreampasta.jpg';

function TunaTomatoCreamPasta() {
  return (
    <div>
      <h1>Tuna Tomato Cream Pasta ツナのトマトクリームパスタ</h1>
      <h3>Thu 26.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tuna-tomato-cream-pasta' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sliced onion 40g</li>
            <li>Sliced black olive 2 pieces</li>
            <li>Tuna can 1 (70g)</li>
            <li>Garlic 1/2 glove</li>
            <li>Water 200ml</li>
            <li>Tomato can 120g</li>
            <li>Oil</li>
            <li>Spaghetti 100g</li>
            <li>Consomme 1/2 tsp</li>
            <li>Milk 50cc</li>
            <li>Paserly</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add oil in a pan and cook garlic</li>
          <li>Add onion, black olive and tuna(without oil)</li>
          <li>Add water, tomato can and consomme to boil</li>
          <li>Add pasta and cook</li>
          <li>Add milk</li>
        </ol>
      </div>
    </div>
  )
}

export default TunaTomatoCreamPasta;
