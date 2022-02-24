import React from 'react';
import picture1 from './20220215noodlewithsalmon.jpg';
import picture2 from './20220215noodlewithsalmonmaggi1.jpg';
import picture3 from './20220215noodlewithsalmonmaggi2.jpg';

function NoodleWithSalmon() {
  return (
    <div>
      <h1>Noodle With Salmon サーモンヌードル</h1>
      <h3>Tue 15.02.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='noodle-with-salmon' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Salmon 250g</li>
            <li>Spring onion 2 sticks</li>
            <li>Heavy cream 100ml</li>
            <li>Ribbon noodle 150g</li>
            <li>Water 700ml</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut spring onion and salmon</li>
          <li>Add oil in a pan and stir fry them and remove aside</li>
          <li>Add water and maggi sauce and noodle to cook for 8 - 10 min</li>
          <li>Add heavy cream and salmon & onion to cook for 2 min</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='noodle-with-salmon-maggi1' />
      <br />
      <img className='food-pic' src={picture3} alt='noodle-with-salmon-maggi2' />
    </div>
  )
}

export default NoodleWithSalmon;
