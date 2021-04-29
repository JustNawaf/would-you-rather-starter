import React from 'react'

export default function NotFound() {
    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-1/2 flex justify-center items-center">
                <div>
                    <img src="../../../../images/notfound.png" alt="Not Found Image" />
                    <div className="w-full h-full text-center">
                        <h1 className="text-lg text-gray-400 my-6 ">404 - Not Found</h1>
                        <a href="/" className="mt-4 bg-gray-400 rounded-md px-4 py-2 text-white transition duration-150 focus:outline-none hover:bg-gray-500">Return Home</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
