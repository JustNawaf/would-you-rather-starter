import React, { Component } from 'react'
import { connect } from 'react-redux';
import { UserInterface } from '../../actions/User';
import { StoreInterface } from '../../store';


type HomeState = {
    user:UserInterface,
}
  
class Home extends Component<HomeState> {
    render() {
        const { user } = this.props;
    
        return (
            <div>
                Hello {user.name}
            </div>
        )
    }
}

function mapStateToProps(store:StoreInterface) {
    const { user } = store;
    return {
        user
    };
}

export default connect(mapStateToProps)(Home);