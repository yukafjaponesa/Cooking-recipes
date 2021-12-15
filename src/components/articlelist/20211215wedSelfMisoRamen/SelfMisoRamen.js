import React from 'react';
import picture1 from './20211215selfmisoramen.jpg';
import picture2 from './20211215misoramenitems.jpg';

function SelfMisoRamen() {
  return (
    <div>
      <h1>Self Miso Ramen セルフ味噌ラーメン</h1>
      <h3>Wed 15.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='selfmisoramen-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Ramen noodle</li>
            <li>Miso ramen soup cube 1</li>
            <li>Water 1L for boiling</li>
            <li>***Toppings***</li>
            <li>Seaweed, green onion, carrot, ginger, sesame</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook noodle for 4 min with 1 L boiled water</li>
          <li>Chop vegs</li>
          <li>Take only 250 - 300 ml boiled water and add miso ramen soup cube</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='misoramen-items-pic' />
    </div>
  )
}

export default SelfMisoRamen;
