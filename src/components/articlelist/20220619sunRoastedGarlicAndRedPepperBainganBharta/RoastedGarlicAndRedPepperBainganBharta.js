import React from 'react';
import picture1 from './20220619roastedgarlicredpepperbainganbharta.jpg';
import picture2 from './20220619roastedgarlic.jpg';
import picture3 from './20220619chilionion.jpg';

function RoastedGarlicAndRedPepperBainganBharta() {
  return (
    <div>
      <h1>Roasted Garlic And Red Pepper Baingan Bharta</h1>
      <h1>ローストガーリックとパプリカナスディップ</h1>
      <h3>Sun 19.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='roast-garlic-eggplant-dip' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Eggplan 1 large or 2 medium, cut in half</li>
            <li>Red bell pepper 1, quartered or just stern and seeds removed</li>
            <li>Garlic 1 heat, finely diced</li>
            <li>Green chilis 2(+/-), finely chopped</li>
            <li>Tomatoe 2 large, diced(or 200g tomato can)</li>
            <li>Mustard seeds 1/2 tsp</li>
            <li>Turmeric 1/4 tsp</li>
            <li>Kashmiri red chili powder 1/2 tsp</li>
            <li>Coriander powder 1/2 tsp</li>
            <li>Salt to taste</li>
            <li>Chopped cilantro for garnish, small wedge of lemon(if needed)</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Coat eggplant, red pepper and garlic in a bit of oil</li>
          <li>Place on baking tray skin side up(cover the garlic in foli)</li>
          <img className='food-pic' src={picture2} alt='garlic-foil' />
          <li>and roast at 450F for 20 min or until the eggplant collapses</li>
          <li>and then broiler for 5 min(take it our when the bell pepper is charred)</li>
          <li>Cover the red bell pepper in small bowl to sweat and set aside</li>
          <li>Scoop out the eggplant, eliminating any extra water and mashing it well,</li>
          <li>and then squeeze and smash in the roasted garlic with the eggplant</li>
          <li>Once the red pepper has cooled down, remove skin and dice</li>
          <li>In a pan, heat up some olive oil and add mustard seeds,</li>
          <li>when they start popping, add onion and green chilies and saute for 2 min</li>
          <img className='food-pic' src={picture3} alt='tomato-onion' />
          <li>Add spices, salt and tomatoes and cook until tomatoes are completely softened and jammy</li>
          <li>Then add in eggplant/garlic mixture and red pepper</li>
          <li>Mix and cook for 2 min</li>
          <li>Taste for salt, add a small squeeze of lemon if needed, and garnish with cilantro</li>
        </ol>
      </div>
    </div>
  )
}

export default RoastedGarlicAndRedPepperBainganBharta;
