import React from 'react';
import picture1 from './20220420cucumbersalad.jpg';
import picture2 from './20220420crunchypotato.jpg';

function CrunchyPotatoCucumberSalad() {
  return (
    <div>
      <h1>Crunchy Potato Cucumber Salad ザクザクポテト & きゅうりサラダ</h1>
      <h3>Wed 20.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='pommes-cucumber-salad' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Yellow potato 7 - 8 small or 3 big ones</li>
            <li>Consomme 1 - 2 tsp</li>
            <li>Oil</li>
            <li>Paserly</li>
            <br />
            <li>***For cucumber salad***</li>
            <li>Cucumber</li>
            <li>Vinegar</li>
            <li>Oil</li>
            <li>Sugar</li>
            <li>Dill</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Boil potato for 10 min</li>
          <li>Then deep fry in oil for 5 min or bake for 10 min with oil 180℃</li>
          <li>Add consomme and paserly</li>
          <br />
          <li>Slice cucumber and mix with ingredients for 6 hours</li>
          <img className='food-pic' src={picture2} alt='crunchy-potato' />
        </ol>
      </div>
    </div>
  )
}

export default CrunchyPotatoCucumberSalad;
