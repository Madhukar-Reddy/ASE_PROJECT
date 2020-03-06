import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './components/Landing';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';



function App() {
  return (
    <Router>
      <div className="App">
         <Navbar />
        <Route exact path = "/" component={Landing} />
        <div  className="container">
        <Route exact path = "/register" component={Register} />
        <Route exact path = "/login" component={Login} />
        <Route exact path = "/profile" component={Profile} />
        </div>
        
    </div>
 
    </Router>
     )
}

export default App;
