import React from 'react';
import picture1 from './20220425matchchococheeseice1.jpg';
import picture2 from './20220425matchacheese.jpg';
import picture3 from './20220425matchchoco.jpg';
import picture4 from './20220425matchchococheeseice2.jpg';

function MatchaRawChocoCheeseIce() {
  return (
    <div>
      <h1>Matcha Raw Choco Cheese Ice 抹茶の生チョコチーズアイス</h1>
      <h3>Mon 25.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='match-choco-cheese1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Matcha powder 1 tbsp</li>
            <li>Water 2 tbsp</li>
            <li>Cream cheese 200g</li>
            <li>Heavy cream 130cc</li>
            <li>Sugar 60g</li>
            <li>***Matcha choco***</li>
            <li>White chocolate 120g</li>
            <li>Heavy cream 70cc</li>
            <li>Matcha powder 1tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add matcha powder and water to mix (Matcha paste)</li>
          <li>Add heavy cream(100cc) in another bowl and make whipped cream</li>
          <li>Add cream cheese and heavy cream(30cc) in a plate and microwave oven 600w 40 -60 sec and mix</li>
          <li>Add sugar, matcha pate in cream cheese and mix each time. add whipped cream</li>
          <li>Pour into milk pack and froze for 30 min</li>
          <img className='food-pic' src={picture2} alt='match-cheese' />
          <li>Add white chocolate and heavy cream microwave oven 600w 40 - 60 sec</li>
          <li>Add matcha powder and mix well</li>
          <li>Add matcha chocolate in matcha cheese and make marble patterns</li>
          <img className='food-pic' src={picture3} alt='match-choco' />
          <li>Frozen again for 4 hrs</li>
          <img className='food-pic' src={picture4} alt='match-choco-cheese2' />
        </ol>
      </div>
    </div>
  )
}

export default MatchaRawChocoCheeseIce;
