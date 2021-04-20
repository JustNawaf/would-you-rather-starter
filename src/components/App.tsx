import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { handleInitialData } from '../actions/InitialData';
import Home from './pages/Home';
import Login from './pages/Login';
import NewQuestion from './pages/NewQuestion';

type AppState = {
  dispatch:Function,
}
class App extends Component<AppState> {

  componentDidMount(){
    //Todo: Get Init Data
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  };

  render() {

    return (
      <div>
        <Route path="/" exact component={Home}/>
        <Route path="/Login" component={Login}/>
        <Route path="/NewQuestion" component={NewQuestion}/>

      </div>
    )
  }
}

export default connect()(App);