import React from 'react';
import picture1 from './20220304sweetpotatotart1.jpg';
import picture2 from './20220304sweetpotatotart2.jpg';

function SweetPotatoTart() {
  return (
    <div>
      <h1>Sweet Potato Tart 大学芋タルト</h1>
      <h3>Fri 04.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweet-potato-tart1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pancake mix 150g or flour 114g, sugar 30g baking powder 6g and salt</li>
            <li>Sweet potato 150g</li>
            <li>Black sesame</li>
            <li>Milk, oil 2 tbsp/ea</li>
            <li>Egg 1</li>
            <li>Sugar 30g</li>
            <li>***For Mitarashi sauce***</li>
            <li>Sugar 2 tbsp</li>
            <li>Soy sauce 1 tbsp</li>
            <li>Honey 3 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice sweet potato 1 cm and rest in water for 5 min</li>
          <li>Then steam it</li>
          <li>Pre heat oven 170℃</li>
          <li>Add milk, oil and 130g of pancake mix in a bowl and make tart</li>
          <li>Put bottom onto tart shape</li>
          <li>Add egg, sugar in a bowl and mix. And add pancake mix 20g</li>
          <li>Pour onto tart</li>
          <li>Place sweet potato like a flower</li>
          <li>Bake 40 min</li>
          <li>Add mitarashi sauce in pot and cook till sticky</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='sweet-potato-tart2' />
    </div>
  )
}

export default SweetPotatoTart;
