import React from 'react';
import picture1 from './20220117cheeseravioli.jpg';
import picture2 from './20220117cheeseraviolitomatosauce.jpg';

function CheeseRavioli() {
  return (
    <div>
      <h1>Cheese Ravioli チーズラビオリ</h1>
      <h3>Mon 17.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cheese-ravioli' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cheese ravioli 250g</li>
            <li>Tomato sauce 300g</li>
            <li>I used below</li>
            <li>Graind meat 100g</li>
            <li>Onion, carrot, paprika</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop vegs and stir fry</li>
          <li>Add meat</li>
          <li>After boiling water, cook ravioli for 2 min</li>
          <li>Mix with tomato sauce</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='cheese-ravioli-tomato-sauce' />
    </div>
  )
}

export default CheeseRavioli;
