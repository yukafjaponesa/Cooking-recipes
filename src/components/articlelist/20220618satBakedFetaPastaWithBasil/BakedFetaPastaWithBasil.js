import React from 'react';
import picture1 from './20220618bakedfetapasta.jpg';
import picture2 from './20220618bakedfetabefore.jpg';
import picture3 from './20220618bakedfetaafter.jpg';

function BakedFetaPastaWithBasil() {
  return (
    <div>
      <h1>Baked Feta Pasta With Basil ベイクドフェタチーズパスタ</h1>
      <h3>Sat 18.06.2022</h3>
      <h4>For 4 servings</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='baked-feta-pasta' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cherry tomato 400g</li>
            <li>Garlic 3 gloves</li>
            <li>Feta cheese 200g</li>
            <li>Olive oil 4 tbsp</li>
            <li>Fusilli 500g</li>
            <li>Basil 15g</li>
            <li>Pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 200℃</li>
          <li>Add tomato, garlic and feta in oven safe plate and pour olive oil</li>
          <li>Add pepper and bake for 30 min</li>
          <img className='food-pic' src={picture2} alt='before-baking' />
          <li>While baking, cook fusilli</li>
          <li>Add fusilli and basil in tomato/feta and mix</li>
          <img className='food-pic' src={picture3} alt='after-baking' />
        </ol>
      </div>
    </div>
  )
}

export default BakedFetaPastaWithBasil;
