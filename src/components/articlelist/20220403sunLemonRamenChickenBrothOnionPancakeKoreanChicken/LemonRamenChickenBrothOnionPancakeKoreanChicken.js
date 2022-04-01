import React from 'react';
import picture1 from './20220403lemonramen.jpg';
import picture2 from './20220403riceflourchicken.jpg';

function LemonRamenChickenBrothOnionPancakeKoreanChicken() {
  return (
    <div>
      <h1>Lemon Ramen Chicken Broth & Onion Pancake & Korean Chicken</h1>
      <h1>鶏だしレモンラーメン & 玉ねぎだけもちもち焼き & 米粉で韓国風ザクザクチキン</h1>
      <h3>Sun 03.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='lemon-ramen' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***Lemon ramen in chicken broth***</li>
            <li>For 2 servings</li>
            <li>Ramen noodle 2</li>
            <li>Lemon 2</li>
            <li>Chicken 2 sticks</li>
            <li>Salt</li>
            <li>Sake 1/2 tsp</li>
            <li>☆Chicken soup 700cc(consommé 1 1/2 tbsp & water 700cc)</li>
            <li>☆Soy sauce 1 tsp</li>
            <li>☆Nampula 2 tbsp</li>
            <li>Spring onion</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook ramen noodle</li>
          <li>Boil chicken with sake and salt</li>
          <li>Add ☆ in a pot and boil</li>
          <li>Squeeze 1 lemon and add in the pot</li>
          <li>Another lemon, slice for topping</li>
          <br />
          <li>***Onion pancake***</li>
          <li>Sliced onion 200g</li>
          <li>Sesame oil 1 tbsp</li>
          <li>☆Potato starch, flour 2 tbsp/ea</li>
          <li>☆Salt 1/3 tsp</li>
          <li>☆Dashi 1 tsp</li>
          <li>☆Water 50cc</li>
          <li>Ponzu 1 tbsp</li>
          <li>Sesame oil 1 tsp</li>
          <li>Chili oil, sesame</li>
          <br />
          <li>Add onion and ☆ in a bowl and mix</li>
          <li>Add sesame oil in a pan and cook</li>
          <li>Mix sauce</li>
          <br />
          <li>***Korean fried chicken***</li>
          <li>Chicken 350g</li>
          <li>Milk 80cc</li>
          <li>Graind garlic 1 tsp</li>
          <li>Sake 1 tbsp</li>
          <li>Consommé 1/2 tsp</li>
          <li>Salt & pepper 1/2 tsp/ea</li>
          <li>☆Rice flour 20g potato starch 10g mix</li>
          <li>Rice 60g potato starch 20g plastic bag shake</li>
          <br />
          <li>Chop chicken and mix with milk, garlic, sake, consomme and slat & pepper</li>
          <li>Rest in fridge 15 min</li>
          <img className='food-pic' src={picture2} alt='chicken-in-milk' />
          <li>Add ☆ and mix</li>
          <li>Add chicken in plastic bag and shake</li>
          <li>Deep fry twice</li>
        </ol>
      </div>
    </div>
  )
}

export default LemonRamenChickenBrothOnionPancakeKoreanChicken;
