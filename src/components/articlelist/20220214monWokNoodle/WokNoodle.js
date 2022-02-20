import React from 'react';
import picture1 from './20220214woknoodle.jpg';
import picture2 from './20220214woksauce.jpg';

function WokNoodle() {
  return (
    <div>
      <h1>Wok Noodle ワック</h1>
      <h3>Mon 14.02.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='wok-noodle' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Wok sauce 400g</li>
            <li>Noodle</li>
            <li>Vegs - carrot, cabagge, onion, ginger</li>
            <li>Asian vegs - bamboo, bean sprout</li>
            <li>Chicken</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop vegs</li>
          <li>Cook chicken and vegs in oil</li>
          <li>Add wok sauce</li>
          <li>Cook noodle</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='wok-sauce' />
    </div>
  )
}

export default WokNoodle;
