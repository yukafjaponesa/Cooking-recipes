import React from 'react';
import picture1 from './20220313tunasalad3.jpg';

function TunaSalad4kinds3() {
  return (
    <div>
      <h1>Tuna Salad 4 kinds 3 ツナサラダ</h1>
      <h3>Sun 13.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tuna-salad' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***Tuna carrot***</li>
            <li>Sliced carrot</li>
            <li>Vinegar 1 tbsp, soy sauce 1 tsp</li>
            <li>***Bean sprout***</li>
            <li>Bean sprout</li>
            <li>Consome 1 tsp, Salt 1/2 tsp, Sesame oil 2 tsp, toubanjan 1 tsp</li>
            <li>***Cucumber****</li>
            <li>Cucumber</li>
            <li>Mayo & mentsuyu 1 tbsp/ea, sesame oil 1 tsp, consome 1/2 tsp</li>
            <li>***Bell pepper***</li>
            <li>Bell pepper</li>
            <li>Mayo 2 tbsp, sesame oil 2 tsp, consome 1 tsp, mentsuyu 1 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice vegs and steam them(except cucumber)</li>
          <li>Add salt in cucumber and drain water</li>
          <li>Mix with tuna can and ingredients</li>
        </ol>
      </div>
    </div>
  )
}

export default TunaSalad4kinds3;
