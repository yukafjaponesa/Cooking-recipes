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

function App() {
  const lists = [
    {'title': 'youlinji', 'date': '23.02.2021', 'description': 'You lin ji 油淋鶏'},
    {'title': 'bangbangji', 'date': '27.02.2021', 'description': 'Bang bang ji 棒棒鶏'},
    {'title': 'gyoza', 'date': '12.03.2021', 'description': 'Gyoza 餃子'},
    {'title': 'croquet', 'date': '16.03.2021', 'description': 'Croquet　コロッケ'},
    {'title': 'pork cabagge rice bowl', 'date': '20.03.2021', 'description': 'Pork Cabagge Rice Bowl 豚キャベツ丼'},
    {'title': 'hawaiian poke bowl salmon', 'date': '23.03.2021', 'description': 'Hawaiian Poke Bowl Salmon ポケ丼'},
    {'title': 'easter lunch rabbit potato salad', 'date': '04.04.2021', 'description': 'Easter Lunch Rabbit Potato Salad'},
    {'title': 'taco rice', 'date': '08.04.2021', 'description': 'Taco Rice タコライス'},
    {'title': 'katsu don', 'date': '11.04.2021', 'description': 'Katsu-Don 卵とじかつ丼'},
  ];

  const [dishes, setDishes] = useState(lists);

  return (
    <div>
      <Searchbar activeDishes={dishes} dishes={lists} setDishes={setDishes}/>
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
    </div>
  );
}

export default App;
