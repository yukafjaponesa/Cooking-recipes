import React from 'react';
import picture1 from './20210516threecolorricebowl.jpg';

function ThreeColorRiceBowl() {
  return (
    <div>
      <h1>Three Color Rice Bowl 三色丼</h1>
      <h3>Sun 16.05.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='threecolorbowl-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>For brown part</li>
            <li>Minced meat</li>
            <li>Soy sauce & Brown sugar & sake</li>
            <li>For green part</li>
            <li>Spinach / Green peas</li>
            <li>Mentsuyu(soba tsuyu) & sesame oil & sesame</li>
            <li>For yellow part</li>
            <li>Egg & sugar</li>
            <li>Rice</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Start cooking rice</li>
          <li>Make scrumbled egg</li>
          <li>Stir fry meat</li>
          <li>Boil / deflost spinach and mix with sauce</li>
        </ol>
      </div>
    </div>
  )
}

export default ThreeColorRiceBowl;
