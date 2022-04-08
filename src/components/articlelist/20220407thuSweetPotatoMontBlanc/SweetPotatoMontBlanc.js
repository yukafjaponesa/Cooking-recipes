import React from 'react';
import picture1 from './20220407sweetpotatomontblanc1.jpg';
import picture2 from './20220407sweetpotatomontblanc2.jpg';
import picture3 from './20220407sweetpotato.jpg';

function SweetPotatoMontBlanc() {
  return (
    <div>
      <h1>Sweet Potato Mont Blanc スイートポテトモンブラン</h1>
      <h3>Thu 07.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweet-potato-mont-blanc1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sweet potato 250g</li>
            <li>Heavy cream 150ml</li>
            <li>Sugar 20g</li>
            <li>Biscuit 8 pieces</li>
            <li>Whipped cream 150cc</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Steam sweet potato</li>
          <li>Peel skin and mix sugar and puréed</li>
          <img className='food-pic' src={picture2} alt='sweet-potato' />
          <li>Add heavy cream little by little and mix</li>
          <li>Add whipped cream on biscuit and make Mont Blanc form</li>
          <img className='food-pic' src={picture3} alt='sweet-potato-mont-blanc2' />
        </ol>
      </div>
    </div>
  )
}

export default SweetPotatoMontBlanc;
