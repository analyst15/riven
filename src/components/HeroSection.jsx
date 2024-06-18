import React from 'react'
import GooglePlay from '/src/assets/img/GooglePlay.png'
import Appstore from '/src/assets/img/AppStore.png'
import Group9629 from '/src/assets/img/Group9629.svg'

const HeroSection = () => {
  return (
    <div className="container font-nunito mx-auto pb-7 lg:pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-3xl lg:text-6xl font-bold mb-2">Investing</h1>
          <h1 className="text-3xl lg:text-6xl font-bold mb-2">Made</h1>
          <h1 className="text-3xl lg:text-6xl font-bold mb-2">Simple</h1>
          <p className="text-base lg:text-xl text-black font-nunito pt-8">Riven is the easiest way to access smarter investment options & earn real returns.</p>
          <div class="flex mt-16">
            <img src={GooglePlay} class="w-32 h-10 mr-4" />
            <img src={Appstore} class="w-32 h-10" />
          </div>
        </div>
        <div className="flex">
          <img src={Group9629} alt="Placeholder" class="w-full h-auto" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection