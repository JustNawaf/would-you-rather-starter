import { Component } from 'react'
import { connect } from 'react-redux'
import { StoreInterface } from '../../store';
import UserLogin from '../SharedComponent/UserLogin';

interface LoginState{
    users:Array<string>
};
class Login extends Component<LoginState,any> {
    render() {
        const { users } = this.props;

        return (
            <div className="w-full h-full">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center">
                        {
                            users.map((id) => (
                                <UserLogin key={id} id={id}/>
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
        users:Object.keys(users)
    };
}

export default connect(mapStateToProps)(Login);