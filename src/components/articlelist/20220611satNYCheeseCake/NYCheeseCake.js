import React from 'react';
import picture1 from './20220611nycheesecake.jpg';
import picture2 from './20220611cheesecakeslice.jpg';

function NYCheeseCake() {
  return (
    <div>
      <h1>NY Cheese Cake ミルクでニューヨークチーズケーキ</h1>
      <h3>Sat 11.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='ny-cheese-cake' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cream cheese 200g</li>
            <li>Sugar 60g(I used 50g)</li>
            <li>Egg 1</li>
            <li>Yogurt 150g</li>
            <li>Milk 200cc</li>
            <li>Potato starch 1 tbsp</li>
            <li>Biscuit 96g(12 pieces)</li>
            <li>Unsalted melt butter 40g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 160℃</li>
          <li>Crush biscuit and mix with butter and add onto a oven safe plate and rest for 1 hr in fridge</li>
          <li>Add cream cheese in a bowl and mix till smooth</li>
          <img className='food-pic' src={picture2} alt='ny-cheese-cake-slice' />
          <li>Add sugar in it and mix well</li>
          <li>Add egg, yogurt, milk and potato starch and mix each time</li>
          <li>Bake for 60 min with boiled water (steamed)</li>
          <li>Cool down and rest in fridge for 2 - 3 hrs</li>
        </ol>
      </div>
    </div>
  )
}

export default NYCheeseCake;
