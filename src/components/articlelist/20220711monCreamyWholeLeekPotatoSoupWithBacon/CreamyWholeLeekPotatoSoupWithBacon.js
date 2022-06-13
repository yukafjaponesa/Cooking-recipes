import React from 'react';
import picture1 from './20220711creamywholeleekpotatosoup.jpg';
import picture2 from './20220711bacon.jpg';
import picture3 from './20220711rosmarin.jpg';

function CreamyWholeLeekPotatoSoupWithBacon() {
  return (
    <div>
      <h1>Creamy Whole Leek Potato Soup With Bacon</h1>
      <h4>丸ごと長ネギとじゃがいものスープ</h4>
      <h3>Mon 11.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='creamy-potato-leek-soup' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Potato 8</li>
            <li>Leek 1</li>
            <li>Bacon 4 slices</li>
            <li>Coconut milk</li>
            <li>Water</li>
            <li>Consomme</li>
            <li>Paserly</li>
            <li>Onion</li>
            <li>Garlic</li>
            <li>Salt, pepper, rosmarin</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop leek, slice onion and cut potato</li>
          <li>Slice bacon and stir in a pan</li>
          <img className='food-pic' src={picture2} alt='bacon' />
          <li>Add leek, garlic and onion in the same pan and stir till slightly browned</li>
          <li>Add salt and coconut milk and stir</li>
          <li>Add potato and stir</li>
          <li>Add rosmarin, water and consomme to cook</li>
          <img className='food-pic' src={picture3} alt='rosmarin' />
          <li>When potatoes are soften, mix with a mixer</li>
          <li>Salt and pepper to taste</li>
          <li>Top with crispy bacon and paserly</li>
        </ol>
      </div>
    </div>
  )
}

export default CreamyWholeLeekPotatoSoupWithBacon;
