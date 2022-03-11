import React from 'react';
import picture1 from './20220309kimpa.jpg';
import picture2 from './20220309kimparoll.jpg';

function Kimpa() {
  return (
    <div>
      <h1>Kimpa キンパ</h1>
      <h3>Wed 09.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='kimpa' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***For namuru***</li>
            <li>Bean sprout 1/4 bag</li>
            <li>Carrot 1/8</li>
            <li>Spinach 1 bunch</li>
            <li>Sesame oil 1/2 bsp</li>
            <li>Sesame 1 tsp</li>
            <li>Soy sauce, consome 1/2 tsp/ea</li>
            <li>***For minced chicken***</li>
            <li>Minced chicken 90g</li>
            <li>Sesame oil, kochujan, sugar, mirin, sake, soy sauce 1/2 tsp/ea</li>
            <li>***For rice***</li>
            <li>Chinese cabbage 1/8</li>
            <li>Rice 120g</li>
            <li>Kimchi 40g</li>
            <li>Konsome 3/4 tsp</li>
            <li>Seaweed</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop carrot and chinese cabagge</li>
          <li>Steam carrot, spinach, chinese cabagge and bean sprout to soften</li>
          <li>Add namuru ingredients in a bowl and mix</li>
          <li>Stir minced chicken and taste with the ingredients</li>
          <li>Chop kimchi and chinese cabbage and mix with rice and consome</li>
          <li>Seaweed, rice, namuru and chicken to roll</li>
          <img className='food-pic' src={picture2} alt='kimpa-roll' />
        </ol>
      </div>
    </div>
  )
}

export default Kimpa;
