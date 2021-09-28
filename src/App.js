import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import HomePics from './components/HomePics/HomePics';
import Articles from './components/articles/Articles';
import Searchbar from './components/SearchBox/SearchBar';
import React, {useState} from 'react';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const lists = [
    {'title': 'youlinji', 'date': '23.02.2021', 'description': 'You lin ji 油淋鶏'},
    {'title': 'bangbangji', 'date': '27.02.2021', 'description': 'Bang bang ji 棒棒鶏'},
    {'title': 'gyoza', 'date': '12.03.2021', 'description': 'Gyoza 餃子'},
    {'title': 'croquet', 'date': '16.03.2021', 'description': 'Croquet　コロッケ'},
    {'title': 'porkcabagge', 'date': '20.03.2021', 'description': 'Pork Cabagge Rice Bowl 豚キャベツ丼'},
    {'title': 'salmonpoke', 'date': '23.03.2021', 'description': 'Hawaiian Poke Bowl Salmon ポケ丼'},
    {'title': 'easterlunch', 'date': '04.04.2021', 'description': 'Easter Lunch Rabbit Potato Salad'},
    {'title': 'tacorice', 'date': '08.04.2021', 'description': 'Taco Rice タコライス'},
    {'title': 'katsudon', 'date': '11.04.2021', 'description': 'Katsu-Don 卵とじかつ丼'},
    {'title': 'soba', 'date': '14.04.2021', 'description': 'Soba 茶そば'},
    {'title': 'bibimpap', 'date': '18.04.2021', 'description': 'Korean Bibimpap ビビンバ'},
    {'title': 'cabbageroll', 'date': '25.04.2021', 'description': 'Cabbage Roll ロールキャベツ'},
    {'title': 'cheesedakgalbi', 'date': '26.04.2021', 'description': 'Cheese Dak Galbi チーズタッカルビ'},
    {'title': 'greencurry', 'date': '29.04.2021', 'description': 'Thai Green Curry タイグリーンカレー'},
    {'title': 'bratkartoffeln', 'date': '10.05.2021', 'description': 'Bratkartoffeln ブラットカトフレン'},
    {'title': 'mediterraneandish', 'date': '12.05.2021', 'description': 'Mediterranean Dish 地中海風料理'},
    {'title': 'thaiholybasil', 'date': '14.05.2021', 'description': 'Thai Holy Basil with minced meat タイガパオライス'},
    {'title': 'threecolorricebowl', 'date': '16.05.2021', 'description': 'Three Color Rice Bowl 三色丼'},
    {'title': 'yogurtkeemacurry', 'date': '17.05.2021', 'description': 'Yogurt Keema Curry ヨーグルトキーマカレー'},
    {'title': 'japanesebreaky', 'date': '19.05.2021', 'description': 'Japanese Breaky 和朝食'},
    {'title': 'riceballandeggroll', 'date': '21.05.2021', 'description': 'Rice ball & Egg roll おにぎり&玉子焼き'},
    {'title': 'ramen', 'date': '21.05.2021', 'description': 'Ramen ラーメン'},
    {'title': 'spicycrispychicken', 'date': '27.05.2021', 'description': 'Spicy Crispy Chicken スパイシークリスピーチキン'},
    {'title': 'crepe', 'date': '28.05.2021', 'description': 'Crepe クレープ'},
    {'title': 'hakataramen', 'date': '29.05.2021', 'description': 'Hakata Tonkotsu Ramen 博多とんこつラーメン'},
    {'title': 'sushi', 'date': '29.05.2021', 'description': 'Sushi 寿司'},
    {'title': 'eggintomato', 'date': '31.05.2021', 'description': 'Egg in Tomato 卵入りベイクドトマト'},
    {'title': 'sweetsour', 'date': '31.05.2021', 'description': 'Sweet Sout 甘酢炒め'},
    {'title': 'gyozaandsoup', 'date': '02.06.2021', 'description': 'Gyoza And Soup 餃子スープ'},
    {'title': 'nagahamaramen', 'date': '04.06.2021', 'description': 'Nagahama Ramen 長浜ラーメン'},
    {'title': 'koreanchickenricebowl', 'date': '15.06.2021', 'description': 'Korean Chicken Rice Bowl 韓国風チキン丼'},
    {'title': 'bolognese', 'date': '18.06.2021', 'description': 'Bolognese ボロネーゼ'},
    {'title': 'hayashirice', 'date': '19.06.2021', 'description': 'Hashed Beef and Rice ハヤシライス'},
    {'title': 'teriyakichicken', 'date': '20.06.2021', 'description': 'Teriyaki Chicken 照り焼きチキン'},
    {'title': 'beefstew', 'date': '21.06.2021', 'description': 'Beef Stew ビーフシチュー'},
    {'title': 'baconcheeseroll', 'date': '22.06.2021', 'description': 'Bacon Cheese Roll ベーコンチーズロール'},
    {'title': 'yodaredori', 'date': '30.06.2021', 'description': 'YodareDori よだれどり'},
    {'title': 'bltsandwich', 'date': '05.07.2021', 'description': 'BLT Sandwich BLTサンド'},
    {'title': 'englishbreakfast', 'date': '06.07.2021', 'description': 'English Breakfast イングリッシュブレックファスト'},
    {'title': 'beefkimchiburger', 'date': '07.07.2021', 'description': 'Beef Kimchi Burger ビーフキムチバーガー'},
    {'title': 'tomatopasta', 'date': '14.07.2021', 'description': 'Tomato pastaトマトパスタ'},
    {'title': 'döner', 'date': '29.07.2021', 'description': 'Döner ケバブ'},
    {'title': 'meatdoria', 'date': '30.07.2021', 'description': 'Meat Doria ミートドリア'},
    {'title': 'breakysandwich', 'date': '31.07.2021', 'description': 'Breaky Sandwich 朝食サンド'},
    {'title': 'mincedmeatsteak', 'date': '31.07.2021', 'description': 'Minced Meat Steak ミンチ肉ステーキ'},
    {'title': 'chickentikka', 'date': '10.08.2021', 'description': 'Chicken Tikka Curry チキンテッカカレー'},
    {'title': 'radishsaladgarlic', 'date': '08.09.2021', 'description': 'Radish Salad ver.Garlic 大根サラダ　ごま油＆ガーリック'},
    {'title': 'radishsaladyakiniku', 'date': '09.09.2021', 'description': 'Radish Salad ver.Yakiniku 焼肉屋さんの大根サラダ'},
    {'title': 'syoyuramen', 'date': '10.09.2021', 'description': 'Syoyu Ramen 醤油ラーメン'},
    {'title': 'okonomiyaki', 'date': '11.09.2021', 'description': 'Okonomiyaki お好み焼き'},
    {'title': 'rollcabagge', 'date': '13.09.2021', 'description': 'Roll Cabagge & Macaroni Salad ロールキャベツとマカロニサラダ'},
    {'title': 'breaky', 'date': '14.09.2021', 'description': 'Breaky 朝食'},
    {'title': 'yakisoba', 'date': '15.09.2021', 'description': 'Yakisoba 焼きそば'},
    {'title': 'potatosalad', 'date': '15.09.2021', 'description': 'Potato Salad ポテサラ'},
    {'title': 'tunacabaggemayosalad', 'date': '16.09.2021', 'description': 'Tuna Cabagge Mayo Salad ツナマヨサラダ'},
    {'title': 'chickenkatsu', 'date': '17.09.2021', 'description': 'ChickenKatsu チキンカツ'},
    {'title': 'cabbagegomadaresalad', 'date': '18.09.2021', 'description': 'Cabbage Goma Dare Salad ゴマダレキャベツサラダ'},
    {'title': 'poacedeggbreaky', 'date': '19.09.2021', 'description': 'Poaced Egg Breaky ポーチドエッグ'},
    {'title': 'tunacucumbersalad', 'date': '19.09.2021', 'description': 'Tuna Cucumber Salad ツナキュウリ-青じそ-'},
    {'title': 'chickeneggplantsweetsour', 'date': '20.09.2021', 'description': 'Chicken Eggplant Sweet Sour 鶏ももとナスの甘酢だれ'},
    {'title': 'caprese', 'date': '21.09.2021', 'description': 'Caprese カプレーゼ'},
    {'title': 'chickenlemon', 'date': '21.09.2021', 'description': 'Chicken Lemon 鶏もものねぎ塩レモン'},
    {'title': 'chickenmizoregake', 'date': '23.09.2021', 'description': 'Chicken Mizoregake ささみの大根みぞれがけ'},
    {'title': 'tomatopastapaste', 'date': '27.09.2021', 'description': 'Tomato Pasta Paste トマトパスタ'},
    {'title': 'quiche', 'date': '28.09.2021', 'description': 'Quiche キッシュ'},
  ];

  const [dishes, setDishes] = useState(lists);

  return (
    <div>
      <Router>
        <div className="App">
          <div className='navbar'>
            <Header />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
            </Switch>
            <Link to='/' className='link-in-home'>
              Home
            </Link>
            <Link to='/profile' className='link-in-home'>
              Profile
            </Link>
            <Link to='/articles' className='link-in-home'>
              Articles
            </Link>
          </div>
          <Searchbar activeDishes={dishes} dishes={lists} setDishes={setDishes}/>

          <Switch>
            <Route exact path='/'>
              <HomePics />
            </Route>

            <Route path='/profile'>
              <Profile />
            </Route>

            <Route path='/articles'>
              <Articles dishes={dishes} />
            </Route>
          </Switch>

        </div>
      </Router>
      <ContactForm />
    </div>
  );
}

export default App;
