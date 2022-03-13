import React from 'react';
import picture1 from './20220311broccoligratin.jpg';
import picture2 from './20220311broccoligratinmaggi1.jpg';
import picture3 from './20220311broccoligratinmaggi2.jpg';

function BroccoliGratin() {
  return (
    <div>
      <h1>Broccoli Gratin ブロッコリーグラタン</h1>
      <h3>Fri 11.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='broccoli-gratin' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Broccoli 300g</li>
            <li>Heavy cream 50ml</li>
            <li>Cheese 50g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Boil fresh broccoli for 5 min</li>
          <li>Add 200ml cold water, heavy cream and maggi in a pot and cook</li>
          <li>Pre heat oven 200℃</li>
          <li>Add broccoli and sauce and bake for 20 min</li>
          <img className='food-pic' src={picture2} alt='broccoli-gratin-maggi1' />
          <br />
          <img className='food-pic' src={picture3} alt='broccoli-gratin-maggi2' />
        </ol>
      </div>
    </div>
  )
}

export default BroccoliGratin;
