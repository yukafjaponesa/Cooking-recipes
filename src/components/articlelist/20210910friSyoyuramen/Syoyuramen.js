import React from 'react';
import picture1 from './20210910syoyuramen.jpg';
import picture2 from './20210910syoyuramenpack.jpg';
import picture3 from './20210910avofetasalad.jpg';

function Syoyuramen() {
  return (
    <div>
      <h1>Syoyu Ramen 醤油ラーメン</h1>
      <h3>Fri 10.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='syoyuramen-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Ramen pack</li>
            <li>Green onion, ham, egg, sesame for toppings</li>
            <li>For Egg</li>
            <li>Soy sauce 2 tbsp</li>
            <li>Vinegar 1 tbsp</li>
            <li>Sugar 1 tsp</li>
            <li>For Avocado Feta cheese salad</li>
            <li>Chopped Avocado, feta cheese, tomato</li>
            <li>Olive oil 2 tbsp</li>
            <li>Vinegar or lemon juice 1 tbsp</li>
            <li>Pepper & salt</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Follow the instruction to cook noodle and make soup</li>
          <li>Toppings as you like</li>
          <li>For Egg</li>
          <li>Cool down egg and peel it</li>
          <li>Mix all the ingredients and put egg. Stay for prefavorly hald day</li>
          <li>For Avocado Feta cheese salad</li>
          <li>Mix with ingredients</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='syuyuramen-pack-pic' />
      <img className='food-pic' src={picture3} alt='avofeta-salad-pic' />
    </div>
  )
}

export default Syoyuramen;
