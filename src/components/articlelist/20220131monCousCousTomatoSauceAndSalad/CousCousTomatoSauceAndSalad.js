import React from 'react';
import picture1 from './20220131couscoustomatosauce.jpg';
import picture2 from './20220131couscoussalad.jpg';

function CousCousTomatoSauceAndSalad() {
  return (
    <div>
      <h1>CousCous Tomato Sauce And Salad</h1>
      <h1>鶏肉と野菜のトマト煮～クスクス添え～ & クスクスサラダ</h1>
      <h3>Mon 31.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='couscous-tomato' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>☆Chickem 400g</li>
            <li>☆Salt, cumin 1 tsp/ea</li>
            <li>Zucchini 1</li>
            <li>Carrot, onion, japanese radish</li>
            <li>Chopped garlic 1 piece</li>
            <li>Boiled chickpeas 1 can</li>
            <li>(A)Tomato can 1 (400g)</li>
            <li>(A)Cumin powder 1 tbsp</li>
            <li>(A)Coriander powder 2 tsp</li>
            <li>(A)White wine or sake 3 tbsp</li>
            <br/ >
            <li>***For Cous Cous salad***</li>
            <li>Chopped tomato, cucumber, red onion</li>
            <li>Lemon juice, salt, olive oil</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Mix ☆ and rest it</li>
          <li>Slice zucchiniand onion,Cut the carrot and radish into large chunks</li>
          <li>Add oil in a pot and stir fry chicken and remove from it</li>
          <li>Add oil in the same pan and stir fri garlic, onion, carrot and radish</li>
          <li>Put chickne back in the pan and add (A) and add water to cover</li>
          <li>Cook for 20min</li>
          <li>Add zucchini and chickpeas and cook for 10 min</li>
          <li>Salt to taste or consome</li>
          <li>***Cous cous***</li>
          <li>150g cous cous with double water</li>
          <li>Boil water in a topf and turn it off</li>
          <li>Add cous cous, salt, olive oil and wait for 10 min</li>
          <br />
          <li>***Cous cous salad***</li>
          <li>Mix all vegs, cous cous and sauce</li>
          <li>Option: add oregano, italian herbs</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='couscous-salad' />
    </div>
  )
}

export default CousCousTomatoSauceAndSalad;
