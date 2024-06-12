import React from 'react'

const HeroSection = () => {
  return (
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-7xl font-bold mb-2">Investing</h1>
        <h1 className="text-7xl font-bold mb-2">Made</h1>
        <h1 className="text-7xl font-bold mb-2">Simple</h1>
        <p className="text-xl pt-8">Riven is the easiest way to access smarter investment options & earn real returns.</p>
        <div class="flex mt-16">
            <img src="/src/assets/img/GooglePlay.png" class="w-32 h-10 mr-4" />
            <img src="/src/assets/img/AppStore.png" class="w-32 h-10" />
      </div>
      </div>
      <div className="flex">
      <img src="/src/assets/img/Group9629.svg" alt="Placeholder" class="w-full h-auto " />
      </div>
    </div>
  </div>
  )
}

export default HeroSection