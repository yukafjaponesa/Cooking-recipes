import React from 'react';
import picture1 from './20211202sweetpotatobuttercake.jpg';

function SweetpotatoButterCake() {
  return (
    <div>
      <h1>Sweetpotato Butter Cake さつまいもバターケーキ</h1>
      <h3>Thu 02.12.2021</h3>
      <h4>For 6 people 3 cups rice cooker</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweetpotato-butter-cake-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sweet potato with skin 150g</li>
            <li>Milk 3 tbsp</li>
            <li>Melted unsalted butter 80g</li>
            <li>Sugar 60g (I used 50g)</li>
            <li>Beaten egg 2</li>
            <li>Hot cake mix 150g</li>
            <li>*** Sugar 30g, Baking powder 6g, salt a bit and add flour up tp 150g ***</li>
            <br />
            <li>*** For topping ***</li>
            <li>Salted butter 200g</li>
            <li>Black sesame 1/3 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Half sweet potato sliced, the rest chop in pieces and both stay in water for 5 min</li>
          <li>Drain water and heat sliced sweet potato for 3 min with 600w in microwave oven</li>
          <li>Add melted unsalted butter and sugar in a bowl and mix well</li>
          <li>Add beaten eggs in a few times and mix well each time</li>
          <li>Add hot cake mix and mix. Add milk and mix. And add chopped sweet potato and mix.</li>
          <li>Coat rice cooker with salad oil</li>
          <li>Paste sliced sweet potato in rice cooker and then drain sweet potato dough</li>
          <li>Start rice cooker</li>
          <li>Cook until the cake is well cooked</li>
          <li>Coat the cake with salted butter and black sesame</li>
        </ol>
      </div>
    </div>
  )
}

export default SweetpotatoButterCake;
