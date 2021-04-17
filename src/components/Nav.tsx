import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div className="w-full">
                <div className="flex flex-row bg-gray-200 text-black px-6 py-2 justify-evenly">
                    <div className="w-1/2 flex flex-row">
                        <div className="mx-2">Home</div>
                        <div className="mx-2">Home</div>
                        <div className="mx-2">Home</div>
                        <div className="mx-2">Home</div>
                        <div className="mx-2">Home</div>
                    </div>
                    <div className="mx-2">User</div>

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
