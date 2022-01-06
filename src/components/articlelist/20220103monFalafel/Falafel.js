import React from 'react';
import picture1 from './20220103falafel.jpg';
import picture2 from './20220103falafelpack.jpg';

function Falafel() {
  return (
    <div>
      <h1>Falafel ファラフェル</h1>
      <h3>Mon 03.01.2022</h3>


      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='falafel' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Falafel pre packed</li>
            <li>***For dip***</li>
            <li>Avocado, tomato, red onion, herbs</li>
            <li>Lemon juice, olieve oil, pepper & salt</li>
            <li>Potato</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Stir fri falafel as instructed</li>
          <li>Boil potato</li>
          <li>Smash avocado, chop vegs and mix well with other ingredients</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='falafel-pack' />
    </div>
  )
}

export default Falafel;
