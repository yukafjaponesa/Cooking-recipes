import React from 'react';
import picture1 from './20210620teriyakichicken.jpg';
import picture2 from './20210620teriyakipack.jpg';
import picture3 from './20210620teriyakiback.jpg';

function TeriyakiChicken() {
  return (
    <div>
      <h1>Teriyaki Chicken 照り焼きチキン</h1>
      <h3>Sun 20.06.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='terichiken-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Beef / Chicken</li>
            <li>Paprika</li>
            <li>Zuccini / Broccoli</li>
            <li>Mushroom</li>
            <li>Teriyaki sauce</li>
            <li>Rice</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Start cooking rice</li>
          <li>Chop meat and vegs and stir fry</li>
          <li>Add teriyaki sauce</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='teriyaki-pack-pic' />
      <img className='food-pic' src={picture3} alt='teriyaki-back-pic' />
    </div>
  )
}

export default TeriyakiChicken;
