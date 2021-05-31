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
