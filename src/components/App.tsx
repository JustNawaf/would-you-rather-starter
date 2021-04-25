import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { handleInitialData } from '../actions/InitialData';
import Home from './pages/Home';
import LeaderBoard from './pages/LeaderBoard';
import Login from './pages/Login';
import NewQuestion from './pages/NewQuestion';
import ViewQuestion from './pages/ViewQuestion';

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
        <Route path="/NewQuestion" exact component={NewQuestion}/>
        <Route path="/LeaderBoard" exact component={LeaderBoard}/>
        <Route path="/view/:id" component={ViewQuestion}/>

      </div>
    )
  }
}

export default connect()(App);