import React from 'react';
import picture1 from './20210729döner.jpg';

function Döner() {
  return (
    <div>
      <h1>Döner ケバブ</h1>
      <h3>Thu 29.07.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='döner-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Minced meat(beef or chicken)</li>
            <li>Powder - Kumin, paprika, garlic, chili, sugar, curry basil, parsely, oregano, salt & pepper</li>
            <li>Kebab bread(Pita bread or something like that)</li>
            <li>Cucumber, tomato, onion</li>
            <li>Yougrut dressing, garlic sauce and so on</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop vegs</li>
          <li>stir fry meat with spices</li>
          <li>Sand ingredients in bread</li>
        </ol>
      </div>
    </div>
  )
}

export default Döner;
