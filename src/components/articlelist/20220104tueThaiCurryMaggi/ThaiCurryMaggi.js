import React from 'react';
import picture1 from './20220104thaicurrymaggi.jpg';
import picture2 from './20220104thaicurrysaucemaggi1.jpg';
import picture3 from './20220104thaicurrysaucemaggi2.jpg';

function ThaiCurryMaggi() {
  return (
    <div>
      <h1>Thai Curry Maggi タイカレー　マギーソース</h1>
      <h3>Tue 04.01.2022</h3>


      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='thai-curry' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 250g</li>
            <li>Green onion 3 sticks</li>
            <li>Red paprika 1</li>
            <li>Coconut milk 200ml</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop all ingredients in pieces</li>
          <li>Add oil in a pan and stir fry chicekn</li>
          <li>Add vegs and stir fry for a short time</li>
          <li>Add Maggi sauce and mix well</li>
          <li>Add coconut milk to cook</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='thai-curry-maggi1' />
      <br />
      <img className='food-pic' src={picture3} alt='thai-curry-maggi2' />
    </div>
  )
}

export default ThaiCurryMaggi;
