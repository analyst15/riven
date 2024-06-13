import React from 'react'

const StartInvesting = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row h-screen">
        <div className="flex">
        <img src="/src/assets/img/MaskGroup2.png" alt="Investment app screenshot" className="w-full" />
        </div>
    <div className="content py-16 flex ml-4 flex-col justify-center w-full md:w-1/2">
    <h1 className="font-bold">Invest any Amount</h1>
        <p className="text-base pt-8">Start your investment portfolio with the money you want. You can invest from $1 in fractional shares, ETFs</p>
        <div className="mt-12">
        <a href="#" className="bg-black text-white text-center py-2 px-4 rounded focus:outline-none w-1/3">Start Investing</a>
        </div>
        
    </div>
</div> 
  )
}

export default StartInvesting
