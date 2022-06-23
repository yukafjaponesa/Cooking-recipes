import React from 'react';
import picture1 from './20220723stirtomatochickenwithleek.jpg';
import picture2 from './20220723cuttomato.jpg';
import picture3 from './20220723stirtomatochicken.jpg';

function StirTomatoChickenWithLeek() {
  return (
    <div>
      <h1>Stir Tomato Chicken With Leek トマトと鶏肉のネギ塩炒め</h1>
      <h3>Sat 23.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='stir-chicken-tomato-leek' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken(鶏もも) 1(250g)</li>
            <li>Tomato 1 big</li>
            <li>Potato starch 1 tbsp</li>
            <li>Oil 2 tsp</li>
            <li>Leek(長ネギ) 1/2</li>
            <li>Sake 2 tbsp</li>
            <li>Sesame oil 1 tsp</li>
            <li>Salt 1/2 tsp</li>
            <li>Pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut tomato, chop leek</li>
          <img className='food-pic' src={picture2} alt='cut-tomato' />
          <li>Add oil in a pan and stir chicken skin side</li>
          <li>Add tomato to stir</li>
          <img className='food-pic' src={picture3} alt='stir-chicken-tomato' />
          <li>Add others and mix well</li>
        </ol>
      </div>
    </div>
  )
}

export default StirTomatoChickenWithLeek;
