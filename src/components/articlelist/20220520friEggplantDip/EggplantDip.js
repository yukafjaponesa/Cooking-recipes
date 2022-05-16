import React from 'react';
import picture1 from './20220520eggplantdip.jpg';
import picture2 from './20220520eggplantsalt.jpg';
import picture3 from './20220520removewater.jpg';
import picture4 from './20220520garlicsalt.jpg';
import picture5 from './20220520scorecut.jpg';
import picture6 from './20220520skin.jpg';
import picture7 from './20220520chopped.jpg';

function EggplantDip() {
  return (
    <div>
      <h1>Eggplant Dip なすのディップ</h1>
      <h3>Fri 20.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='eggplant-dip' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Eggplant 1</li>
            <li>Olive oil</li>
            <li>Garlic</li>
            <li>Thyme</li>
            <li>Salt & pepper</li>
            <li>Tomato</li>
            <li>Onion</li>
            <li>Pine nuts</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 220℃</li>
          <li>Cut one large eggplant in half and salt the flesh</li>
          <img className='food-pic' src={picture2} alt='eggplant-salt' />
          <li>Let sit for 15 min and then pat dry with a paper towel to remove the bitter liquid</li>
          <img className='food-pic' src={picture3} alt='remove-water' />
          <li>Score the egglpant deep into the flesh and stuff each fhalf with 3 - 4 slices of garlic</li>
          <img className='food-pic' src={picture5} alt='score-cut' />
          <li>Optional - also add thyme to the slits</li>
          <img className='food-pic' src={picture4} alt='garlic-salt' />
          <li>Season with red and black pepper and parsley</li>
          <li>Drizzle with olive oil and place flesh down on a baking sheet</li>
          <li>Poke some holes in the skin side with a fork and bake for 45 - 60 min until they smell</li>
          <li>very fragrant and the skin has wilted. Let cool</li>
          <li>Meanwhile, prepare you other ingredients</li>
          <li>1/2 Spanish onione, diced. 1 14 oz can of diced tomatoes, drained. Toast pine nuts</li>
          <li>Saute the onion in a pan with some olive oil</li>
          <li>Once eggplant is cool, remove skin and finely chop all of the flesh</li>
          <img className='food-pic' src={picture6} alt='skin-poke' />
          <br />
          <img className='food-pic' src={picture7} alt='chopped' />
          <li>Once onioin is translucent, add the eggplant</li>
          <li>Cook off some of the liquid and brown eggplant slightly</li>
          <li>About 3 min in, add the diced tomatoes and continue to gently cook for 3 min</li>
          <li>using a wooden spatula to mash the tomatoes and eggplant</li>
          <li>Season this mixture with 1 tbsp apple cider vinegar, and OPTIONAL</li>
          <li>add 1 tbsp capers and 1 tbsp chopped green olives</li>
          <li>Remove eggplant mixture from theat and let cool in a bowl</li>
          <li>Add a generous amount of chopped parsley and the juice AND zest of 1/2 lemon</li>
          <li>Let this cool in fridge for 20min</li>
          <li>Once complete serve in a shallow bowl with feta cheese, morer parsley, good olive oil</li>
          <li>coarse salt and toasted pine nuts</li>
        </ol>
      </div>
    </div>
  )
}

export default EggplantDip;
