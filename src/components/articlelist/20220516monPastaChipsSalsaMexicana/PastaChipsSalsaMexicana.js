import React from 'react';
import picture1 from './20220516pastachips.jpg';

function PastaChipsSalsaMexicana() {
  return (
    <div>
      <h1>Pasta Chips Salsa Mexicana パスタチップス サルサ・メキシカーナ</h1>
      <h3>Mon 16.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='pasta-chips' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pasta - Rigatoni, bowtie or penne</li>
            <li>Oil</li>
            <li>Parmesan cheese</li>
            <li>Garlic powder,oregano, italian seasonings</li>
            <li>***Dips***</li>
            <li>Greek yogurt, ground garlic, olive oil, salt</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook that pasta al dente in a pot of heavily salted water</li>
          <li>Drain the pasta and transfer it to a large mixing bowl or into the pot</li>
          <li>Add olive oil, parmesan cheese and the spices you are using</li>
          <li>Toss well to combine to make sure the pasta is coated with the oil, cheese and spices</li>
          <li>Air fry until golden and crispy, shaking the basket a few times</li>
          <li>Remove from the air fryer and allow to cool slightly before enjoying!</li>
          <li>Or 230℃ oven for 20 min</li>
          <br />
          <li>***Tomato salsa***</li>
          <li>Tomato 180g</li>
          <li>Cucumber 1/2</li>
          <li>Onion 1/2</li>
          <li>Salt 1/2 tsp</li>
          <li>Ground garlic 1/2 tsp</li>
          <li>Vinegar, ketchup 1 tbsp</li>
          <li>Honey, lemon juice 1/2 tbsp</li>
          <li>Coriander</li>
          <br />
          <li>Chop vegs and mix with all</li>
          <br />
          <li>***Guacamole***</li>
          <li>Avocado 1/2</li>
          <li>Lemon juice, salt and pepper</li>
          <li>Smash avocado with a fork and mix all</li>
        </ol>
      </div>
    </div>
  )
}

export default PastaChipsSalsaMexicana;
