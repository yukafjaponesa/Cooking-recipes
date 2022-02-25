import React from 'react';
import picture1 from './20220225stirfryvegandsausage.jpg';

function StirFryVegAndSausageswithCurryCheese() {
  return (
    <div>
      <h1>Stir Fry Veg And Sausages With Curry Cheese</h1>
      <h1>野菜炒め＆ソーセージのカレーチーズがけ</h1>
      <h3>Fri 25.02.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='stirfryveg-currycheesesausage' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***For stir fry vegs***</li>
            <li>Cabbage</li>
            <li>Carrot</li>
            <li>Egg</li>
            <li>Garlic</li>
            <li>Soy sauce, ,oyster sauce & sesame oil</li>
            <br />
            <li>***For Sausages with curry cheese***</li>
            <li>Sausages 5 small sticks(100g)</li>
            <li>Potato 1 (150g)</li>
            <li>Cheese 20g</li>
            <li>Curry powder 1 tsp</li>
            <li>Ketchap 2 tbsp</li>
            <li>Pepper & salt</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>***For Stir fry vegs***</li>
          <li>Add sesame oil in a pan and cook beaten egg</li>
          <li>Remove from the pan and cut in long pieces</li>
          <li>Add sesame oil in the same pan and cook vegs</li>
          <li>Add egg again and taste with soy sauce & oyster sauce</li>
          <br />
          <li>***For Sausages with curry chees***</li>
          <li>Slice potato and steam it</li>
          <li>Put potato, sausagges, ketchap and cheese on a plate</li>
          <li>2 min in microwave oven till cheese melts</li>
          <li>Add curry powder</li>
        </ol>
      </div>
    </div>
  )
}

export default StirFryVegAndSausageswithCurryCheese;
