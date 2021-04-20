import React, { Component } from 'react'
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { handleLoginUser, UserInterface } from '../../actions/Auth'
import { handleSetQuestions } from '../../actions/Questions';
import { StoreInterface } from '../../store'

interface UserLoginState extends RouteComponentProps{
    dispatch:Function,
    user:UserInterface,
}


class UserLogin extends Component<UserLoginState> {

    login(e:React.MouseEvent,user:UserInterface){
        const { dispatch, history } = this.props;
        e.preventDefault();
        dispatch(handleLoginUser(user));
        dispatch(handleSetQuestions());
        history.push(`/`);
    };

    render() {
        const { user } = this.props;

        return (
            <div className={`flex flex-col mt-4 lg:mt-0 px-4 py-2 items-center w-64 h-80 mx-4 border-none rounded-md ${user.color}`}>
                <img className="w-36 h-36 border-none rounded-full shadow-2xl" src={user.avatarURL} alt="User Avatar"/>
                <h1 className="text-md text-gray-800 font-mono mt-2">{user.name}</h1>
                <div className="w-full h-full flex justify-center items-center">
                    <button className="w-full bg-gray-800 text-white py-1 border-none 
                    rounded-md transition duration-150 hover:bg-gray-900 focus:outline-none" onClick={(e) => this.login(e,user)}>
                        Login
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store:StoreInterface,props:any){
    const { users } = store;
    return {
        user:users[props.id]
    };
}

export default withRouter(connect(mapStateToProps)(UserLogin));