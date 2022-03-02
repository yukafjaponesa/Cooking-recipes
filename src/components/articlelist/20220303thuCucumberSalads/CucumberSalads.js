import React from 'react';
import picture1 from './20220303cucumbersalads.jpg';

function CucumberSalads() {
  return (
    <div>
      <h1>Cucumber Salads きゅうりサラダ2種</h1>
      <h3>Thu 03.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cucumber-salads' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***Ham and cucumber salad with sesame***</li>
            <li>***ハムときゅうりのごまサラダ***</li>
            <li>Ham 4 sticks</li>
            <li>Cucumber 2(200g)</li>
            <li>Salt 1/5tsp</li>
            <li>☆Sugar, soy sauce 1 tsp/ea</li>
            <li>☆Vinegar, white sesame 1 tbsp/ea</li>
            <br />
            <li>***Cucumber and tomato chinese salad***</li>
            <li>***きゅうりとトマトの中華風サラダ***</li>
            <li>Cucumber 1</li>
            <li>Ginger 1 slice</li>
            <li>Tomato 1(big)</li>
            <li>Sesame oil 1.5 tbsp</li>
            <li>Consome 1 tsp</li>
            <li>Vinegar, chili oil 1/2 tsp/ea</li>
            <li>Sesame 1 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>***Ham and cucumber salad with sesame***</li>
          <li>Slice cucumber and add salt to rest 5 min</li>
          <li>Drain water</li>
          <li>Slice ham</li>
          <li>Add all in a bowl and mix well</li>
          <br />
          <li>***Cucumber and tomato chinese salad***</li>
          <li>Slice cucumber and ginger and cut tomato</li>
          <li>Mix with all</li>
        </ol>
      </div>
    </div>
  )
}

export default CucumberSalads;
