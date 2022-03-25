import React from 'react';
import picture1 from './20220329tomatotunacapellini.jpg';

function TomatoTunaCapellini() {
  return (
    <div>
      <h1>Tomato Tuna Capellini トマトとつなのそうめんカッペリーニ風</h1>
      <h3>Tue 29.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tomato-tuna-capellin' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Olive oil 2 tbsp</li>
            <li>Ponzu 2 tbsp</li>
            <li>Lemon juice 2 tsp</li>
            <li>Black pepper</li>
            <li>Soumen 100g</li>
            <li>Perilla 6 sheets</li>
            <li>Tuna can 70g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop tomato and perilla</li>
          <li>Cook soumen</li>
          <li>Mix sauce and soumen</li>
        </ol>
      </div>
    </div>
  )
}

export default TomatoTunaCapellini;
