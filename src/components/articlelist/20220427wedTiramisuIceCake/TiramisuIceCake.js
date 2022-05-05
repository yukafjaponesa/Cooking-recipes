import React from 'react';
import picture1 from './20220427tiramisuicecake.jpg';
import picture2 from './20220427tiramisuicecakepiece.jpg';

function TiramisuIceCake() {
  return (
    <div>
      <h1>Tiramisu Ice Cake ティラミスアイスケーキ</h1>
      <h3>Wed 27.04.2022</h3>
      <h4>15cm</h4>


      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tiramisu-ice-cake-piece' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Instant coffee 1 tbsp</li>
            <li>Boiled water 80cc</li>
            <li>Kasutera sponge cake 160g(4 slices)</li>
            <li>Milk 200cc</li>
            <li>Marshmallow 100g</li>
            <li>Crean cheese 200g</li>
            <li>Cocoa 2 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Make coffee and pour onto sponge cake</li>
          <li>Add milk and marshmallow in a pot and heat and mix it till melt</li>
          <li>Add cream cheese in it and mix</li>
          <li>Pour into the shape freezer for 4 hr</li>
          <img className='food-pic' src={picture2} alt='tiramisu-ice-cake' />
          <br />
        </ol>
      </div>
    </div>
  )
}

export default TiramisuIceCake;
