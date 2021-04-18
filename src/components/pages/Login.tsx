import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { handleLoginUser, UserInterface } from '../../actions/User';
import { StoreInterface } from '../../store';

interface LoginState extends RouteComponentProps {
    dispatch:Function,
    users:{
        [key:string]:UserInterface
    }
};
class Login extends Component<LoginState,any> {

    login(e:React.MouseEvent,user:UserInterface){
        const { dispatch, history } = this.props;
        e.preventDefault();
        dispatch(handleLoginUser(user));
        history.push(`/`);
    };

    render() {
        const { users } = this.props;

        return (
            <div className="w-full h-full">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center">
                        {
                            Object.keys(users).map((key) => (
                                <div key={key} className={`flex flex-col mt-4 lg:mt-0 px-4 py-2 items-center w-64 h-80 mx-4 border-none rounded-md ${users[key].color}`}>
                                    <img className="w-36 h-36 border-none rounded-full shadow-2xl" src={users[key].avatarURL} alt="User Avatar"/>
                                    <h1 className="text-md text-gray-800 font-mono mt-2">{users[key].name}</h1>
                                    <div className="w-full h-full flex justify-center items-center">
                                        <button className="w-full bg-gray-800 text-white py-1 border-none 
                                        rounded-md transition duration-150 hover:bg-gray-900 focus:outline-none" onClick={(e) => this.login(e,users[key])}>
                                            Login
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-full mt-6 flex flex-row justify-center items-center">
                        <div className="w-1/3 h-1 border-b mx-1"></div><h1>New Account</h1><div className="w-1/3 h-1 border-b mx-1"></div>
                    </div>
                    <div className="w-full mt-6 flex flex-row justify-center items-center">
                        <div>
                            New Form Register
                        </div>
                    </div>
                </div>
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

export default withRouter<LoginState,any>(connect(mapStateToProps)(Login));