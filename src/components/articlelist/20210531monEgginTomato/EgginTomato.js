import React from 'react';
import picture1 from './20210531breakyplate.jpg';
import picture2 from './20210531tomatoprep1.jpg';
import picture3 from './20210531tomatoprep2.jpg';
import picture4 from './20210531tomatoprep3.jpg';
import picture5 from './20210531tomatoprep4.jpg';
import picture6 from './20210531tomatoprep5.jpg';
import picture7 from './20210531tomatoprep6.jpg';
import picture8 from './20210531eggtomatobake.jpg';


function EgginTomato() {
  return (
    <div>
      <h1>Egg in Tomato 卵入りベイクドトマト</h1>
      <h3>Mon 31.05.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='breakyplate-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>2 big tomatoes</li>
            <li>Herbs - paserly, dill etc</li>
            <li>Egg</li>
            <li>Pizza Cheese</li>
            <li>Oilve oil</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 200℃</li>
          <li>Cut off tomato top and remove inside</li>
          <li>Put herbs, egg, pepper & salt and cheese</li>
          <li>Spread olive oil in a plate and put tomato on it</li>
          <li>20 min in the oven</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='tomatoprep1-pic' />
      <img className='food-pic' src={picture3} alt='tomatoprep2-pic' />
      <img className='food-pic' src={picture4} alt='tomatoprep3-pic' />
      <img className='food-pic' src={picture5} alt='tomatoprep4-pic' />
      <img className='food-pic' src={picture6} alt='tomatoprep5-pic' />
      <img className='food-pic' src={picture7} alt='tomatoprep6-pic' />
      <img className='food-pic' src={picture8} alt='eggtomatobake-pic' />
    </div>
  )
}

export default EgginTomato;
