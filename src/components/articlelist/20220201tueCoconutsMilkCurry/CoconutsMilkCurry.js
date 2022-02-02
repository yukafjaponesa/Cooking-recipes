import React from 'react';
import picture1 from './20220201cocnutsmilkcurry.jpg';

function CoconutsMilkCurry() {
  return (
    <div>
      <h1>Coconuts Milk Curry ココナッツミルクカレー</h1>
      <h3>Tue 01.02.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='coconauts-milk-curry' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Shrimps 50g(10 pieces)</li>
            <li>Sliced onion half</li>
            <li>Curry powder 1.5 tbsp</li>
            <li>Graind garlic & ginger 1 tsp/ea</li>
            <li>Tomato can 200g</li>
            <li>Coconuts milk 200g</li>
            <li>Sugar, consome 1 tbsp</li>
            <li>Fish sauce(ナンプラー) 1 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add oil in a pan and stir fry shrimps and remove from pan</li>
          <li>Add onion in the same pan and cook till brown</li>
          <li>Put onion to the edge and add curry powder, garlic & ginger in the middle and mix</li>
          <li>Mix with onion</li>
          <li>Add tomato can and coconuts milk and mix well</li>
          <li>Add sugar, consome (and fish sauce) and cook</li>
        </ol>
      </div>
    </div>
  )
}

export default CoconutsMilkCurry;
