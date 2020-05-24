import React from 'react';
import './App.css';
// import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import GameDescription from './pages/GameDescription';
// import APICall from './components/APICall/APICall';
import Signup from './pages/Signup';
import userProfile from './pages/UserProfile';
import { StoreProvider } from './utils/GlobalState';
import SearchFriendsPage from './pages/SearchFriendsPage';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <StoreProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route path='/games' component={GameDescription} />
          <Route exact path="/signup" component={Signup}/>
          <Route path="/users" component={userProfile}/>
          <Route path="/search_friends" component={SearchFriendsPage} />
        </Switch>
        <Footer/>
      </StoreProvider>
    </Router>
  );
}

export default App;