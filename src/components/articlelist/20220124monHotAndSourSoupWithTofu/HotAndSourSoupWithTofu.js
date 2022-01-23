import React from 'react';
import picture1 from './20220124hotandsoursoup.jpg';

function HotAndSourSoupWithTofu() {
  return (
    <div>
      <h1>Hot And Sour Soup With Tofu　お豆腐酸辣湯スープ</h1>
      <h3>Mon 24.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='hot-and-sour-soup-wit-htofu' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Vinegar 1 tbsp</li>
            <li>Chili oil</li>
            <li>Egg 2</li>
            <li>Tofu 1 pack</li>
            <li>☆Shiro dashi, Konsome, soy sauce 1 tbsp/ea</li>
            <li>☆Water 500ml</li>
            <li>Potato starch 2 tsp and 4 tsp water mix</li>
            <li>Sesame</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add ☆ in a pot to boil and then add potato starch and mix</li>
          <li>Add tofu and beaten eggs and mix softly</li>
          <li>Add chinese chieves to cook</li>
          <li>Turn off the heat and add vinegar and chilioil(option: sesame)</li>
        </ol>
      </div>
    </div>
  )
}

export default HotAndSourSoupWithTofu;
