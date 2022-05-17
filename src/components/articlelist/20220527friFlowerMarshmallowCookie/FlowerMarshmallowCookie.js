import React from 'react';
import picture1 from './20220527flowermaarshmallowcookie.jpg';
import picture2 from './20220527cut.jpg';
import picture3 from './20220527flower1.jpg';
import picture4 from './20220527flower2.jpg';
import picture5 from './20220527firstbake.jpg';

function FlowerMarshmallowCookie() {
  return (
    <div>
      <h1>Flower Marshmallow Cookie フラワーマシュマロクッキー</h1>
      <h3>Fri 27.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='flower-marshmallow-cookie' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Marshamallow</li>
            <li>Chocolate (i.g. m&ms)</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut marshmallow in 5 stripes</li>
          <img className='food-pic' src={picture2} alt='cut' />
          <li>Make flower shape and put on baking sheet</li>
          <img className='food-pic' src={picture3} alt='flower1' />
          <br />
          <img className='food-pic' src={picture4} alt='flower2' />
          <li>Bake for 10 min 130℃</li>
          <img className='food-pic' src={picture5} alt='first-bake' />
          <li>Add chocolate and bake for 40 min 100℃</li>
        </ol>
      </div>
    </div>
  )
}

export default FlowerMarshmallowCookie;
