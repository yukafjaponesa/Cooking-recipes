import React from 'react';
import picture1 from './20211211cheesecaketart1.jpg';
import picture2 from './20211211cheesecaketart2.jpg';
import picture3 from './20211211cheesecaketartbefore.jpg';
import picture4 from './20211211tamagoyakiki.jpg';

function CheeseCakeTartNoOven() {
  return (
    <div>
      <h1>Cheese Cake Tart No Oven 卵焼き器でチーズケーキタルト</h1>
      <h3>Sat 11.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cheesecake-tart1-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cream cheese 200g</li>
            <li>Sugar 50g</li>
            <li>Egg 1</li>
            <li>Cookie 80g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Crush cookies</li>
          <li>Soften cream cheese</li>
          <li>Add sugar and egg and mix well each time</li>
          <li>Take 30g of sauce and add to cookies and mix well</li>
          <li>Put cooking sheet on Tamagoyakiki(japanese egg roll pan) and push down cookies</li>
          <li>Add cheese cream and cover with alminium foil and cook for 40 min with low heat</li>
          <li>Cool down for 1 hour in fridge</li>
        </ol>
      </div>
      <img className='food-pic' src={picture4} alt='tamagoyakiki-pic' />
      <br />
      <img className='food-pic' src={picture3} alt='cheesecake-tartbefore-pic' />
      <br />
      <img className='food-pic' src={picture2} alt='cheesecake-tart2-pic' />
    </div>
  )
}

export default CheeseCakeTartNoOven;
