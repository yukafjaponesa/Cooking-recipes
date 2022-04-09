import React from 'react';
import picture1 from './20220411crispy1bitegyoza.jpg';
import picture2 from './20220411gyoza1.jpg';
import picture3 from './20220411gyoza2.jpg';
import picture4 from './20220411soumencabbageegg.jpg';
import picture5 from './20220411tonpeiyaki.jpg';

function Crispy1BiteGyozaSeaweedSoupSoumenTonpeiyaki() {
  return (
    <div>
      <h1>Crispy 1 Bite Gyoza & Seaweed Soup & Soumen Tonpeiyaki</h1>
      <h1>カリカリ1口餃子 & ワカメとネギのスープ & そうめんのとん平風</h1>
      <h3>Mon 11.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='crispy-1bite-gyoza' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***Crispy 1 bite gyoza***</li>
            <li>Cabbage 70g</li>
            <li>Ground pork 100g</li>
            <li>Chinese chive 30g</li>
            <li>Salt 1/4 tsp</li>
            <li>Ground garlic & ginger 1 tsp/ea</li>
            <li>Boiled water 80ml & consomme 1 tsp mix</li>
            <li>Sesame oil 3 tbsp</li>
            <li>Water 100ml</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop vegs and add salt and rest for 5 min</li>
          <li>Drain water and add pork, garlic, ginger consomme water and rest 20 min in fridge</li>
          <li>Make 20 pieces of gyoza</li>
          <img className='food-pic' src={picture2} alt='crispy-1bite-gyoza1' />
          <br />
          <img className='food-pic' src={picture3} alt='crispy-1bite-gyoza2' />
          <li>Add 2 tbsp of sesame oil and put gyoza</li>
          <li>Add water and put lid to steam</li>
          <li>Before finishing, add 1 tbsp of sesame oil</li>
          <br />
          <li>***Seaweed soup***</li>
          <li>Seaweed 2g</li>
          <li>White leek 40g</li>
          <li>Water 400ml</li>
          <li>Consomme 1.5 tsp</li>
          <li>Salt</li>
          <li>White sesame</li>
          <li>Sesame oil 2 tsp</li>
          <br />
          <li>Thin slice leek</li>
          <li>Add water in pot and add all to boil</li>
          <br />
          <li>***Soumen tonpei yaki***</li>
          <li>Soumen 50g</li>
          <li>Egg 1</li>
          <li>Bacon or thin sliced pork 100g</li>
          <li>Cabbage 2 leaves</li>
          <li>Oil 1 tsp</li>
          <li>Okonomiyaki sauce 3 tbsp</li>
          <li>Mayo 1 tbsp</li>
          <li>Spring onion</li>
          <br />
          <li>Chop cabbage and cut bacon</li>
          <li>Boil soumen and cabbage</li>
          <li>Add soumen, egg and cabbage in a plastic bag and crush half of it</li>
          <img className='food-pic' src={picture4} alt='egg-in-bag' />
          <li>Add oil in a pan and bacon</li>
          <li>Add soumen on it and put another bacon on it(sandwich with bacons)</li>
          <img className='food-pic' src={picture5} alt='tonpei-yaki' />
          <li>Cook both side</li>
        </ol>
      </div>
    </div>
  )
}

export default Crispy1BiteGyozaSeaweedSoupSoumenTonpeiyaki;
