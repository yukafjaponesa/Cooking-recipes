import React from 'react';
import picture1 from './20220406cabbagesoup.jpg';

function CabbageSoup() {
  return (
    <div>
      <h1>Cabbage Soup キャベツスープ～ドイツスタイル～</h1>
      <h3>Wed 06.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cabbage-soup' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cabbage 3/4</li>
            <li>Carrot 1</li>
            <li>Potato 2- 3 small</li>
            <li>Onion 1 small</li>
            <li>Bacon</li>
            <li>Consomme</li>
            <li>Caraway seed(Kümmel)</li>
            <li>Graind meat 500g</li>
            <li>Ketchap</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop vegs</li>
          <li>Cook meat and veg</li>
          <li>Add water and consomme</li>
          <li>Add ketchap and caraway seed</li>
        </ol>
      </div>
    </div>
  )
}

export default CabbageSoup;
