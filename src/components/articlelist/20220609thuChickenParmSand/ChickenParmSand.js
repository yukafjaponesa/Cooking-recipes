import React from 'react';
import picture1 from './20220609chickenparmsand.jpg';
import picture2 from './20220609tomatobasil.jpg';
import picture3 from './20220609chickensandbeforebaking.jpg';
import picture4 from './20220609chickensandafterbaking.jpg';

function ChickenParmSand() {
  return (
    <div>
      <h1>Chicken Parm Sand チキンパルメザンサンド</h1>
      <h3>Thu 09.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chicken-parm-sand' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 200g</li>
            <li>Flour, beaten egg, bread crumbles</li>
            <li>Onion 1/2</li>
            <li>Garlic 1 glove</li>
            <li>Chili a bit</li>
            <li>Tomato can 200g</li>
            <li>Salt, fresh basil</li>
            <li>Mozzarella</li>
            <li>Pepper</li>
            <li>Olive oil</li>
            <li>Powdered cheese</li>
            <li>☆Avocado 1/2</li>
            <li>☆Lemon juice 1/2 tsp</li>
            <li>☆Lemon skin a bit</li>
            <li>☆Mustard 1 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Spread chicken flesh and add flour, egg, bread and stir fry</li>
          <li>Chop onion, chili and garlic and cook with tomato can and basil</li>
          <img className='food-pic' src={picture2} alt='tomato-basil' />
          <li>Add tomato sauce on chicken and Mozzarella and put pepper and olive oil</li>
          <li>Toast until cheese melts</li>
          <img className='food-pic' src={picture3} alt='before-baking' />
          <li>Add fresh basil on it</li>
          <img className='food-pic' src={picture4} alt='after-baking' />
          <li>Spread tomato sauce on baguette and put chicken</li>
          <li>Add guacamole on it</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenParmSand;
