import React from 'react';
import picture1 from './20220402koreanricebowlonsenegg.jpg';

function KoreanRiceBowlOnsenEgg() {
  return (
    <div>
      <h1>Korean Rice Bowl Onsen Egg 韓国風温玉丼</h1>
      <h3>Sat 02.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='korean-rice-bowl-onsen-egg' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chopped spring onion 5g</li>
            <li>Egg 1</li>
            <li>Seaweed 1</li>
            <li>Kocgujan 1 tbsp</li>
            <li>Vinegar 2 tsp</li>
            <li>Soy sauce 1 tsp</li>
            <li>Sesame oil 1 tbsp</li>
            <li>White sesame 2 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Boil water and remove from the heeat and put egg and lid for 10 min</li>
          <li>Mix sauce</li>
        </ol>
      </div>
    </div>
  )
}

export default KoreanRiceBowlOnsenEgg;
