import React from 'react';
import{useEffect}from 'react'
import store from './js/store/index';
import { Provider } from 'react-redux';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Signup from './component/Signup'
import Signin from './component/Signin'
import Profile from './component/Profile';
import Annonce from './component/annonce';
import AuthToken from '../src/utils/setAuthToken';
import { isAuthorized} from './js/actions/actions';
import PrivedRoute from './component/routing/privedRoute'
import CreateProfile  from './component/createProfile';
import EditProfile  from './component/editProfile';
import AddExperience  from './component/addExperience';
import Offers  from './component/offers';
import ProfilePdf  from './component/profilePdf';
import AdminPage from './component/adminPage'
import AdminAnnonce from './component/adminAnnonce'
import AdminUser from './component/adminUser'
import Home from './component/Home'


if (localStorage.token) {
  AuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch( isAuthorized());
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path='/home' component={Home} />
        <Route exact path='/' component={Signup} />
        <Route exact path='/login' render={props=><Signin {...props}/>} />
        <Route exact path='/profile' render={props=><Profile {...props}/>} />
        <Route exact path='/createProfile' render={props=><CreateProfile {...props}/>} />
        <Route exact path='/editProfile' render={props=><EditProfile {...props}/>} />
        <Route exact path='/addExperience' render={props=><AddExperience {...props}/>} />
        <Route exact path='/offers' render={props=><Offers {...props}/>} />
        <Route exact path='/adminPage' render={props=><AdminPage {...props}/>} />
        <Route exact path='/annonce' render={props=><Annonce {...props}/>} />
        <Route exact path='/adminUsers' render={props=><AdminUser {...props}/>} />

        <Route exact path='/adminAnnonces' render={props=><AdminAnnonce {...props}/>} />

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
