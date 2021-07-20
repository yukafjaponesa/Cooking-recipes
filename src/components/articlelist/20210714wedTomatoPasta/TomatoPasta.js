import React from 'react';
import picture1 from './20210714tomatopasta.jpg';

function TomatoPasta() {
  return (
    <div>
      <h1>Tomato pasta トマトパスタ</h1>
      <h3>Wed 14.07.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tomato-pasta-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pasta noodle 250g</li>
            <li>Tomato can 1</li>
            <li>Mushroom</li>
            <li>Cherry Tomato</li>
            <li>Onion, carrot, garlic - chopped</li>
            <li>Minced meat 350g</li>
            <li>Basil</li>
            <li>Salt & pepper, tomato ketchap</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Stir fri vegs and meat</li>
          <li>Cook pasta noodle</li>
          <li>Add tomato can</li>
          <li>Salt & pepper to the taste</li>
          <li>Add noodle and mix well</li>
        </ol>
      </div>
    </div>
  )
}

export default TomatoPasta;
