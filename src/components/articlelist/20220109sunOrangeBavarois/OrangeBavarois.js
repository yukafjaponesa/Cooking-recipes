import React from 'react';
import picture1 from './20220109orangebavarois.jpg';
import picture2 from './20220109orangejuice.jpg';
import picture3 from './20220109orangemilk.jpg';
import picture4 from './20220109orangebavarois2.jpg';

function OrangeBavarois() {
  return (
    <div>
      <h1>Orange Bavarois 2層に分かれるオレンジババロア</h1>
      <h3>Sun 09.01.2022</h3>
      <h4>Bowl 20cm</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='orange-bavarois1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Orange juice 600cc</li>
            <li>Gelatin 15g</li>
            <li>Cold water 90cc</li>
            <li>Sugar 70g</li>
            <li>Milk 200cc</li>
            <li>Heavy cream 200cc</li>
            <li>Egg 1</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add cold water in a bowl and add gelatin</li>
          <li>Add gelatin, orange juice and sugar in a pod</li>
          <li>Turn off the heat when sugar  and gelatin melted</li>
          <img className='food-pic' src={picture2} alt='orange-juice' />
          <br />
          <li>In a bowl, add egg and mix wit. Add milk and heavy cream and mix.</li>
          <img className='food-pic' src={picture3} alt='milk' />
          <br />
          <li>Add orange juice in milk bowl and mix gently</li>
          <img className='food-pic' src={picture4} alt='orange-milk' />
          <br />
          <li>Rest in fridge over a night</li>
        </ol>
      </div>
    </div>
  )
}

export default OrangeBavarois;
