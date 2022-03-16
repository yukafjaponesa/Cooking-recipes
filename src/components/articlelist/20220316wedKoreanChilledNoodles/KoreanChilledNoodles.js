import React from 'react';
import picture1 from './20220316koreanchillednoodles.jpg';

function KoreanChilledNoodles() {
  return (
    <div>
      <h1>Korean Chilled Noodles 韓国冷麺風さっぱりそうめん</h1>
      <h3>Wed 16.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='korean-cilled-noodles' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cucumber 50g</li>
            <li>Water 300ml</li>
            <li>Dashi (or mentsuyu) 1 tbsp</li>
            <li>Soy sauce 1 tsp</li>
            <li>Sugar, graind ginger 1/2 tsp/ea</li>
            <li>Hard boiled egg 1</li>
            <li>Soumen noodle 100g</li>
            <li>Kimchi 50g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Thin slice cucumber</li>
          <li>Add soup ingredients in a pot and boil it and then cool in fridge for 20 min</li>
          <li>Cook soumen noodle</li>
        </ol>
      </div>
    </div>
  )
}

export default KoreanChilledNoodles;
