import React from 'react';
import picture1 from './20220426puddingcheeseicecake.jpg';
import picture2 from './20220426puddingcheeseicecakewhole.jpg';

function PuddingCheeseIceCake() {
  return (
    <div>
      <h1>Pudding Cheese Ice Cake プリンチーズアイスケーキ</h1>
      <h3>Tue 26.04.2022</h3>
      <h4>18cm</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='pudding-cheese-ice-cake1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cream cheese 200g</li>
            <li>Pudding 2(320g)</li>
            <li>Cookie 100g</li>
            <li>Unsalted butter 40g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Crush cookie and mix with melted butter</li>
          <li>Put cookie bottom onto the cake shape and rest in fridge 20 min</li>
          <li>Separate pudding and caramel part and mix each of it to smoothen</li>
          <li>Add cream cheese in a plate and microwave oven 600w 40sec to melt</li>
          <li>Add pudding in cream cheese and mix</li>
          <li>Pour it in cookie and frozen it for 1 hr</li>
          <li>Mix caramel and put on pudding and make marble patterns</li>
          <li>Rest in freezer for 3 hr</li>
          <img className='food-pic' src={picture2} alt='pudding-cheese-ice-cake2' />
        </ol>
      </div>
    </div>
  )
}

export default PuddingCheeseIceCake;
