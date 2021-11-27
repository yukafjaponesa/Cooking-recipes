import React from 'react';
import picture1 from './20211126takikomigohanfront.jpg';
import picture2 from './20211126takikomigohanback.jpg';
import picture3 from './20211126takikomigohaninside.jpg';
import picture4 from './20211126takikomigohancooked.jpg';
import picture5 from './20211126takikomionigiri.jpg';

function TakikomiRice() {
  return (
    <div>
      <h1>Takikomi Rice 炊き込みご飯</h1>
      <h3>Fri 26.11.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture5} alt='takikomi-rice-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Takikomi gohan pack</li>
            <li>Rice 2 cups</li>
            <li>Water</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Wash rice</li>
          <li>Add Dashi without water and mix well in rice cooker</li>
          <li>Add water to 2 cups of water</li>
          <li>Add ingredients on top</li>
          <li>After cooked, steam for 10 min and then mix well</li>
        </ol>
      </div>
      <img className='food-pic' src={picture1} alt='takikomi-front-pic' />
      <br />
      <img className='food-pic' src={picture2} alt='takikomi-back-pic' />
      <br />
      <img className='food-pic' src={picture3} alt='takikomi-inside-pic' />
      <br />
      <img className='food-pic' src={picture4} alt='takikomi-cooked-pic' />
    </div>
  )
}

export default TakikomiRice;
