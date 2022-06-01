import React from 'react';
import picture1 from './20220620rawchocolatetart.jpg';
import picture2 from './20220620dough.jpg';
import picture3 from './20220620doughinshape.jpg';
import picture4 from './20220620beforecooling.jpg';

function RawChocolateTart() {
  return (
    <div>
      <h1>Raw Chocolate Tart 生チョコタルト</h1>
      <h3>Mon 20.06.2022</h3>
      <h4>18cm tart form</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='raw-chocolate-tart' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pancake mix 150g</li>
            <li>Unsalted butter 70g</li>
            <li>Black chocolate 200g</li>
            <li>Heavy cream 100cc</li>
            <li>Oil</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 170℃</li>
          <li>Butter in room temprature</li>
          <li>Add butter in a bowl and mix until smooth</li>
          <li>Add pancake mix and mix with a rubber spatula and make it gather</li>
          <img className='food-pic' src={picture2} alt='dough' />
          <li>Add onto a tart form and hole with a fork and bake for 15 - 20 min</li>
          <img className='food-pic' src={picture3} alt='dough-holes' />
          <li>Cool down</li>
          <img className='food-pic' src={picture4} alt='before-cooling' />
          <li>Heat heavy cream short before boiling</li>
          <li>Pour onto chocolate and melt it</li>
          <li>Pour in tart form and in fridge for 4hr</li>
        </ol>
      </div>
    </div>
  )
}

export default RawChocolateTart;
