import React from 'react'

const MobileSection = () => {
  return (
        <div className="container mx-auto flex flex-col md:flex-row h-screen">
            <div className="content py-16 flex flex-col justify-center w-full md:w-1/2">
                <p className="text-xl pt-8">Investing from Africa has never been easier. <br /> Get started in 3 steps:</p>
                <div className="flex">
                    <h1 className="mr-4 font-bold">1. Create an account</h1>
                    <h1 className="mr-4 font-bold">2. Fund your wallet</h1>
                    <h1 className="font-bold">3. Start Investing</h1>
                </div>
                <p className="text-gray-700 text-lg leading-loose mb-8">Get started in 3 steps: Create an account, Fund your wallet, Start Investing. From as little as $1, you can invest in a variety of assets and grow your wealth.</p>
                <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Start Investing</a>
            </div>
                <div className="flex">
                <img src="/src/assets/img/Group9610.svg" alt="Investment app screenshot" className="ml-44 w-full h-auto" />
                </div>
        </div>    
  )
}

export default MobileSection