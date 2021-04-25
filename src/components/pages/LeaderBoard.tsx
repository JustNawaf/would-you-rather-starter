import React, { Component } from 'react'
import { connect } from 'react-redux';
import { StoreInterface } from '../../store'
import UserBoard from '../SharedComponent/UserBoard';


interface UserBoardState{
    usersIDs:Array<string>,
};


class LeaderBoard extends Component<UserBoardState> {
    render() {
        const { usersIDs } = this.props;
        return (
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-1/2 h-full">
                    {
                        usersIDs.map((id) => (
                            <UserBoard key={id} id={id} />
                        ))
                    }
                </div>
            </div>
        )
    }
}


function mapStateToProps(store:StoreInterface){
    const { users } = store;
    const calculateScore = (id:string) => {
        return Object.keys(users[id].answers).length + users[id].questions.length;
    };

    return {
        usersIDs:Object.keys(users).sort((a, b) => calculateScore(b) - calculateScore(a)),
    };
}

export default connect(mapStateToProps)(LeaderBoard);
