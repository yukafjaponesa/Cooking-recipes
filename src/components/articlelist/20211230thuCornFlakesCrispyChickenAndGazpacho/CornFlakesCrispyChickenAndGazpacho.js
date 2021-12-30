import React from 'react';
import picture1 from './20211230cornflakescrispychickenandgazpacho.jpg';
import picture2 from './20211230gazpacho.jpg';

function CornFlakesCrispyChickenAndGazpacho() {
  return (
    <div>
      <h1>Corn Flakes Crispy Chicken And Gazpacho</h1>
      <h1>コーンフレークでクリスピーチキン＆ガスパチョ</h1>
      <h3>Thu 30.12.2021</h3>
      <h4><em>For 1 person</em></h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cornflakes-chicken-gazpacho-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***For crispy chicken***</li>
            <li>Chicken 6 sticks</li>
            <li>Corn flakes 80g</li>
            <li>Flour 50g</li>
            <li>Milk 1 tbsp</li>
            <li>Egg 1</li>
            <li>Konsome 2 tsp</li>
            <li>Black pepper 1/2 tsp</li>
            <li>***For Gazpacho***</li>
            <li>Tomato 200g</li>
            <li>Cucumber 40g</li>
            <li>Green bell pepper 15g</li>
            <li>Onion 20g</li>
            <li>Garic 1/2</li>
            <li>Olive oil 1/2 tbsp</li>
            <li>White wine vinegar 1 tsp</li>
            <li>Paprika powder, tabasco 1/2 tsp/ea</li>
            <li>Salt 1/4 tsp</li>
            <li>Paserly & olive oil for topping</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Roughly crush corn flakes</li>
          <li>In a bowl, add all the ingredients</li>
          <li>Drain chicken in the bowl and then cover with corn flakes</li>
          <li>Deep fry or stir fry as you like</li>
          <br />
          <li>***For Gazpacho***</li>
          <li>Chop all in pieces and add in mixer</li>
          <li>Pour in a plate and add paserly and olive oil</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='gazpacho-prep-pic' />
    </div>
  )
}

export default CornFlakesCrispyChickenAndGazpacho;
