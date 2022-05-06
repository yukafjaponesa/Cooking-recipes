import React from 'react';
import picture1 from './20220505chickenfajitasalad.jpg';
import picture2 from './20220505beforecooking.jpg';
import picture3 from './20220505aftercooking.jpg';
import picture4 from './20220505eachparts.jpg';
import picture5 from './20220505saladanddressing.jpg';

function ChickenFajitaSalad() {
  return (
    <div>
      <h1>Chicken Fajita Salad チキンファジータサラダ</h1>
      <h3>Thu 05.05.2022</h3>
      <h4>2 servings</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chicken-fajita-salad' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Oil 2 tbsp</li>
            <li>Chicken 200g</li>
            <li>Red, yello bell pepper 1/ea</li>
            <li>Onion 1 medium</li>
            <li>Salt, chili powder, cumin, garlic 1 tsp</li>
            <li>Olive oil 3 tbsp</li>
            <li>Lime juice 3 tbsp</li>
            <li>Chili flakes 1 tsp</li>
            <li>Salt 1 tsp</li>
            <li>Romain lettuce 1 head</li>
            <li>Avocado 1</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Heat the oil in a pan over medium-high heat</li>
          <li>Cook the chicken, bell pepper and onion (thinly sliced)</li>
          <li>Salt, chili powder, cumin and garlic powder for 5 min, stirring constantly</li>
          <img className='food-pic' src={picture2} alt='before-cooking' />
          <li>Flip the chicken and cook for another 5 min, until chicken is cooked</li>
          <li>And vegs are slightly soft</li>
          <img className='food-pic' src={picture3} alt='after-cooking' />
          <li>Remove from heat and slice the chicken into strips</li>
          <li>In a small bowl, combine the olive oil, lime, chicli and saltt, stirring until evenly mixed</li>
          <img className='food-pic' src={picture4} alt='each-parts' />
          <li>In a large bowl, toss the romaine lettuce with the chicken, vegs, avocado and dressing</li>
          <img className='food-pic' src={picture5} alt='salad-dressing' />
          <br />
        </ol>
      </div>
    </div>
  )
}

export default ChickenFajitaSalad;
