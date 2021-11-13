import React from 'react';
import picture1 from './20211112ricottanutspasta.jpg';
import picture2 from './20211112ricottanutssauce.jpg';

function RicottaandNuts() {
  return (
    <div>
      <h1>Ricotta and Nuts リコッタチーズとナッツのペストパスタ</h1>
      <h3>Fri 12.11.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='ricottanuts-pasta-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>*** to make it simple, only need these 2 things ***</li>
            <li>Riccota e Nuss sauce 190g</li>
            <li>Spaghetti</li>
            <br />
            <li>*** I have used ***</li>
            <li>Carrot, onion, red paprika, garlic, tomato</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop vegs</li>
          <li>Heat oil and cook vegs and add pesto sauce</li>
          <li>Cook noodle</li>
          <li>Mix well sauce with noodle</li>
        </ol>
        <img className='food-pic' src={picture2} alt='ricottanatus-sauce-pic' />
      </div>
    </div>
  )
}

export default RicottaandNuts;
