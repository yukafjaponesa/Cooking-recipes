import React from 'react';
import picture1 from './20210707beefkimchiburger.jpg';

function BeefKimchiBurger() {
  return (
    <div>
      <h1>Beef Kimchi Burger ビーフキムチバーガー</h1>
      <h3>Wed 07.07.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='beef-kimchi-burger-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Beef pattie</li>
            <li>Tomato, cucumber, onion, lettuce</li>
            <li>Kimchi</li>
            <li>Mayo, Ketchap</li>
            <li>Burger buns</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice vegs</li>
          <li>Make your own burger and add Kimchi</li>
        </ol>
      </div>
    </div>
  )
}

export default BeefKimchiBurger;
