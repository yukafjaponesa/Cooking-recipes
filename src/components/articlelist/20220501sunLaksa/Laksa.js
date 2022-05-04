import React from 'react';
import picture1 from './20220501laksa.jpg';
import picture2 from './20220501laksasauce1.jpg';
import picture3 from './20220501laksasauce2.jpg';

function Laksa() {
  return (
    <div>
      <h1>Laksa ラクサ</h1>
      <h3>Sun 01.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='laksa' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Noodle 3 portions</li>
            <li>Coconuts ilk 330ml</li>
            <li>Water 220ml</li>
            <li>Shrimps, chicken, boiled egg, koriander</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Stir fry chicken and shrimps</li>
          <li>Add coconuts milk, water and laksa sauce in it to boil</li>
          <img className='food-pic' src={picture2} alt='laksa-sauce1' />
          <br />
          <img className='food-pic' src={picture3} alt='laksa-sauce2' />
        </ol>
      </div>
    </div>
  )
}

export default Laksa;
