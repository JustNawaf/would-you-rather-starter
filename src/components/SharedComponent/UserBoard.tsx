import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UserInterface } from '../../actions/Auth';
import { StoreInterface } from '../../store';


interface UserBoardState{
    user:UserInterface,
    order:number,
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

    get medal(){
        const { order } = this.props;
        return order === 0 ? 'text-yellow-600 bg-yellow-400' : order === 1 ? 'text-gray-600 bg-gray-400':'text-yellow-900 bg-yellow-700'
    };

    render() {
        const { user, order } = this.props;
        return (
            <div className="w-full my-8 lg:my-4">
                <div className="relative w-full h-full p-2 grid grid-cols-8 border rounded-r-md shadow-md">
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
                    <div className="col-span-2 p-2 flex flex-col justify-center">
                        <div className="w-full bg-gray-200 text-center py-1">Score</div>
                        <div className="w-full flex flex-col justify-center shadow-md">
                            <div className="w-full text-xl bg-white text-center py-4">{this.score}</div>
                        </div>
                    </div>
                    <span className={`absolute -top-6 w-1/2 left-1/4 rounded-t-md lg:top-1/4 lg:-left-8 lg:w-6 z-0 lg:h-1/2 ${this.medal} lg:rounded-l-md flex justify-center items-center `}>
                        <span>{ order + 1 }</span>
                    </span>
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
