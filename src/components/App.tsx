import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';


class App extends Component {

  componentDidMount(){
    //Todo: Get Init Data
  };

  render() {

    return (
      <div>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
      </div>
    )
  }
}

export default connect()(App);