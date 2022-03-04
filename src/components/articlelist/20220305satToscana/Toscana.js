import React from 'react';
import picture1 from './20220305toscana.jpg';
import picture2 from './20220305toscanamaggi1.jpg';
import picture3 from './20220305toscanamaggi2.jpg';

function Toscana() {
  return (
    <div>
      <h1>Toscana トスカーナ</h1>
      <h3>Sat 05.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='toscana' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pasta toscana sauce 1</li>
            <li>Tomato 200g</li>
            <li>Chicken 250g</li>
            <li>Ruccola 100g</li>
            <li>Pasta 150g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut chicken and tomato</li>
          <li>Cook pasta</li>
          <li>Add oil in a pan and cook chicken and then tomato</li>
          <li>Add maggi sauce and then pasta</li>
          <li>Lastly, add Ruccola</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='toscana' />
      <br />
      <img className='food-pic' src={picture3} alt='toscana' />
    </div>
  )
}

export default Toscana;
