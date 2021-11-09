import React from 'react';
import picture1 from './20211109bauerntopfmaggi1.jpg';
import picture2 from './20211109bauerntopfmaggi2.jpg';
import picture3 from './20211109bauerntopf.jpg';

function BauernTopf() {
  return (
    <div>
      <h1>Bauerntopf 農家のスープ</h1>
      <h3>Tue 09.11.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture3} alt='bauerntopf-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Bauerntopf powder</li>
            <li>Grained meat 250g</li>
            <li>Potato 300g</li>
            <li>Red paprika 1</li>
            <li>*** I have used ***</li>
            <li>Cabbage, onion, carrot, garlic</li>
            <li>Milk and paserly</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop vegs</li>
          <li>Heat oil and cook meat for 4 min</li>
          <li>Add vegs and cook for 4 min</li>
          <li>Add water 250ml and maggi powder</li>
          <li>Cook for 25 min with low heat</li>
          <li>Top with paserly</li>
        </ol>
        <img className='food-pic' src={picture1} alt='bauerntopf-maggi1-pic' />
        <img className='food-pic' src={picture2} alt='bauerntopf-maggi2-pic' />
      </div>
    </div>
  )
}

export default BauernTopf;
