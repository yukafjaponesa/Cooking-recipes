import React from 'react';
import picture1 from './20220321toastsausageroll.jpg';
import picture2 from './20220321scrambledegg.jpg';
import picture3 from './20220321toastsausagerollprep.jpg';

function ToastSausageRoll() {
  return (
    <div>
      <h1>Toast Sausage Roll トーストでソーセージロール</h1>
      <h3>Mon 21.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='toast-sausage-roll' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Toast 2</li>
            <li>Egg 1</li>
            <li>Milk 1 tbsp</li>
            <li>Sausages</li>
            <li>Ketchap 2 tbsp</li>
            <li>Cheese 30g</li>
            <li>Oil</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut off crust</li>
          <li>Mix milk and egg and make scrambled egg</li>
          <img className='food-pic' src={picture2} alt='scrambled-egg' />
          <li>Add sausage, egg, ketchap and cheese on toast and roll it</li>
          <img className='food-pic' src={picture3} alt='toast-sausage-roll-prep' />
          <li>Stir with oil</li>
        </ol>
      </div>
    </div>
  )
}

export default ToastSausageRoll;
