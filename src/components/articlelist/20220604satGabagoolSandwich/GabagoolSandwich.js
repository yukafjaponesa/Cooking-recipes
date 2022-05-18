import React from 'react';
import picture1 from './20220604gabagoolsand.jpg';
import picture2 from './20220604onionbeforebaking.jpg';
import picture3 from './20220604basilmix.jpg';
import picture4 from './20220604onionafterbaking.jpg';
import picture5 from './20220604tomatopaste.jpg';
import picture6 from './20220604salami.jpg';
import picture7 from './20220604cheese.jpg';
import picture8 from './20220604greens.jpg';

function GabagoolSandwich() {
  return (
    <div>
      <h1>Gabagool Sandwich ガバグールサンドイッチ</h1>
      <h3>Sat 04.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='gabagool-sand' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sourdoug baguette</li>
            <li>Genoa salami</li>
            <li>Provolone or fontina</li>
            <li>Mixed greens</li>
            <li>***For roasted cipolini***</li>
            <li>Cipolini onions 1 pound(pearl onions work)</li>
            <li>Olive oil 1/4 cup</li>
            <li>Fresh thyme 1 tbsp</li>
            <li>Salt 1 tsp</li>
            <li>Fresh cracked black pepper</li>
            <li>***Spread***</li>
            <li>Roasted cipolini onions 200g</li>
            <li>Sun dried tomatoes 100g</li>
            <li>Olive oil 3 tbsp</li>
            <li>Salt to taste</li>
            <li>***For dressing***</li>
            <li>Loosely packed fresh basil leaves 1 cup</li>
            <li>Balsamic vinegar 2 tbsp</li>
            <li>Olive oil 1/2 cup</li>
            <li>Oregano 2 tsp</li>
            <li>Lemon juice 1/2 tsp and salt to taste</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 200℃</li>
          <li>Toss onions and thyme with olive oil and place in an oven safe dish</li>
          <li>Sprinkle with sea salt and cracked black pepper to taste</li>
          <img className='food-pic' src={picture2} alt='onion-before-baking' />
          <li>Roast in oven for about 45 min, turnin evely 15 min to brown sides evenly</li>
          <li>Remove when tender and golden</li>
          <img className='food-pic' src={picture4} alt='onion-after-baking' />
          <li>To a food processor add the roasted cipolini, sun dried tomatoes and oil</li>
          <li>Pulse until a paste forms. Season to taste with salt</li>
          <li>Dressing: in the bowl of your mortar and pestle(or food processor) combine the basil and oregano</li>
          <li>Mash/pulse until coarsely chopped</li>
          <img className='food-pic' src={picture3} alt='basil-mix' />
          <li>While the machine is running, drizzle in the olive oil, balsamic, lemon juice and salt</li>
          <li>Season to taste with salt and freshly ground black pepper and blend until smooth</li>
          <li>To the bottom half of a toasted baguette, add the sundried tomato and onion spred</li>
          <img className='food-pic' src={picture5} alt='tomato-paste' />
          <li>Lay down the salami and sopressata then top with cheese</li>
          <img className='food-pic' src={picture6} alt='salami' />
          <li>Torch/broil to melt</li>
          <img className='food-pic' src={picture7} alt='cheese' />
          <li>Add the mixed greens and dressing and cut in half</li>
          <img className='food-pic' src={picture8} alt='greens' />
        </ol>
      </div>
    </div>
  )
}

export default GabagoolSandwich;
