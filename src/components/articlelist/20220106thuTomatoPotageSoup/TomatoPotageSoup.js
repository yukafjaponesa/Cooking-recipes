import React from 'react';
import picture1 from './20220106tomatopotagesoup.jpg';

function TomatoPotageSoup() {
  return (
    <div>
      <h1>Tomato Potage Soup トマトポタージュ & りんごドレッシング</h1>
      <h3>Thu 06.01.2022</h3>


      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tomato-potage' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***Tomato potage for 2 persons***</li>
            <li>Potato 120g</li>
            <li>Onion 40g</li>
            <li>Tomato can 100g</li>
            <li>Butter 1 tbsp</li>
            <li>Water 300ml</li>
            <li>Konsome 1 tbsp</li>
            <li>Milk 150ml</li>
            <li>Salt & pepper and paserly</li>
            <li>***For Apple dressing***</li>
            <li>Apple 1(with or without skin as you like)</li>
            <li>Olive oil 1 tbsp</li>
            <li>Lemon juice 1 tsp</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Thin slice potato & onion and stri fry with butter</li>
          <li>Add tomato and water and cook until potato is soften and add consome</li>
          <li>Add in a mixer</li>
          <li>Pour in the pod again and add milk and heat befor boiling</li>
          <li>Add salt & pepper to the taste</li>
          <br />
          <li>***For Apple dressing***</li>
          <li>Grate apple and mix with all the ingredients</li>
        </ol>
      </div>
    </div>
  )
}

export default TomatoPotageSoup;
