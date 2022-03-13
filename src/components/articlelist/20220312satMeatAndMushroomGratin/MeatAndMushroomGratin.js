import React from 'react';
import picture1 from './20220312meatandmushroomgratin.jpg';
import picture2 from './20220312tomatosoupknorr1.jpg';
import picture3 from './20220312tomatosoupknorr2.jpg';
import picture4 from './20220312gratin.jpg';

function MeatAndMushroomGratin() {
  return (
    <div>
      <h1>Meat And Mushroom Gratin ひき肉ときのこのグラタン</h1>
      <h3>Sat 12.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='meat-mushroom-gratin' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Minced meat 80g</li>
            <li>Potato 1(big one)</li>
            <li>Mushroom</li>
            <li>Tomato can 250g</li>
            <li>Ketchap 2 tbsp</li>
            <li>Consome 1 tsp</li>
            <li>Paserly, cheese</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut potato in small pieces</li>
          <li>Slice mush room</li>
          <li>Add oil in a pan and cook all</li>
          <li>Add tomato, consome, ketchap</li>
          <li>7 min bake in toaster</li>
          <li>knorr tomato soup</li>
          <li>Cook from cold water 500ml for 5 min after boiling</li>
          <img className='food-pic' src={picture2} alt='tomato-soup-knorr1' />
          <br />
          <img className='food-pic' src={picture3} alt='tomato-soup-knorr2' />
          <br />
          <img className='food-pic' src={picture4} alt='gratin' />
        </ol>
      </div>
    </div>
  )
}

export default MeatAndMushroomGratin;
