import React from 'react';
import picture1 from './20210602gyozaandsoup.jpg';
import picture2 from './20210602chinesecabbage.jpg';
import picture3 from './20210602gyozadone.jpg';
import picture4 from './20210602gyozadone.jpg';
import picture5 from './20210602gyozaarrange.jpg';

function GyozaAndSoup() {
  return (
    <div>
      <h1>Gyoza And Soup 餃子スープ</h1>
      <h3>Wed 02.06.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='gyozasoup-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chopped meat 400g</li>
            <li>Chinese cabbage 4 leaves</li>
            <li>Rice</li>
            <li>Gyoza paper - need to be defloast 1 day before</li>
            <li>Your choice of soup - veg, chicken soup with any vegs</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li><em>NOT</em> Start cooking rice</li>
          <li>Chop chinese cabbage and put salt. rest for 5 min</li>
          <li>Rinse the cabbage and mix with meat and salt & pepper</li>
          <li>Make Gyoza - Google/Youtube is your best friend</li>
          <li>Have enough space for each gyoza to steam with cooking rice</li>
          <li>The rest of gyoza, you can put in a soup or stir fry</li>
          <li>I like eating with soy sauce, vinegar and chili oil</li>

        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='chinese-cabbage-pic' />
      <img className='food-pic' src={picture3} alt='gyoza-make-pic' />
      <img className='food-pic' src={picture4} alt='gyoza-done-pic' />

      <p>!Extra!</p>
      <p>Gyoza arrange</p>
      <ol>
        <li>With the restof Gyoza paper, I made something.</li>
        <li>Curry potato, avocado, onion, mayo/ketchap</li>
        <li>Banan and cinamon&sugar</li>
        <li>15 - 20 min in oven 200℃</li>
      </ol>
      <img className='food-pic' src={picture5} alt='gyoza-arrange-pic' />
    </div>
  )
}

export default GyozaAndSoup;
