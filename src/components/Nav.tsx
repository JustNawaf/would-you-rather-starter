import React, { Component } from 'react'
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { UserInterface } from '../actions/User';
import { StoreInterface } from '../store';
import { Redirect } from 'react-router-dom';


interface NavState extends RouteComponentProps{
    user:UserInterface,
    children:any
};

class Nav extends Component<NavState> {
    render() {
        const { user, location } = this.props;

        if(user === null && location.pathname !== "/login")
            return <Redirect to="login" />

        return (
            <div className="w-full">
                <div className="flex flex-row bg-gray-200 text-black px-6 py-2 justify-evenly">
                    <div className="w-1/2 flex flex-row">
                        <div className="mx-2">Home</div>
                        <div className="mx-2">New Question</div>
                        <div className="mx-2">Leader Board</div>
                    </div>
                    {
                        user === null ? <div className="mx-2"></div> : <div className="mx-2">{user.name}</div>
                    }

                </div>
                <div className="w-full flex justify-center items-center">
                    {/* Container */}
                    <div className="w-full h-full lg:w-2/3 mt-6">
                        {this.props.children}
                    </div>
                </div>
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

export default withRouter(connect(mapStateToProps)(Nav));