import React from 'react';
import picture1 from './20220401baumkuchen1.jpg';
import picture2 from './20220401baumkuchen2.jpg';
import picture3 from './20220401baumkucheninpan.jpg';

function Baumkuchen() {
  return (
    <div>
      <h1>Baumkuchen バウムクーヘン</h1>
      <h3>Fri 01.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='baumkuchen1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pancake mix 150g(flour 110g, sugar 30g baking powder 9g and salt)</li>
            <li>Egg 2</li>
            <li>Sugar 2 tbsp</li>
            <li>Milk 80cc</li>
            <li>Unsalted butter 50g</li>
            <li>Oil 1 tsp</li>
            <li>***For caramel***</li>
            <li>Sugar & water 3 tbsp/ea</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add eggs and sugar in a bowl and mix well</li>
          <li>Add milk → pancake mix → melted butter and mix each time</li>
          <li>Add oil in a pan and heat it and then turn it off</li>
          <img className='food-pic' src={picture3} alt='baumkuchen-in-pan' />
          <li>Spread dough thinly and do it until the end</li>
          <li>Add sugar and 1 tbsp of water in the same pan and caramelized</li>
          <li>Remove from the heat and add the rest of 2 tbsp water slowly and mix</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='baumkuchen2' />
    </div>
  )
}

export default Baumkuchen;
