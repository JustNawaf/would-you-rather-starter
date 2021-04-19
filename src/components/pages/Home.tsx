import React, { Component } from 'react'
import { connect } from 'react-redux';
import { UserInterface } from '../../actions/Auth';
import { StoreInterface } from '../../store';


type HomeState = {
    auth:UserInterface,
}
  
class Home extends Component<HomeState> {
    render() {
        const { auth } = this.props;
    
        return (
            <div>
                Hello {auth.name}
            </div>
        )
    }
}

function mapStateToProps(store:StoreInterface) {
    const { auth } = store;
    return {
        auth
    };
}

export default connect(mapStateToProps)(Home);