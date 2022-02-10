import React from 'react';
import picture1 from './20220209whitechocomarshmallowcookie.jpg';

function WhiteChocoMarshmallowCookie() {
  return (
    <div>
      <h1>White Choco Marshmallow Cookie</h1>
      <h1>ホワイトチョコマシュクッキー</h1>
      <h3>Wed 09.02.2022</h3>
      <h4>Use normal white marshmallow</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='white-choco-cookie' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>White chocolate 40g</li>
            <li>Egg 1</li>
            <li>Sugar & oil 3 tbsp/ea</li>
            <li>Hotcake mix 200g</li>
            <li>or</li>
            <li>Flour 160g, sugar 40g, baking powder 2 tsp, salt 1/4 tsp</li>
            <li>Marshmallow 30g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 170℃</li>
          <li>Chop the chocolate into small pieces</li>
          <li>Add egg, sugar and oil in a bowl and mix well</li>
          <li>Add hotcake mix</li>
          <li>To make soft cookies, fold the cookie dough and use a rubber spatula in a cutting motion</li>
          <li>Add white chocolate and marshmallow and mix</li>
          <li>Divide into 15 equals</li>
          <li>Bake for 10 min</li>
        </ol>
      </div>
    </div>
  )
}

export default WhiteChocoMarshmallowCookie;
