import React from 'react';
import picture1 from './20220409creamlentilsoup.jpg';
import picture2 from './20220409redlentil1.jpg';
import picture3 from './20220409redlentil2.jpg';
import picture4 from './20220409redlentil3.jpg';

function CreamLentilSoup() {
  return (
    <div>
      <h1>Cream Lentil Soup レンズ豆のクリームスープ</h1>
      <h3>Sat 09.04.2022</h3>
      <h4>For 4 servings</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cream-lentil-soup' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Red lentil 100g</li>
            <li>Leek 1</li>
            <li>Shallots 3</li>
            <li>Garlic 2 gloves</li>
            <li>Oil 3 tbsp</li>
            <li>Veg broth 1 L</li>
            <li>Heavy cream 200ml</li>
            <li>Chilli pepper 1 - 2 tbsp</li>
            <li>Fruit vinegar 1 - 2 tbsp</li>
            <li>Tomato can 425ml</li>
            <li>Thyme</li>
            <li>Cream fresh</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Round slice leek, crush garlic, chop shallots</li>
          <li>Add oil in a pod and cook them</li>
          <li>Add lentil and veg broth and cook for 20 min</li>
          <li>Add other ingredients except cream fresh and cook and the puréed</li>
        </ol>
        <img className='food-pic' src={picture2} alt='lentil-soup1' />
        <br />
        <img className='food-pic' src={picture3} alt='lentil-soup2' />
        <br />
        <img className='food-pic' src={picture4} alt='lentil-soup3' />
      </div>
    </div>
  )
}

export default CreamLentilSoup;
