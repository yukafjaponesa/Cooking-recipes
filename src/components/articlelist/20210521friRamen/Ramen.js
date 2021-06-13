import React from 'react';
import picture1 from './20210521ramen.jpg';
import picture2 from './20210521spinach.jpg';
import picture3 from './20210521koreanseafoodramen.jpg';
import picture4 from './20210521thaitomyamramen.jpg';
import picture5 from './20210521asiavegs.jpg';

function Ramen() {
  return (
    <div>
      <h1>Ramen 　ラーメン</h1>
      <h3>Fri 21.05.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='ramen-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Instant Ramen</li>
            <li>For toppings</li>
            <li>Asian vegetables</li>
            <li>Corn</li>
            <li>Butter</li>
            <li>For snack</li>
            <li>Spinach & sesame miso paste</li>
          </ul>
        </div>
      </div>

      <img className='food-pic' src={picture2} alt='spinach-pic' />

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook ramen as following the instructions</li>
          <li>Mix spinach with sesame miso paste</li>
        </ol>
      </div>
      <img className='food-pic' src={picture3} alt='korean-seafood-ramen-pic' />
      <img className='food-pic' src={picture4} alt='thai-tomyam-ramen-pic' />
      <img className='food-pic' src={picture5} alt='asia-vegs-pic' />

    </div>
  )
}

export default Ramen;
