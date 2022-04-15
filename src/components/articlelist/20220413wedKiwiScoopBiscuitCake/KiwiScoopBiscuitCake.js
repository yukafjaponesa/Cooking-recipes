import React from 'react';
import picture1 from './20220413kiwiscoopbiscuitcake1.jpg';
import picture2 from './20220413whippedcream.jpg';
import picture3 from './20220413biscuit.jpg';
import picture4 from './20220413layer.jpg';
import picture5 from './20220413kiwiscoopbiscuitcake2.jpg';

function KiwiScoopBiscuitCake() {
  return (
    <div>
      <h1>Kiwi Scoop Biscuit Cake キウイのスコップビスケットケーキ</h1>
      <h3>Wed 13.04.2022</h3>
      <h4>17cm x 17cm square</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='kiwi-scope-biscuit-cake1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Kiwi green, yellow 1 each</li>
            <li>Biscuit 20 pieces(110g)</li>
            <li>Heavy cream 250cc</li>
            <li>Sugar 2 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Peel kiwis skin and thin slice</li>
          <li>Add sugar in heavy cream and make whipped cream</li>
          <img className='food-pic' src={picture2} alt='whipped-cream' />
          <li>Biscuit → whipped cream → kiwi</li>
          <img className='food-pic' src={picture3} alt='biscuit' />
          <br />
          <img className='food-pic' src={picture4} alt='layer' />
          <li>Rest in fridge over a night</li>
        </ol>
      </div>
      <img className='food-pic' src={picture5} alt='kiwi-scope-biscuit-cake2' />
    </div>
  )
}

export default KiwiScoopBiscuitCake;
