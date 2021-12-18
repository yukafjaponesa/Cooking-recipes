import React from 'react';
import picture1 from './20211218miracoliherbspasta.jpg';
import picture2 from './20211218miracoliherbs.jpg';

function MiracoliHerbs() {
  return (
    <div>
      <h1>Miracoli Herbs トマトパスタ</h1>
      <h3>Sat 18.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='miracoliherbs-pasta-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Spagetthi</li>
            <li>Tomato, onion, garlic, paprika, carrot, mushroom</li>
            <li>Salt, pepper, oregano</li>
            <li>Minced meat</li>
            <li>Miracoli Herbs pasta sauce</li>
            <li>Water, olive oil, salt</li>
            <li>Cheese</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook noodle and add salt and olive oil</li>
          <li>Chop all vegs</li>
          <li>Stir fri vegs and meat and add salt and pepper</li>
          <li>Add pasta ssauce, oregano and cheese</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='miracoli-herbs-sauce-pic' />
    </div>
  )
}

export default MiracoliHerbs;
