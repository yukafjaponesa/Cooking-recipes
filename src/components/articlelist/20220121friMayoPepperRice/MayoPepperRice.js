import React from 'react';
import picture1 from './20220120mayopepperrice.jpg';

function MayoPepperRice() {
  return (
    <div>
      <h1>Mayo Pepper Rice マヨペッパーライス</h1>
      <h3>Fri 21.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='mayo-pepper-rice' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sliced garlic 1 piece</li>
            <li>☆Thin sliced beef（牛コマ肉) 250g</li>
            <li>☆Sake 2 tbsp</li>
            <li>☆Salt & pepper 1/4 tssp/ea</li>
            <li>Butter 20g</li>
            <li>Cooked rice 300g</li>
            <li>Kimchi 50g</li>
            <li>Green onion </li>
            <li>Mayo 1 tbsp</li>
            <li>Black pepper 1/3 tsp</li>
            <li>Soy sauce 2 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Mix ☆ and rest for 10min</li>
          <li>Add butter and garlic in a pan</li>
          <li>Add rice, beef, kimchi and other ingredients and cook well</li>
          <li>Add extra mayo and green onion on top</li>
        </ol>
      </div>
    </div>
  )
}

export default MayoPepperRice;
