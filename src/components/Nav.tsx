import React, { Component } from 'react'
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { logout, UserInterface } from '../actions/User';
import { StoreInterface } from '../store';
import { Redirect } from 'react-router-dom';


interface NavState extends RouteComponentProps{
    dispatch:Function,
    user:UserInterface,
    children:any
};
class Nav extends Component<NavState> {

    state = {
        userModal:false,
        menu:false,
    };

    toggleUserModal = () => {
        this.setState({
            userModal:!this.state.userModal
        })
    }
    toggleMenu = () => {
        this.setState({
            menu:!this.state.menu
        })
    }

    logout = () => {
        const { dispatch } = this.props;
        dispatch(logout());
    }
    
    render() {
        const { user, location } = this.props;

        if(user === null && location.pathname !== "/login")
            return <Redirect to="login" />

        return (
            <div>
                <nav className="bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">

                            <button  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</button>

                            <button  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">New Question</button>

                            <button  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Leader Board</button>

                            </div>
                        </div>
                        </div>
                        {
                            user !== null ?  
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">                           
                                    <div className="ml-3 relative">
                                        <div>
                                            <button type="button" onClick={this.toggleUserModal} className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                                <span className="sr-only">Open user menu</span>
                                                <img className="h-8 w-8 rounded-full" src={user.avatarURL} alt=""/>
                                            </button>
                                        </div>
                                        
                                        {
                                            this.state.userModal &&
                                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                                                <button className="w-full text-left block px-4 py-2 text-sm text-gray-700 transition 
                                                duration-100 hover:bg-gray-100 focus:outline-none" 
                                                role="menuitem" tabIndex={-1} id="user-menu-item-2" onClick={this.logout}>Sign out</button>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            :
                            <button  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</button>
                        }
                        <div className="-mr-2 flex md:hidden" onClick={this.toggleMenu}>
                            <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    </div>
                    {
                        this.state.menu && 

                        <div className="md:hidden" id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <button  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</button>

                                <button  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">New Question</button>

                                <button  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Leader Board</button>
                            </div>
                            {
                                user !== null && 
                                <div className="pt-4 pb-3 border-t border-gray-700">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={user.avatarURL} alt=""/>
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 px-2 space-y-1">
                                        <button  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</button>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </nav>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        {this.props.children}
                    </div>
                </main>
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