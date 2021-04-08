import React from 'react';
import picture1 from './20210408tacorice.jpg';

function TacoRice() {
  return (
    <div>
      <h1>Taco Rice タコライス</h1>
      <h3>Tue 08.04.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tacorice-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rice</li>
            <li>hacced meat</li>
            <li>onion</li>
            <li>lettecu</li>
            <li>Tomato</li>
            <li>Cheese</li>
            <li>Nachios / Chips</li>
            <li>Garic</li>
            <li>Ketchap</li>
            <li>oster sauce</li>
            <li>soy sauce</li>
            <li>Pepper & salt</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook rice</li>
          <li>Chop tomato and lettecu</li>
          <li>Stir garci, onion and meat</li>
          <li>Put soy sauce, pepper& salt, ketschap and oster sauce</li>
          <li>Put rice ☞ cheese ☞ lettecu ☞ meat ☞ tomato and Nachios</li>
        </ol>
      </div>

    </div>
  )
}

export default TacoRice;
