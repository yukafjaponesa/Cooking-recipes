import React from 'react';
import picture1 from './20211224christmaswreath1.jpg';
import picture2 from './20211224cornflake.jpg';
import picture3 from './20211224christmaswreathshape.jpg';
import picture4 from './20211224christmaswreath2.jpg';

function ChristmasWreath() {
  return (
    <div>
      <h1>Christmas Wreath コーンフレークでクリスマスリース</h1>
      <h3>Fri 24.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='christmas-wreath1-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>White chocolate 100g</li>
            <li>Match powder 1 tsp</li>
            <li>Butter 20g</li>
            <li>Corn flake 40g</li>
            <li>Rasberry chips, chocolate chips</li>
            <li>Red color pen</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Make chocolate ribbons on cooking sheet</li>
          <li>Chop chocolate in small pieces and put in a bowl</li>
          <li>Put the bowl of chocolate in hot water. Stir gently to melt.</li>
          <li>Sift match powder in it and mix well</li>
          <li>Add corn flakes and mix well</li>
          <li>Make a shape of christmas wreath on cooking sheet</li>
          <li>Top with chocolate chips and ribbon</li>
          <li>Cool down in fridge</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='corn-flake-pic' />
      <br />
      <img className='food-pic' src={picture3} alt='christmas-wreath-shape-pic' />
      <br />
      <img className='food-pic' src={picture4} alt='christmas-wreath2-pic' />
    </div>
  )
}

export default ChristmasWreath;
