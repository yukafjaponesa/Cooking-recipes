import React from 'react';
import picture1 from './20220601garlicbuttermentaipasta.jpg';

function GarlicButterMentaiPasta() {
  return (
    <div>
      <h1>Garlic Butter Mentai Pasta ガリバタ明太パスタ</h1>
      <h3>Wed 01.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='garlic-butter-mentai-pasta' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Spaghetti 100g</li>
            <li>Spicy mentaiko 1(50g) or quinoq 50g</li>
            <li>Salt & pepper</li>
            <li>Water 400ml</li>
            <li>Seaweed, spring onion chopped</li>
            <li>Soy sauce 1/2 tsp</li>
            <li>Dashi 1/2 tsp</li>
            <li>Ground garlic 1/2 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add water, soy sauce, garlic and dashi in a pan to boil</li>
          <li>Add quinoq in it if you use it</li>
          <li>After boiling, add pasta and cook</li>
          <li>Add butter (if you don't use quinoa, add mentaiko here)</li>
          <li>Top with spring onion and seaweed</li>
        </ol>
      </div>
    </div>
  )
}

export default GarlicButterMentaiPasta;
