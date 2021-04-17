import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="w-full h-full">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex flex-col px-4 py-2 items-center w-64 h-80 mx-4 border-none rounded-md bg-red-400">
                            <img className="w-36 h-36 border-none rounded-full shadow-2xl" src="https://cdn2.iconfinder.com/data/icons/character-avatar/64/23-people-avatar-512.png"/>
                            <h1 className="text-md text-gray-800 font-mono mt-2">Nawaf</h1>
                            <div className="w-full h-full flex justify-center items-center">
                                <button className="w-full bg-gray-800 text-white py-1 border-none rounded-md transition duration-150 hover:bg-gray-900 focus:outline-none">Login</button>
                            </div>
                        </div>
                        <div className="flex flex-col px-4 py-2 items-center w-64 h-80 mx-4 border-none rounded-md bg-green-400">
                            <img className="w-36 h-36 border-none rounded-full shadow-2xl" src="https://cdn2.iconfinder.com/data/icons/character-avatar/64/23-people-avatar-512.png"/>
                            <h1 className="text-md text-gray-800 font-mono mt-2">Khalid</h1>
                            <div className="w-full h-full flex justify-center items-center">
                                <button className="w-full bg-gray-800 text-white py-1 border-none rounded-md transition duration-150 hover:bg-gray-900 focus:outline-none">Login</button>
                            </div>
                        </div>
                        <div className="flex flex-col px-4 py-2 items-center w-64 h-80 mx-4 border-none rounded-md bg-blue-400">
                            <img className="w-36 h-36 border-none rounded-full shadow-2xl" src="https://cdn2.iconfinder.com/data/icons/character-avatar/64/23-people-avatar-512.png"/>
                            <h1 className="text-md text-gray-800 font-mono mt-2">Alharbi</h1>
                            <div className="w-full h-full flex justify-center items-center">
                                <button className="w-full bg-gray-800 text-white py-1 border-none rounded-md transition duration-150 hover:bg-gray-900 focus:outline-none">Login</button>
                            </div>
                        </div>
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
