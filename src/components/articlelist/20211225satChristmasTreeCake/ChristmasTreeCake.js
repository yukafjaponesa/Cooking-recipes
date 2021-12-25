import React from 'react';
import picture1 from './20211225xmastreecake1.jpg';
import picture2 from './20211225xmastreecake2.jpg';

function ChristmasTreeCake() {
  return (
    <div>
      <h1>Christmas Tree Cake クリスマスツリーケーキ</h1>
      <h3>Sat 25.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='xmas-tree-cake-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cookie 160g</li>
            <li>Butter 80g</li>
            <li>Heavy cream 160ml</li>
            <li>White chocolate 300g</li>
            <li>Matcha powder 2 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Crush cookies and add butter to make dough. Place in plate with cooking sheet</li>
          <li>Cut chocolate in small pieces and put in a bowl</li>
          <li>Warm heavy cream and pour into chocolate</li>
          <li>Put the bowl of chocolate in hot water. Stir gently to melt.</li>
          <li>Sift matcha powder and mix well</li>
          <li>Pour on to cookies and cool over a night</li>
          <li>Cut in 8 pieces and decolate it</li>
        </ol>
      </div>
      <img className='food-pic' src={picture1} alt='xmas-tree-cake-pic' />
    </div>
  )
}

export default ChristmasTreeCake;
