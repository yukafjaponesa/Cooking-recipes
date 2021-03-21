import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import HomePics from './components/HomePics/HomePics';
import Articles from './components/articles/Articles';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <div className='navbar'>
          <Link to='/' className='link-to-home'>
            Home
          </Link>
          <Link to='/profile' className='link-to-home'>
            Profile
          </Link>
          <Link to='/articles' className='link-to-home'>
            Articles
          </Link>

        </div>

        <HomePics />

        <Switch>
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
