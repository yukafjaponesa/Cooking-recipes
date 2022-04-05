import React from 'react';
import picture1 from './20220405melonbread.jpg';
import picture2 from './20220405melondough.jpg';
import picture3 from './20220405melonpatternknife.jpg';
import picture4 from './20220405melonpattern.jpg';

function MelonBread() {
  return (
    <div>
      <h1>Melon Bread Melon-shaped sweet bun メロンパン風トースト</h1>
      <h3>Tue 05.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='melon-bread' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Toast 2 slices</li>
            <li>Sugar 25g</li>
            <li>Unsalted butter 15g</li>
            <li>Flour 45g</li>
            <li>Beaten egg 1 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add sugar and flour in a bowl and mix</li>
          <li>Add egg and melted butter in it and mix</li>
          <img className='food-pic' src={picture2} alt='melon-dough' />
          <li>Spread it on toast and make melon bread pattern</li>
          <img className='food-pic' src={picture3} alt='melon-pattern-knife' />
          <br />
          <img className='food-pic' src={picture4} alt='melon-bread-pattern' />
          <li>Toast them</li>
        </ol>
      </div>
    </div>
  )
}

export default MelonBread;
