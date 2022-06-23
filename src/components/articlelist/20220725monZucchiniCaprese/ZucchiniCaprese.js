import React from 'react';
import picture1 from './20220725zucchinicaprese.jpg';
import picture2 from './20220725peeledzucchini.jpg';

function ZucchiniCaprese() {
  return (
    <div>
      <h1>Zucchini Caprese ズッキーニのカプレーゼ風サラダ</h1>
      <h3>Mon 25.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='zucchini-caprese' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Zucchini 1/2</li>
            <li>Tomato 1/2</li>
            <li>Mozzarella cheese 100g</li>
            <li>Olive oil 1 tbsp</li>
            <li>Salt & pepper 1/4 tsp/ea</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Peel zucchini skin 3 strips</li>
          <img className='food-pic' src={picture2} alt='peeled-zucchini' />
          <li>Chop tomato and mix with olive oil and salt & pepper</li>
          <li>Slice cheese</li>
        </ol>
      </div>
    </div>
  )
}

export default ZucchiniCaprese;
