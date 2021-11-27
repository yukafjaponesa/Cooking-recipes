import React from 'react';
import picture1 from './20211126miracoliclassicpasta.jpg';
import picture2 from './20211126miracoliclassicsauce.jpg';

function MiracoliClassic() {
  return (
    <div>
      <h1>Miracoli Classic トマトソースパスタ</h1>
      <h3>Fri 26.11.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='miracoli-pasta-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Spagetthi</li>
            <li>Tomato, onion, garlic, paprika, carrot</li>
            <li>Salt, pepper, oregano</li>
            <li>Minced meat</li>
            <li>Miracoli Classic pasta sauce</li>
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
      <img className='food-pic' src={picture2} alt='miracoli-classic-sauce-pic' />
    </div>
  )
}

export default MiracoliClassic;
