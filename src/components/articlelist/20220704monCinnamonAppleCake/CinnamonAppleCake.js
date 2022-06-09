import React from 'react';
import picture1 from './20220704cinnamonapplecake.jpg';
import picture2 from './20220704beforebaking.jpg';
import picture3 from './20220704afterbaking.jpg';

function CinnamonAppleCake() {
  return (
    <div>
      <h1>Cinnamon Apple Cake シナモンりんごケーキ</h1>
      <h3>Mon 04.07.2022</h3>
      <h4>18cm round shape</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cinnamon-apple-cake' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Apple 1</li>
            <li>Lemon juice 1 tbsp</li>
            <li>Unsalted butter 100g</li>
            <li>Sugar 50g</li>
            <li>Beaten egg 1</li>
            <li>Pancake mix 200g</li>
            <li>Cinnamon powder 1 tsp</li>
            <li>Milk 3 tbsp</li>
            <li>Sugar 1 tbsp & cinnamon powder 1/2 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 180℃</li>
          <li>Butter room temprature</li>
          <li>Slice apple and sift lemon juice</li>
          <li>Add butter in a bowl and mix to soften</li>
          <li>Add sugar and mix till whiten</li>
          <li>Add beaten egg little by litte and mix each time</li>
          <li>Add pancake mix, cinnamon powder and milk and mix with a splatula</li>
          <li>Pour it in cake shape and top with apple slices</li>
          <img className='food-pic' src={picture2} alt='before-baking' />
          <li>Add cinnamon sugar and bake for 30 - 35 min</li>
          <img className='food-pic' src={picture3} alt='after-baking' />
        </ol>
      </div>
    </div>
  )
}

export default CinnamonAppleCake;
