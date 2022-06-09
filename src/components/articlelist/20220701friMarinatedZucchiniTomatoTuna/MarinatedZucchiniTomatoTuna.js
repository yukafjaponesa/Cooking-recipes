import React from 'react';
import picture1 from './20220701marinatedzucchini.jpg';
import picture2 from './20220701grilledvegs.jpg';

function MarinatedZucchiniTomatoTuna() {
  return (
    <div>
      <h1>Marinated Zucchini Tomato Tuna ズッキーニとトマトのツナマリネ</h1>
      <h3>Fri 01.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='marinated-zucchini' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Zucchini 1</li>
            <li>Yellow paprika 1/2</li>
            <li>Mini tomato 5</li>
            <li>Tuna can 1(70g)</li>
            <li>Balck pepper</li>
            <li>☆Sugar, soy sauce 2 tsp</li>
            <li>☆Lemon juice, olive oil 1 tbsp/ea</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut zucchini in 1 cm weight, cut paprika</li>
          <li>Cut tomatoes in half</li>
          <li>Add olive oil(not in ingredients) and stir vegs(except tomatoes)</li>
          <img className='food-pic' src={picture2} alt='grilled-vegs' />
          <li>Mix ☆ in a bowl</li>
          <li>Add salt & pepper in the pan</li>
          <li>Add tuna, tomatoes and vegs in the bowl to marinate</li>
          <li>Rest in fridge for 30 min</li>
        </ol>
      </div>
    </div>
  )
}

export default MarinatedZucchiniTomatoTuna;
