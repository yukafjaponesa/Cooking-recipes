import React from 'react';
import picture1 from './20220223spaghettibolognese.jpg';
import picture2 from './20220223knorr.jpg';

function SpaghettiBolognese() {
  return (
    <div>
      <h1>Spaghetti Bolognese ボロネーゼパスタ</h1>
      <h3>Wed 23.02.2022</h3>
      <h4>For 3 portions</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='spaghetti-bolognese' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Graind meat 200g</li>
            <li>Spaghetti 250g</li>
            <li>Water 250ml</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add oil in a pot and cook meat</li>
          <li>Cook spaghetti aside</li>
          <li>Add knorr powder and water in pot</li>
          <li>Serve onto spaghetti</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='knorr' />
    </div>
  )
}

export default SpaghettiBolognese;
