import React from 'react';
import picture1 from './20210223youlinji.jpg';

function Youlinji() {
  return (
    <div>
      <h1>Youlinji 油淋鶏</h1>
      <h3>Tue 23.02.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='youlinji-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chiken</li>
            <li>Cabagge</li>
            <li>Vinegar</li>
            <li>Soy sauce - 1 tbsp</li>
            <li>Sugar - 1 tsp</li>
            <li>Sesame oil</li>
            <li>Garic</li>
            <li>Ginger</li>
            <li>Green onion</li>
            <li>Sake</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Grill checken</li>
          <li>Mix sauces</li>
        </ol>
      </div>

    </div>
  )
}

export default Youlinji;
