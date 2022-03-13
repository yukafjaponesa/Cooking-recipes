import React from 'react';
import picture1 from './20220310tunasalad1.jpg';

function TunaSalads4kinds1() {
  return (
    <div>
      <h1>Tuna Salads 4 kinds 1 人参とツナのめんつゆ和え & ごぼうとツナのサラダ</h1>
      <h3>Thu 10.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tuna-salad' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***Tuna carrot***</li>
            <li>Carrot 2(200g)</li>
            <li>Tuna 80g</li>
            <li>Spring onion</li>
            <li>White sesame 1 tbsp</li>
            <li>Mentsuyu 1 tbsp</li>
            <li>Sesame oil 2 tsp</li>
            <br />
            <li>***Burdock and sea chicken salad***</li>
            <li>Burdock 2(100g)</li>
            <li>Carrot 1/2(80g)</li>
            <li>Cucumber 1</li>
            <li>Tuna 80g</li>
            <li>Soy sauce 1/2 tbsp</li>
            <li>Mayo 2 tbsp</li>
            <li>Sesame 2 tsp</li>
            <li>Salt</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>***Tuna carrot***</li>
          <li>Slice carrot and steam it</li>
          <li>Mix with all the ingredients</li>
          <li>Topping: spring onion and sesame</li>
          <br />
          <li>***Burdock and sea chicken salad***</li>
          <li>Slice vegs and steam burdock and carrot</li>
          <li>Mix all the ingredients</li>
        </ol>
      </div>
    </div>
  )
}

export default TunaSalads4kinds1;
