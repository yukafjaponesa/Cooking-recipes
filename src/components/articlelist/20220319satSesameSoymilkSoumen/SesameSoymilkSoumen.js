import React from 'react';
import picture1 from './20220319sesamesoymilksoumen.jpg';

function SesameSoymilkSoumen() {
  return (
    <div>
      <h1>Sesame Soy Milk Soumen ごま豆乳そうめん Hot / Cold</h1>
      <h3>Sat 19.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sesame-soymilk-soumen' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Soumen noodle 1(100g)</li>
            <li>Tuna can 1(70g)</li>
            <li>Kimchi 50g</li>
            <li>Kaiware(cucumber) 12.5g</li>
            <li>☆Soy milk 250cc</li>
            <li>☆Consome 1/3 tsp</li>
            <li>☆Graind white sesame 1 tbsp</li>
            <li>☆Sesame oil 1 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook soumen</li>
          <li>Add ☆ in a pod and warm it until miso melts</li>
        </ol>
      </div>
    </div>
  )
}

export default SesameSoymilkSoumen;
