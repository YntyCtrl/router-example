
import {  NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Cybersport from './components/Cybersport/Cybersport';

import Films from './components/Films/Films';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFond';
import Posts from './components/Posts/Posts';
import Search from './components/Search/Search';
import Sport from './components/Sport/Sport';
import Support from './components/Support/Support';

function App() {
  
  
  
  
  return (
    <div className="App">
      <div className="background">
        <li className="navli">
          <NavLink
            className="NavLink"
            to="/"
            exact
            activeClassName="activeLink"
          >
            Home
          </NavLink>
        </li>
        <ul className="navul">
          <li className="navli">
            <NavLink
              className="NavLink"
              activeClassName="activeLink"
              to="/posts"
            >
              Posts
            </NavLink>
          </li>
          <li className="navli">
            <NavLink
              className="NavLink"
              activeClassName="activeLink"
              to="/films"
            >
              Films
            </NavLink>
          </li>

          <li className="navli">
            <NavLink
              className="NavLink"
              activeClassName="activeLink"
              to="/cybersport"
            >
              Cybersport
            </NavLink>
          </li>
          <li className="navli">
            <NavLink
              className="NavLink"
              activeClassName="activeLink"
              to="/sport"
            >
              Sport
            </NavLink>
          </li>
          <li className="navli">
            <NavLink
              className="NavLink"
              activeClassName="activeLink"
              to="/search"
            >
              Search
            </NavLink>
          </li>
          <li className="navli">
            <NavLink
              className="NavLink"
              activeClassName="activeLink"
              to="/support"
            >
              Support
            </NavLink>
          </li>
          <li className="navli">
            <NavLink
              className="NavLink"
              activeClassName="activeLink"
              to="/contacts"
            >
              Contacts
            </NavLink>
          </li>
          <li className="navli">
            <NavLink
              className="NavLink"
              activeClassName="activeLink"
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/contacts" component={Contacts} />
        <Route path="/support" component={Support} />
        <Route path="/search" component={Search} />
        <Route path="/cybersport" component={Cybersport} />
        <Route path="/sport" component={Sport} />
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
