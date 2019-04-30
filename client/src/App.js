import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';
import userApi from './api/user'
import {
  BrowserRouter,
  Route,
  Redirect
} from "react-router-dom";
import Login from './Pages/Login/Login'
 class App extends Component {
   state={
     loggedIn: false,
     token: localStorage.getItem('token')
   }

   componentDidMount() {
     let storedToken = {
       'token': this.state.token
     }
     let verification;
     userApi.verify(storedToken).then(data => {
      verification = data.data
      if(verification === 'auth'){
        this.setState({
          loggedIn: true 
        })
      }
     })
   }

  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('jwtToken');
    this.setState({
      loggedIn: false
    })
  }

   render () {
     return (
       <BrowserRouter>
        <div className="App">
    
          <Route path="/"exact render ={() => (
              this.state.loggedIn ? (
                <Home logout={this.logout}/>
                ) : (
                <Login loggedIn = {this.state.loggedIn}/>
              )
            )} />
        
        </div>
       </BrowserRouter>
     )
   }
 }


export default App;
