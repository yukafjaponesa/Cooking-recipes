import React from 'react';
import picture1 from './20220715sweetchilichickenwrap.jpg';
import picture2 from './20220715sweetchili.jpg';
import picture3 from './20220715greenschicken.jpg';
import picture4 from './20220715cheeseontop.jpg';
import picture5 from './20220715grilled.jpg';

function SweetChiliChickenWrap() {
  return (
    <div>
      <h1>Sweet Chili Chicken Wrap スイートチリチキンラップ</h1>
      <h3>Fri 15.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweet-chili-chicken-wrap' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sweet chili sauce</li>
            <li>Fried chicken 3 pieces</li>
            <li>Greens</li>
            <li>Pizza cheese</li>
            <li>Tortilla</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add sweet chili sauce on tortilla</li>
          <img className='food-pic' src={picture2} alt='sweet-chili' />
          <li>Add greens, chicken and sweet chili</li>
          <img className='food-pic' src={picture3} alt='greens-chicken' />
          <li>Add cheese and roll it and then slightly stir</li>
          <img className='food-pic' src={picture4} alt='cheese-on-top' />
          <br />
          <img className='food-pic' src={picture5} alt='grilled' />
        </ol>
      </div>
    </div>
  )
}

export default SweetChiliChickenWrap;
