import React from 'react'

const MobileSection = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row h-screen">
            <div className="content py-16 flex flex-col justify-center w-full md:w-1/2">
                <p className="text-xl pt-8">Investing from Africa has never been easier. <br /> Get started in 3 steps:</p>

                <div className="grid grid-cols-3 grid-rows-1 gap-3 my-12">
                    <div >
                        <h1 className="font-bold">1. Create an account</h1>
                        <p className="text-gray-700 text-base text-left">Sign up with your phone number and get verified by your National ID in minutes.</p>
                    </div>
                    <div >
                        <h1 className="font-bold">2. Fund your wallet</h1>
                        <p className="text-gray-700 text-base text-left">Fund your account either by mobile money or bank transfer Instant deposit</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold">3. Start Investing</h1>
                        <p className="text-gray-700 text-base text-left">From as little as $1</p>
                    </div>
                </div>
                <a href="#" className="bg-black text-white text-center py-2 px-4 rounded focus:outline-none w-1/3">Start Investing</a>
            </div>
            <div className="flex">
                <img src="/src/assets/img/Group9610.svg" alt="Investment app screenshot" className="ml-44 w-full h-auto" />
            </div>
        </div>
    )
}

export default MobileSection