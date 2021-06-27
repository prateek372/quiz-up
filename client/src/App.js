import React, {useState} from 'react';
import './App.css';
import './index.css'

import Navbar from './components/Navbar/Navbar';

// importing bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login/component";
import SignUp from "./components/Signup/component";



// function App() {
//   return (
//     <div className="App">
//       < Navbar />
//     </div>
//     );
// }


function App(){

const [usernameReg, setUsernameReg] = useState("")
const [passwordReg, setPassswordReg] = useState("")

      return (
      <Router>
      <div className="App">
        {/* <Navbar/> */}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="nvabar-logo"  className="navbar-brand" to={"/sign-in"}>
            <i class="fas fa-brain"></i>
              QuizUp</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </div>
      </div></Router>
    );
  }

export default App;
