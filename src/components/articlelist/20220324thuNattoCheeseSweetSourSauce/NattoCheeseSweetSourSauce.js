import React from 'react';
import picture1 from './20220324nattocheesesweetsoursauce.jpg';
import picture2 from './20220324natto.jpg';
import picture3 from './20220324nattocheese.jpg';

function NattoCheeseSweetSourSauce() {
  return (
    <div>
      <h1>Natto Cheese Sweet Sour Sauce 甘酢ねぎだれの納豆チーズ焼き</h1>
      <h3>Thu 24.03.2022</h3>
      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='natto-cheese-sweet-sour-sauce' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>☆Natto 2 packs</li>
            <li>☆Cheese 30g</li>
            <li>☆Mayo 1 tbsp</li>
            <li>☆Salt & pepper</li>
            <li>☆Included Sauce and mustard 2x2</li>
            <li>Potato starch 4 tbsp</li>
            <li>Oil 1 tbsp</li>
            <li>***For sauce below***</li>
            <li>Chopped spring onion</li>
            <li>Sugar 1 tsp</li>
            <li>Vinegar, soy sauce and sesame oil 1 tbsp/ea</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add ☆ in a bowl and mix well and then add potato starch and mix well</li>
          <img className='food-pic' src={picture2} alt='natto' />
          <li>Add oil in a pan and stir Natto to crispy (both sides)</li>
          <li>Mix all the sauce ingredients</li>
          <li>Cut Natto crisp and pour sauce</li>
          <img className='food-pic' src={picture3} alt='natto-cheese' />
        </ol>
      </div>
    </div>
  )
}

export default NattoCheeseSweetSourSauce;
