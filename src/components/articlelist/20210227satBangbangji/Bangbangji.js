import React from 'react';
import picture1 from './20210227bangbangji.jpg';

function Bangbangji() {
  return(
    <div>
      <h1>Banbanji　棒棒鶏</h1>
      <h3>Sat 27.02.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='bangbangji-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chiken</li>
            <li>Cucumber</li>
            <li>Tomato</li>
            <li>Miso paste</li>
            <li>Soy sauce - 1 tbsp</li>
            <li>Sugar - 1 tsp</li>
            <li>Sesame oil</li>
            <li>Graind sesame</li>
            <li>Ginger</li>
            <li>Green onion</li>
            <li>Sake</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Put chicken, ginger, green onion and sake into boiled water. Cook for 6 minutes.</li>
          <li>Mix sauces</li>
          <li>Cut long and thin(not shredded) cucumber. Cut tomato in round slices</li>
        </ol>
      </div>

    </div>
  )
};

export default Bangbangji;
