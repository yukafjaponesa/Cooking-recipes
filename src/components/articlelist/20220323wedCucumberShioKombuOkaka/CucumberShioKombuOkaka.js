import React from 'react';
import picture1 from './20220323cucumbershiokombuokaka.jpg';

function CucumberShioKombuOkaka() {
  return (
    <div>
      <h1>Cucumber Shio Kombu Okaka きゅうりの塩昆布おかか漬け</h1>
      <h3>Wed 23.03.2022</h3>
      <h4>If I can get bonito flakes and shio-kombu, I would make it.</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='shio-kombu-okaka' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cucumber 2 small</li>
            <li>Shio kombu 10g</li>
            <li>Okaka(Bonito flakes) 2g</li>
            <li>Sesame oil 1 tbsp</li>
            <li>Graind garlic 1/4 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut cucumber in 1 bite</li>
          <li>Add all in a plastic bag and mix</li>
        </ol>
      </div>
    </div>
  )
}

export default CucumberShioKombuOkaka;
