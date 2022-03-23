import React from 'react';
import picture1 from './20220325florentins.jpg';
import picture2 from './20220325cookiedough.jpg';
import picture3 from './20220325cookiedough.jpg';
import picture4 from './20220325caramel.jpg';
import picture5 from './20220325carameldone.jpg';
import picture6 from './20220325caramelnuts.jpg';

function Florentins() {
  return (
    <div>
      <h1>Florentins 卵焼き器でフロランタン</h1>
      <h3>Fri 25.03.2022</h3>
      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='florentins' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Flour 100g</li>
            <li>Sugar 40g</li>
            <li>Unsalted butter 50g</li>
            <li>Egg york 1</li>
            <li>Mix nuts 80g</li>
            <li>Caramel 90g</li>
            <li>Milk 1 tbsp</li>
            <li>***For caramel***</li>
            <li>Milk 150cc</li>
            <li>Sugar 50g</li>
            <li>Butter 20g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add flour and sugar in a plastic bag and mix</li>
          <li>Add egg york and butter to mix</li>
          <img className='food-pic' src={picture2} alt='cookie-dough' />
          <li>Spread onto egg roll pan and make holes with a fork</li>
          <img className='food-pic' src={picture3} alt='cookie-in-pan' />
          <li>Cook with low heat for 15 min covered with alminum folie</li>
          <li>Add mix nuts in a plastic bag and crush</li>
          <li>Use plate to filp and cook for 10 min for other side</li>
          <li>Add caramel and milk in a pot to melt add mix nuts</li>
          <img className='food-pic' src={picture4} alt='caramel' />
          <li>Pour mix nuts onto dough and cool it down</li>
          <img className='food-pic' src={picture5} alt='caramel-done' />
          <br />
          <img className='food-pic' src={picture6} alt='caramel-nuts' />
          <br />
          <li>***Homemade caramel***</li>
          <li>Add milk, sugar and butter in a pot and cook with high heat and mix</li>
        </ol>
      </div>
    </div>
  )
}

export default Florentins;
