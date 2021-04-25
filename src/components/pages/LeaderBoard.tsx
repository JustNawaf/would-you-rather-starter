import React, { Component } from 'react'
import { connect } from 'react-redux';
import { StoreInterface } from '../../store'

class LeaderBoard extends Component {
    render() {
        return (
            <div>
                Leader Board
            </div>
        )
    }
}


function mapStateToProps(store:StoreInterface){
    const { users } = store;

    return {
        users
    };
}

export default connect(mapStateToProps)(LeaderBoard);
