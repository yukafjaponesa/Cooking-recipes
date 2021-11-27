import React from 'react';
import picture1 from './20211126nonbakedpumpkincake1.jpg';
import picture2 from './20211126nonbakedpumpkincake2.jpg';

function NonBakedPumpkinCake() {
  return (
    <div>
      <h1>Non Baked Pumpkin Cake 焼かないかぼちゃケーキ</h1>
      <h3>Fri 26.11.2021</h3>
      <h4>Diameter 18cm</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='non-baked-pumpkin-cake1-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pumpkin 150g without skin</li>
            <li>Heavy cream 150cc</li>
            <li>Sugar 60g (I used 50g)</li>
            <li>Gelatin 5g</li>
            <li>Water 2 tbsp</li>
            <li>Biscuit 150g</li>
            <li>Unsalted buter 90g</li>
            <li>*** For topping ***</li>
            <li>Heavy cream 200cc</li>
            <li>Sugar 2 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Crush biscuit in a plastic bag and knead butter and lay on a plate</li>
          <li>Cut pumpkin in pieces and steam</li>
          <li>Gelatin and water with600w for 10 sec</li>
          <li>Add pumpkin, heavy cream, sugar and gelatin in a mixer and beat</li>
          <li>Add into the plate and cool in a fridge</li>
          <li>Add heavy cream and sugar in a bowl and mix till vertically for 8 minutes and squeeze out cream</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='non-baked-pumpkin-cake2-pic' />
    </div>
  )
}

export default NonBakedPumpkinCake;
