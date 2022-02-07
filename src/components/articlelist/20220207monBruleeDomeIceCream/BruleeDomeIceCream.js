import React from 'react';
import picture1 from './20220207bruleedomeicecream1.jpg';
import picture2 from './20220207bruleedomeicecream2.jpg';
import picture3 from './20220207bruleedomeiceprep1.jpg';
import picture4 from './20220207bruleedomeiceprep2.jpg';
import picture5 from './20220207bruleedomeiceprep3.jpg';

function BruleeDomeIceCream() {
  return (
    <div>
      <h1>Brulee Dome Ice Cream ブリュレドームアイス</h1>
      <h3>Mon 07.02.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='brulee-dome-ice1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pudding 2 big ones</li>
            <li>Heavy cream 300cc</li>
            <li>Chocolate chip cookie 10 pieces</li>
            <li>Sugar 50g</li>
            <li>Water 2 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add puddings and mix well</li>
          <img className='food-pic' src={picture3} alt='brulee-dome-ice-prep1' />
          <li>Put heavy cream in it and mix until it will be a bit heavier</li>
          <li>Put wrap in another bowl and pour pudding in it</li>
          <li>Crush cookies and add in the bowl and mix</li>
          <img className='food-pic' src={picture4} alt='brulee-dome-ice1prep2' />
          <li>Half day in freezer</li>
          <img className='food-pic' src={picture5} alt='brulee-dome-ice1prep3' />
          <li>Add sugar and water in a pan and cook until caramelized</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='brulee-dome-ice2' />
    </div>
  )
}

export default BruleeDomeIceCream;
