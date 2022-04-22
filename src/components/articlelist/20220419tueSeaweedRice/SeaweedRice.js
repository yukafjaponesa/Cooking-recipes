import React from 'react';
import picture1 from './20220419seaweedrice.jpg';
import picture2 from './20220419seaweed.jpg';
import picture3 from './20220419seaweedricecooker.jpg';

function SeaweedRice() {
  return (
    <div>
      <h1>Seaweed Rice 学校給食わかめご飯</h1>
      <h3>Tue 19.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='seaweed-rice' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rice 2 cups</li>
            <li>Salt 1 tsp</li>
            <li>Sake 1 tbsp</li>
            <li>Mirin 1 tbsp</li>
            <li>Seaweed 2 tbsp</li>
            <li>White sesame</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Sink seaweed in water</li>
          <img className='food-pic' src={picture2} alt='seaweed' />
          <li>Add rice, sake, salt and mirin in rice cooker and rest for 30 min</li>
          <li>Cook rice</li>
          <li>Chop seaweed in small pieces</li>
          <li>After rice cooked, add seaweed and sesame and mix</li>
          <img className='food-pic' src={picture3} alt='rice-cooker' />
        </ol>
      </div>
    </div>
  )
}

export default SeaweedRice;
