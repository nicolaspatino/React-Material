import React, {Component} from 'react';
import logo from './logo.svg';
import {TodoApp} from "./components/TodoApp";
import './App.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {Login} from "./components/Login";


const LoginView = () => (
        <Login/>
);
const TodoView = () => (
         <TodoApp/>
);
class App extends Component {
      constructor(props) {
            super(props);
            this.state = {isLoggedIn : localStorage.getItem('isLoggedIn')===null?false : localStorage.getItem('isLoggedIn')};
            localStorage.setItem('username', 'nico123@ejemplo');
            localStorage.setItem('password', 'nico123');
      }


      render() {

              return (
                  <Router>
                      <div className="App">
                          <header className="App-header">
                              <img src={logo} className="App-logo" alt="logo"/>
                              <h1 className="App-title">TODO React App</h1>
                          </header>

                          <br/>
                          <br/>

                          {localStorage.getItem('IsLoggedIn')==="true"
                               ? <li><Link to="/todo">Todo</Link> <Route path="/todo" component={TodoView}/></li>
                               : <li><Link to="/">Login</Link> <Route exact path="/" component={LoginView}/></li>
                           }
                      </div>
                  </Router>
              );
          }



}
export default App