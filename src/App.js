
import {  NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Delivery from './components/Delivery/Delivery';
import FastFood from './components/FastFood/FastFood';
import Films from './components/Films/Films';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFond';
import Posts from './components/Posts/Posts';
import Search from './components/Search/Search';
import Support from './components/Support/Support';

function App() {
  
  
  
  
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="activeLink">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeLink" to="/contacts">
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeLink" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeLink" to="/posts">
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeLink" to="/films">
            Films
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeLink" to="/search">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeLink" to="/fastfood">
            FastFood
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeLink" to="/delivery">
            Delivery
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeLink" to="/support">
            Support
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/contacts" component={Contacts} />
        <Route path="/support" component={Support} />
        <Route path="/search" component={Search} />
        <Route path="/fastfood" component={FastFood} />
        <Route path="/delivery" component={Delivery} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
        <Route path="/films" component={Films} />
        <Route exact path="/" component={Home} />

        <Route path="/" component={NotFound} />
        <Redirect to="/" />
      </Switch>

      {/* <About/> */}
    </div>
  );
}

export default App;
