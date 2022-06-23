import React from 'react';
import picture1 from './20220720homemadegyozapaper.jpg';
import picture2 from './20220720riceflour.jpg';
import picture3 from './20220720wrappeddough.jpg';
import picture4 from './20220720longdough.jpg';
import picture5 from './20220720cutdoughin2cm.jpg';
import picture6 from './20220720dough2cmball.jpg';

function HomemadeGyozaPaper() {
  return (
    <div>
      <h1>Homemade Gyoza Paper 手作り餃子の皮</h1>
      <h3>Wed 20.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='homemade-gyoza-paper' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rice flour 60g</li>
            <li>Flour 60g(強力粉)</li>
            <li>Salt</li>
            <li>Boiled water 100ml</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add rice flour, flour and salt in a bowl and pour boiled water</li>
          <li>Mix with chop sticks</li>
          <li>ボウルに餃子の皮の材料をいれ、熱湯1/2カップを注ぎ、菜箸などで混ぜる。</li>
          <img className='food-pic' src={picture2} alt='rice-flour' />
          <li>After cooling down, mix by hand and make it one and wrap it and rest for 30 min</li>
          <li>粗熱が取れたら手で2、3分捏ねてまとめ、丸めてラップをして30分以上置く。</li>
          <li>（生地の固さは耳たぶ位が目安。生地が固い場合は、手に水を付けながら少しずつ足して調整する）</li>
          <img className='food-pic' src={picture3} alt='wrapped-dough' />
          <li>Pull the dough for 32 cm and cut 2 cm each(16 pieces) and make it round</li>
          <li>生地を32cmの棒状に伸ばし、2cmずつ切り分け（16等分）、１つずつ丸める。</li>
          <img className='food-pic' src={picture4} alt='long-dough' />
          <br />
          <img className='food-pic' src={picture5} alt='cut-in-2cm--dough' />
          <li>Add flour on the board and make it for 7 - 8 cm round sheet</li>
          <li>台に打ち粉をして[3]を１つのせ、7、8cmの円形に麺棒で伸ばす。残りも同様にする。</li>
          <li>（生地がくっつかないように伸ばした生地にも粉を薄くまぶしておく）</li>
          <img className='food-pic' src={picture6} alt='dough-2cm-balls' />
        </ol>
      </div>
    </div>
  )
}

export default HomemadeGyozaPaper;
