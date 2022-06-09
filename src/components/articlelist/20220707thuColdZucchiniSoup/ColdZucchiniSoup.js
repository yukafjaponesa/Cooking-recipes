import React from 'react';
import picture1 from './20220708coldzucchinisoup.jpg';

function ColdZucchiniSoup() {
  return (
    <div>
      <h1>Cold Zucchini Soup ズッキーニの冷製スープ</h1>
      <h3>Thu 07.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cold-zucchini-soup' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Zucchini 1(medium)</li>
            <li>Onion 1/4</li>
            <li>Water 200ml</li>
            <li>Milk 200cc</li>
            <li>Consomme 1 tsp</li>
            <li>Olive oil 1 tbsp</li>
            <li>Salt & pepper</li>
            <li>Heavy cream</li>
            <li>Parsley</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Thin slice zucchini and onion</li>
          <li>Add oil in a pan and stir onion first</li>
          <li>Then add zucchini</li>
          <li>Add water and consomme and cook until soften</li>
          <li>Cool down and mix to smooth</li>
          <li>Put back in the pan and add milk and warm it</li>
          <li>Salt and pepper to taste, Do Not Boil!</li>
        </ol>
      </div>
    </div>
  )
}

export default ColdZucchiniSoup;
