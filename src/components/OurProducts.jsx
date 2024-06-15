import React from 'react'

const OurProducts = () => {
  return (
    <>
    <div className="flex items-center justify-center">
    <h1 className="text-4xl md:text-base font-bold lg:text-base text-center text-black mt-16">Our Products</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
      <div className="bg-gray-100 p-4">
        <div className="flex">
          <img src="/src/assets/img/MaskGroup5.png" alt="Investment app screenshot" className="w-full h-auto" />
        </div>
        <h1 className="font-bold text-base py-2">Stocks</h1>
        <p className="text-base pb-24">Discover the best global and local stocks to invest in. Get unrestricted access to the U.S. and Nigerian stock markets, right from your mobile phone or computer.</p>
        <a href="#" className="bg-black text-white text-center py-2 px-8 rounded focus:outline-none">Learn More</a>
      </div>
      <div className="bg-gray-100 p-4">
        <div className="flex">
          <img src="/src/assets/img/MaskGroup4.png" alt="Investment app screenshot" className="w-full h-auto" />
        </div>
        <h1 className="font-bold text-base py-2">Exchange Traded Funds (ETFs)</h1>
        <p className="text-base pb-12">Want to quickly diversify your portfolio? Unsure what stocks to buy? Want to follow an index like the S&P 500 that tracks the US economy? Want to get professional money management for a low price? We have got you covered.</p>
        <a href="#" className="bg-black text-white text-center py-2 px-8 rounded focus:outline-none">Learn More</a>
      </div>
      <div className="bg-gray-100 p-4">
        <div className="flex">
          <img src="/src/assets/img/MaskGroup3.png" alt="Investment app screenshot" className="w-full h-auto" />
        </div>
        <h1 className="font-bold text-base py-2">For Institutions</h1>
        <p className="text-base pb-12">Build or integrate your application with our suite of products or use our trading tool for managers and brokers. Give your clients more access to buy stocks, ETFs, seamlessly manage portfolios, access research and powerful reports.</p>
        <a href="#" className="bg-black text-white text-center py-2 px-8 rounded focus:outline-none">Learn More</a>
      </div>
    </div>
    </>
  )
}

export default OurProducts