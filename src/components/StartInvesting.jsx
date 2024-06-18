import React from 'react'
import MaskGroup2 from '/src/assets/img/MaskGroup2.png'

const StartInvesting = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row lg:h-screen">
        <div className="flex">
        <img src={MaskGroup2} alt="Investment app screenshot" className="w-full" />
        </div>
    <div className="content py-7 lg:py-16 flex lg:ml-4 flex-col justify-center w-full md:w-1/2">
    <h1 className="font-bold text-black text-lg lg:text-xl font-nunito">Invest any Amount</h1>
        <p className="text-base font-nunito text-black pt-5">Start your investment portfolio with the money you want. You can invest from $1 in fractional shares, ETFs</p>
        <div className="mt-8">
        <a href="#" className="bg-black text-white text-center py-2 px-4 rounded focus:outline-none w-1/3">Start Investing</a>
        </div>
        
    </div>
</div> 
  )
}

export default StartInvesting
