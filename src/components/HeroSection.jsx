import React from 'react'

const HeroSection = () => {
  return (
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-7xl font-bold mb-2">Investing</h1>
        <h1 className="text-7xl font-bold mb-2">Made</h1>
        <h1 className="text-7xl font-bold mb-2">Simple</h1>
        <p className="text-2xl pt-5">Riven is the easiest way to access smarter investment options & earn real returns.</p>
      </div>
      <div className="flex">
      <img src="/src/assets/img/Group9629.svg" alt="Placeholder" class="w-full h-auto " />
      </div>
    </div>
  </div>
  )
}

export default HeroSection