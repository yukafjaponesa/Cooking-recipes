import React from 'react';
import picture1 from './20220301bakedcheesecake.jpg';
import picture2 from './20220301bakedcheesecakepan.jpg';

function BakedCheesseCake() {
  return (
    <div>
      <h1>Baked Cheesse Cake 卵焼き器でベイクドチーズケーキ</h1>
      <h3>Tue 01.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='baked-cheese-cake' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Oreo cookie 6 pieces</li>
            <li>Melted butter 20g</li>
            <li>Cream cheese 200g</li>
            <li>Egg 1</li>
            <li>Sugar 3 tbsp</li>
            <li>Flour 1 tbsp</li>
            <li>Lemon juice 1 tbsp</li>
            <li>Chocolate 25g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add oreo in a plastic bag and crush it</li>
          <li>Add butter and mix</li>
          <li>Add baking paper onto bottom of egg roll pan</li>
          <li>Put oreo</li>
          <li>Add cream cheese in a bowl and mix to soften</li>
          <li>Add sugar,egg and mix well</li>
          <li>Sift flour and mix. Add lemon juice and mix</li>
          <li>Melt chocolate and add 2 tbsp of cheese cream and mix</li>
          <li>Pour cheese cream onto oreo</li>
          <li>Add chocolate and make marble pattern</li>
          <li>Cover with alminum folie and cook for 15 min with very low heat</li>
          <li>Stop the stove and rest for 10 min</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='baked-cheese-cake-pan' />
    </div>
  )
}

export default BakedCheesseCake;
