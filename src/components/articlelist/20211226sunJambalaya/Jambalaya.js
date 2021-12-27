import React from 'react';
import picture1 from './20211226jambalaya.jpg';

function Jambalaya() {
  return (
    <div>
      <h1>Jambalaya ジャンバラヤ</h1>
      <h3>Sun 26.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='jambalaya-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rice 2 cups</li>
            <li>Onion 1/2</li>
            <li>Sausage 5 sticks (I used cooked graind meat this time)</li>
            <li>Corn 60g</li>
            <li>Red paprika 1/3</li>
            <li>Green bell pepper 2</li>
            <li>Olieve oil 2 tbsp</li>
            <li>Ketchap 1 & 1/2 tbsp</li>
            <li>Mirin 1/2 tbsp</li>
            <li>Chilli powder 2 tsp, Consome powder 2 tsp</li>
            <li>Soy sauce, Kumin powder, Sauce, 1 tsp/ea</li>
            <li>Salt & pepper, graind garlic 5 cm</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop into small pieces vegs and sausage</li>
          <li>Add rice, onion and corn in rice cooker and add water to 2 cups</li>
          <li>Add sauces in it and mix well</li>
          <li>Add paprikas and sausage and DO NOT mix</li>
          <li>After cooked, mix well and top with paserly</li>
        </ol>
      </div>
    </div>
  )
}

export default Jambalaya;
