import React from 'react';
import picture1 from './20220406michelinstarpasta.jpg';
import picture2 from './20220406sunnysideegg.jpg';
import picture3 from './20220406egg.jpg';

function MichelinStarPasta() {
  return (
    <div>
      <h1>Michelin Star Pasta ミシュランシェフが教える無限パスタ</h1>
      <h3>Wed 06.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='michelin-pasta' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pasta 100g</li>
            <li>Mentsuyu 1 tsp</li>
            <li>Butter 20g</li>
            <li>SHio kombu 3g</li>
            <li>Powdered cheese 10g</li>
            <li>Egg 2</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook pasta</li>
          <li>Make 2 sunny side eggs and 1 of them to cook both side and then cut in pieces</li>
          <img className='food-pic' src={picture2} alt='sunny-side-egg' />
          <br />
          <img className='food-pic' src={picture3} alt='egg' />
          <li>Add other ingredients in a bowl and mix mix with pasta</li>
        </ol>
      </div>
    </div>
  )
}

export default MichelinStarPasta;
