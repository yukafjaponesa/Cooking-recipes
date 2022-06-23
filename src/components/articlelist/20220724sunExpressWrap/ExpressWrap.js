import React from 'react';
import picture1 from './20220724expresswrap.jpg';
import picture2 from './20220724cheese.jpg';
import picture3 from './20220724tomatoavo.jpg';
import picture4 from './20220724lettuceontop.jpg';
import picture5 from './20220724roll.jpg';
import picture6 from './20220724wrapintoaster.jpg';

function ExpressWrap() {
  return (
    <div>
      <h1>Express Wrap エクスプレスラップ</h1>
      <h3>Sun 24.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='ecpress-wrap' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Tortilla</li>
            <li>Cheese</li>
            <li>Avocado</li>
            <li>Tomato</li>
            <li>Salad</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add cheese</li>
          <img className='food-pic' src={picture2} alt='cheese' />
          <li>Add tomato & avo</li>
          <img className='food-pic' src={picture3} alt='tomato-avo' />
          <li>Add salad</li>
          <img className='food-pic' src={picture4} alt='salad' />
          <li>Hold it</li>
          <img className='food-pic' src={picture5} alt='hold' />
          <li>Toast it</li>
          <img className='food-pic' src={picture6} alt='toast' />
        </ol>
      </div>
    </div>
  )
}

export default ExpressWrap;
