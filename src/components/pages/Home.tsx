import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { User } from '../../actions/User';


type HomeState = {
    user:User,
}
  
class Home extends Component<HomeState> {
    render() {
        const { user } = this.props;
        
        if(user === null)
          return <Redirect to="login" />
        
        
        return (
            <div>
                Home
            </div>
        )
    }
}

function mapStateToProps(state:any) {
    const { user } = state;

    return {
        user
    };
}

export default connect(mapStateToProps)(Home);