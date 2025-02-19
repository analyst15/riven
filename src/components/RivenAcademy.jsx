import React from 'react'
import MaskGroup1 from '/src/assets/img/MaskGroup1.png'

const MobileSection = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row lg:h-screen">
      <div className="content py-8 lg:py-16 flex flex-col justify-center w-full md:w-1/2">
        <h1 className="font-bold text-black font-nunito text-xl">Riven Academy</h1>
        <p className="text-base font-nunito text-black py-6 lg:py-8">Become a better investor on the go, right on the app. Here is a preview of the things you can learn when you sign up</p>
        <a href="#" className="bg-black text-white  text-center py-2 px-4 rounded focus:outline-none lg:w-2/3">Join waitlist to get early access</a>
      </div>
      <div className="flex">
        <img src={MaskGroup1} alt="Investment app screenshot" className="w-full h-auto" />
      </div>
    </div>    
  )
}

export default MobileSection