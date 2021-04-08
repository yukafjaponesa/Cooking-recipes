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

function App() {
  return (
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
            <Articles />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
