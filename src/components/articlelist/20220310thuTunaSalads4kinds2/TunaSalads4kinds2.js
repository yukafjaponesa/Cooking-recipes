import React from 'react';
import picture1 from './20220310tunacabaggeshiokombu.jpg';
import picture2 from './20220310tunacucumvercabagge.jpg';

function TunaSalads4kinds2() {
  return (
    <div>
      <h1>Tuna Salads 4 kinds 2 塩昆布ツナキャベツ & ツナキュウリキャベツ</h1>
      <h3>Thu 10.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tuna-cabbage2' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***Shio kombu cabagge***</li>
            <li>Cabbage 260g(half of small)</li>
            <li>Tuna can 70g</li>
            <li>Soy sauce 1 tbsp</li>
            <li>Sesame oil 2 tsp</li>
            <li>Sesame 1 tbsp</li>
            <li>Shio kombu 5g(or salt)</li>
            <br />
            <li>***Tuna cucumber cabbage***</li>
            <li>Cabbage 200g</li>
            <li>Cucumber 1</li>
            <li>Tuna 70g</li>
            <li>Salt 1/2 tsp</li>
            <li>Consome 1 tsp</li>
            <li>Soy sauce, sesame oil 2 tsp/ea</li>
            <li>Graind sesame 1 tbsp</li>
            <li>Sesame 1 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>***Shio kombu cabagge***</li>
          <li>Cut cabbaage in big pieces and steam it</li>
          <li>Mix with all the ingredients</li>
          <br />
          <li>***Tuna cucumber cabbage***</li>
          <li>Slice cucumber and cabbage and add salt</li>
          <li>Drain water</li>
          <li>Mix with all the ingredients</li>
          <img className='food-pic' src={picture2} alt='tuna-cabbage' />
        </ol>
      </div>
    </div>
  )
}

export default TunaSalads4kinds2;
