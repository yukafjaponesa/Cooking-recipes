import React from 'react';
import picture1 from './20211217powderinbag.jpg';
import picture2 from './20211217cookiedough.jpg';
import picture3 from './20211217beforebake.jpg';
import picture4 from './20211217afterbake.jpg';
import picture5 from './20211217cheesecakelemontart.jpg';

function CheeseCakeLemonTart() {
  return (
    <div>
      <h1>Cheese Cake Lemon Tart 卵焼き器でチーズケーキレモンタルト</h1>
      <h3>Fri 17.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture5} alt='cheesecake-lemontart-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Lemon 1</li>
            <li>Flour 180g</li>
            <li>Sugar 60g (I used 50g)</li>
            <li>Unsalted butter 60g</li>
            <li>Egg 2</li>
            <li>Cream cheese 100g</li>
            <li>Sugar 30g</li>
            <li>Milk 50cc</li>
            <li>Flour 1 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut lemon in half. Half slice, half lemon juice(1 tbsp)</li>
          <li>Add flour 180g & sugar 60g in a plastic bag and mix</li>
          <img className='food-pic' src={picture1} alt='powder-in-bag-pic' />
          <br />
          <li>Add 1 egg and unsalted butter and mix to make cookie dough</li>
          <li>Cream cheese, sugar 30g and 1 egg in a bowl and mix well</li>
          <li>Add milk 2 times separetely and mix each time</li>
          <li>Add flour and mix. Add lemon juice 1 tbsp and mix</li>
          <li>30 min with low heat. Cover with alminum foil</li>
          <img className='food-pic' src={picture2} alt='cookie-dough-pic' />
          <br />
          <img className='food-pic' src={picture3} alt='before-bake-pic' />
          <br />
        </ol>
      </div>
      <img className='food-pic' src={picture4} alt='after-bake-pic' />
    </div>
  )
}

export default CheeseCakeLemonTart;
