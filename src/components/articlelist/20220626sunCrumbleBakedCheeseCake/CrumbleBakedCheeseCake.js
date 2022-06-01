import React from 'react';
import picture1 from './20220626crumblebakedcheesecake.jpg';
import picture2 from './20220626crumble.jpg';
import picture3 from './20220626beforebaking.jpg';
import picture4 from './20220626afterbaking.jpg';

function CrumbleBakedCheeseCake() {
  return (
    <div>
      <h1>Crumble Baked Cheese Cake クランブルベイクドチーズケーキ</h1>
      <h3>Sun 26.06.2022</h3>
      <h4>15cm round form</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='crumble-cheese-cake' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Unsalted butter 80g</li>
            <li>Pancake mix 200g</li>
            <li>Cream cheese 200g</li>
            <li>Heavy cream 200cc</li>
            <li>Sugar 60g</li>
            <li>Beaten egg 1</li>
            <li>Lemon juice 1 tbsp</li>
            <li>Flour 30g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 170℃</li>
          <li>Cream cheese in room temprature. Butter cut in 1 cm square to cool</li>
          <li>Add butter and pancake mix in a bowl and mix with a spatula to scrambled</li>
          <li>1/3 for topping and 2/3 for cake base</li>
          <img className='food-pic' src={picture2} alt='crumble' />
          <li>Bake dough for 15 min</li>
          <li>Add cream cheese in another bowl and mix till smooth</li>
          <li>Add sugar, beaten egg, heavy cream and lemon juice in it and mix each time</li>
          <li>Sift flour in it and mix</li>
          <li>Pour in cake form and top with crumbles</li>
          <img className='food-pic' src={picture3} alt='before-baking' />
          <li>Bake for 40 - 50 min</li>
          <img className='food-pic' src={picture4} alt='after-baking' />
        </ol>
      </div>
    </div>
  )
}

export default CrumbleBakedCheeseCake;
