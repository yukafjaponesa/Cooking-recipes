import React from 'react';
import picture1 from './20220304boiledlettuce1.jpg';
import picture2 from './20220304boiledlettuce2.jpg';
import picture3 from './20220304boiledlettuce3.jpg';

function BoiledLettuce() {
  return (
    <div>
      <h1>Boiled Lettuce レタスのおひたし</h1>
      <h3>Fri 04.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='boile-lettuce1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Lettuce a whole 1 or 5 big leaves</li>
            <li>Graind black sesame 1 tbsp</li>
            <li>Mentsuyu 1.5 tbsp</li>
            <li>Sesame oil 1/2 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook lettuce for 20 sec in boiled water</li>
          <li>Put in cold water and drain water</li>
          <li>Add pepper in the middle of lettuce and roll it</li>
          <img className='food-pic' src={picture2} alt='boile-lettuce2' />
          <li>Mix sauce and pour on it</li>
        </ol>
      </div>
      <img className='food-pic' src={picture3} alt='boile-lettuce3' />
    </div>
  )
}

export default BoiledLettuce;
