import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UserInterface } from '../../actions/Auth';
import { StoreInterface } from '../../store';


interface UserBoardState{
    user:UserInterface
};


class UserBoard extends Component<UserBoardState> {
    get score(){
        return this.totalQuestions + this.totalAnswered
    };

    get totalQuestions(){
        const { user } = this.props;
        return user.questions.length;
    };

    get totalAnswered(){
        const { user } = this.props;
        return Object.keys(user.answers).length;
    }

    render() {
        const { user } = this.props;
        return (
            <div className="w-full my-4">
                <div className="relative w-full h-full p-2 grid grid-cols-8 border rounded-md shadow-md">
                    <div className="col-span-2 p-2 border-r">
                        <img className="w-full h-full" src={user.avatarURL} alt="User Avatar" />
                    </div>
                    <div className="col-span-4 p-2 border-r">
                        <h3 className="text-lg font-mono">{user.name}</h3>
                        <div className="w-full flex justify-between text-sm text-gray-600">
                            <p className="my-1">Answered Questions: </p>
                            <p className="my-1">{this.totalAnswered}</p>
                        </div>
                        <div className="w-full flex justify-between text-sm text-gray-600">
                            <p className="my-1">Created Questions: </p>
                            <p className="my-1">{this.totalQuestions}</p>
                        </div>
                    </div>
                    <div className="col-span-2 p-2">
                        <div className="w-full h-full shadow-md">
                            <div className="w-full bg-gray-200 text-center py-1">Score</div>
                            <div className="w-full bg-white text-center py-4">{this.score}</div>
                        </div>
                    </div>
                    <span className="absolute top-0 left-0 w-6 h-6 bg-yellow-400 border-none rounded-full"></span>
                </div>
            </div>
        )
    }
}


function mapStateToProps(store:StoreInterface,props:any){
    const { id } = props;
    const { users } = store;

    return {
        user:users[id]
    }
};


export default connect(mapStateToProps)(UserBoard);
