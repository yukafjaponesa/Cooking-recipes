import React from 'react';
import picture1 from './20220412broccolipork.jpg';

function BroccoliAndPorkWithMisoSesamePaste() {
  return (
    <div>
      <h1>Broccoli And Pork With Miso Sesame Paste & Bean sprout namuru & White radish steak</h1>
      <h1>ブロッコリーと豚こまのごまみそ炒め & もやしだけナムル & 甘辛大根ステーキ</h1>
      <h3>Tue 12.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='broccoli-pork' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***Broccoli and pork with miso sesame paste***</li>
            <li>Thin sliced pork 200g</li>
            <li>Potato starch 1 tbsp</li>
            <li>Salt & pepper</li>
            <li>Broccoli 1/2</li>
            <li>Sliced onion 1/2</li>
            <li>Sake, mirin 1 tbsp/ea</li>
            <li>Sugar 1/2 tbsp</li>
            <li>Miso paste 1 1/2 tbsp</li>
            <li>White sesame 1 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add oil in a pan and cook pork and onion</li>
          <li>Add boiled broccoli and sauce</li>
          <br />
          <li>***Bean sprout namuru***</li>
          <li>Bean sprout 1 bag</li>
          <li>Soy sauce, sesame oil, ground white sesame 1/2 tbsp/ea</li>
          <li>Consommé, ground garlic 1/4 tsp/ea</li>
          <li>Salt</li>
          <br />
          <li>Boil bean sprout and drain water</li>
          <li>Mix with ingredients</li>
          <br />
          <li>***White radish steak***</li>
          <li>White radish 10cm(300g)</li>
          <li>Flour 1 tbsp</li>
          <li>Oil 1/2 tbsp</li>
          <li>Spring onion</li>
          <li>Sake, mirin 1 tbsp/ea</li>
          <li>Sugar 1/2 tbsp</li>
          <li>Soy sauce 1 1/2 tbsp</li>
          <br />
          <li>Cut white radish in 6 slices</li>
          <li>Make a notch in the grid pattern of both side of white radish</li>
          <li>600w microwave oven 7 min with wrap</li>
          <li>Remove water and sift flour</li>
          <li>Add oil in a pan and stir both side</li>
          <li>Add sauce and mix</li>
        </ol>
      </div>
    </div>
  )
}

export default BroccoliAndPorkWithMisoSesamePaste;
