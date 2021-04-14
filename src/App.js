
import {  NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFond';
import Posts from './components/Posts/Posts';

function App() {
  
  
  
  
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink 
            to="/"
            exact
            activeClassName="activeLink" 
          >
            Home
          </NavLink>
        </li>
        <li><NavLink activeClassName="activeLink" to="/contacts">Contacts</NavLink></li>
        <li><NavLink activeClassName="activeLink" to="/about">About</NavLink></li>
        <li><NavLink activeClassName="activeLink" to="/posts">Posts</NavLink></li>
      </ul>
      <Switch>
        
        <Route path="/contacts" component={Contacts} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
        <Route exact path="/" component={Home} />
        
        <Route path="/" component={NotFound} />
        <Redirect to="/"/>
      </Switch>
      
     
      {/* <About/> */}
      
    </div>
  );
}

export default App;
