import React from 'react';
import picture1 from './20220412hotplateomeletterice.jpg';
import picture2 from './20220412hotplate.jpg';

function HotplateOmeletteRice() {
  return (
    <div>
      <h1>Hotplate Omelette Rice ホットプレートでオムライス</h1>
      <h3>Tue 12.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='hotplate-omelette-rice' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Onion 1/2</li>
            <li>Bell pepper 2 small</li>
            <li>Sausage 6 sticks</li>
            <li>Beaten egg 3</li>
            <li>Milk 2 tbsp</li>
            <li>Butter 20g</li>
            <li>Rice 400g</li>
            <li>Ketcup 4 tbsp</li>
            <li>Salt & pepper</li>
            <li>Parsely</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop bell pepper and onion. Cut sausage in small slices</li>
          <li>Mix egg, milk and salt & pepper</li>
          <li>Add oil 1 tbsp and cook onion, bell pepper and sausage</li>
          <li>Add rice and ketcup</li>
          <li>Make a dome and add butter around</li>
          <li>Pour egg and make scrumble egg</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='hotplate' />
    </div>
  )
}

export default HotplateOmeletteRice;
