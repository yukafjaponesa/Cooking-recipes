import React from 'react';
import picture1 from './20211211chickennamban.jpg';

function ChickenNamban() {
  return (
    <div>
      <h1>Chicken Namban & Spiicy Broccoli チキン南蛮 & 辛旨ブロッコリー</h1>
      <h3>Sat 11.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chicekn-namban-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 400g</li>
            <li>Papper & salt</li>
            <li>Flour 2 tbsp, Beaten egg 1</li>
            <li>Oil</li>
            <li>***For sweet sour sauce***</li>
            <li>☆Soy sauce & sugar 2 tbsp/ea</li>
            <li>☆Vinegar 1 tbsp</li>
            <li>☆Graind ginger 1/2 tsp</li>
            <li>***For tartar sauce***</li>
            <li>Boiled egg</li>
            <li>Mayo 60g</li>
            <li>Lemon juice 1 tsp</li>
            <li>Cabbage, tomato, sunny lettecue, paserly</li>
            <br />
            <li>For Spicy tasty broccoli</li>
            <li>Boiled broccoli</li>
            <li>Soy sauce 1 & 1/2 tbsp</li>
            <li>Vinegar 1 tbsp</li>
            <li>Sugar, sesame, Sesame oil 1/2 tbsp/ea</li>
            <li>Chili oil 1 tsp</li>
            <li>Honey 1/2 tsp (not necessary)</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>***For tartar sauce***</li>
          <li>Smash egg with a fork and mix other ingredients well</li>
          <br />
          <li>Cut chicekn in pieces and add salt & pepper</li>
          <li>Flour → beaten egg and deep fry for 8 min</li>
          <br />
          <li>***For Sweet sour sauce***</li>
          <li>Add all in a pan and make it warm enough</li>
          <li>After that, add chicken in the sauce</li>
          <li>Top with tartar sauce and paserly</li>
          <br />
          <li>***For spicy tasty broccoli***</li>
          <li>Boil broccoli and mix all the ingredients</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenNamban;
