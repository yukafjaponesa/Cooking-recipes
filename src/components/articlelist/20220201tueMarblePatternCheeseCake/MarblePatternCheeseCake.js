import React from 'react';
import picture1 from './20220201marblepatterncheesecake.jpg';
import picture2 from './20220201marblepatterncheesecakericecooker.jpg';

function MarblePatternCheeseCake() {
  return (
    <div>
      <h1>Marble Pattern Cheese Cake マーブルチーズケーキ</h1>
      <h3>Tue 01.02.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='marble-cheese-cake' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cream cheese 200g</li>
            <li>Sugar 50g</li>
            <li>Beaten egg 1</li>
            <li>Heavy cream 100cc</li>
            <li>Lemon juice 1 tbsp</li>
            <li>Flour 2 tb  sp</li>
            <li>Chocolate 50g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add cream cheese in a bowl and mix till smooth </li>
          <li>Add sugar and mix well</li>
          <li>Add beaten egg little by little and mix each time</li>
          <li>Add heavy cream and mix well</li>
          <li>Add lemon juice and mix well</li>
          <li>Sift flour and mix well</li>
          <li>Add chocolate in a bowl and melt it</li>
          <li>Add cheese cream 3 tbsp in it</li>
          <li>Add cheese cake dough in rice cooker</li>
          <li>Make mable pattern with chocolate and cook</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='marble-cheese-cake-rice-cooker' />
    </div>
  )
}

export default MarblePatternCheeseCake;
