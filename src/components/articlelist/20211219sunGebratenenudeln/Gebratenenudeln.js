import React from 'react';
import picture1 from './20211219friednoodles.jpg';
import picture2 from './20211219friednoodlesmaggi1.jpg';
import picture3 from './20211219friednoodlesmaggi2.jpg';

function FriedNoodles() {
  return (
    <div>
      <h1>Fried Noodles フライドヌードル</h1>
      <h3>Sun 19.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='fried-noodles-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Spagetthi 150g</li>
            <li>Chicken 200g</li>
            <li>Green onion 1</li>
            <li>Carrot 1</li>
            <li>*** Option: Asian vegs</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop chicken and vegs</li>
          <li>Cook spagetthi</li>
          <li>Stir fri checken and veg and add noodle</li>
          <li>Add fried noodle powder and stir fri for 5 min</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='fried-noodles-maggi1-pic' />
      <br />
      <img className='food-pic' src={picture3} alt='fried-noodles-maggi2-pic' />
    </div>
  )
}

export default FriedNoodles;
