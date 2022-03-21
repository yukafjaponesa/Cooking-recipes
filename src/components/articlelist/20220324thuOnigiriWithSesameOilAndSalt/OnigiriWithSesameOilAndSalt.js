import React from 'react';
import picture1 from './20220324onigirimisosoup.jpg';
import picture2 from './20220324onigiri.jpg';
import picture3 from './20220324onigiriprep.jpg';

function OnigiriWithSesameOilAndSalt() {
  return (
    <div>
      <h1>Onigiri With Sesame Oil And Salt ごま油とお塩のやみつきおにぎり</h1>
      <h3>Thu 24.03.2022</h3>
      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='onigiri-sesameoil-salt' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cooked rice 300g</li>
            <li>Chopped spring onion 20g</li>
            <li>White sesame 2 tsp</li>
            <li>Sesame oil 1 tsp</li>
            <li>Consommé 1/2 tsp</li>
            <li>Salt</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add all the ingredients in a bowl and mix well</li>
          <img className='food-pic' src={picture3} alt='onigiri-prep' />
          <li>Serve with miso soup with tofu and seaweed</li>
          <img className='food-pic' src={picture2} alt='onigiri-miso-soup' />
        </ol>
      </div>
    </div>
  )
}

export default OnigiriWithSesameOilAndSalt;
