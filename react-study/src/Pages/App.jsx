import './App.css'
import About from './About';
import Users from './Users';


// 参照(routing nest): https://reactrouter.com/web/example/nesting

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const Home = () => {
  return (
  <p>Home</p>)
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/Users'>
            <Users />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App
