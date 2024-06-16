import React from 'react'

const OurProducts = () => {
  return (
    <>
      <div className="flex lg:items-center lg:justify-center">
        <h1 className="text-xl md:text-base font-bold font-nunito lg:text-xl text-left lg:text-center text-black mt-4 lg:mt-0">Our Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:p-4">
        <div className="lg:p-4">
          <div className="flex">
            <img src="/src/assets/img/MaskGroup5.png" alt="Investment app screenshot" className="w-full h-auto" />
          </div>
          <h1 className="font-bold font-nunito text-black text-base py-2">Stocks</h1>
          <p className="text-base font-nunito text-black pb-10 lg:pb-24">Discover the best global and local stocks to invest in. Get unrestricted access to the U.S. and Nigerian stock markets, right from your mobile phone or computer.</p>
          <a href="#" className="bg-black text-white font-nunito text-center py-2 px-8 rounded focus:outline-none">Learn More</a>
        </div>
        <div className="lg:p-4">
          <div className="flex">
            <img src="/src/assets/img/MaskGroup4.png" alt="Investment app screenshot" className="w-full h-auto" />
          </div>
          <h1 className="font-bold font-nunito text-black text-base py-2">Exchange Traded Funds (ETFs)</h1>
          <p className="text-base font-nunito text-black pb-12">Want to quickly diversify your portfolio? Unsure what stocks to buy? Want to follow an index like the S&P 500 that tracks the US economy? Want to get professional money management for a low price? We have got you covered.</p>
          <a href="#" className="bg-black font-nunito text-white text-center py-2 px-8 rounded focus:outline-none">Learn More</a>
        </div>
        <div className="lg:p-4">
          <div className="flex">
            <img src="/src/assets/img/MaskGroup3.png" alt="Investment app screenshot" className="w-full h-auto" />
          </div>
          <h1 className="font-bold font-nunito text-black text-base py-2">For Institutions</h1>
          <p className="text-base font-nunito text-black pb-12">Build or integrate your application with our suite of products or use our trading tool for managers and brokers. Give your clients more access to buy stocks, ETFs, seamlessly manage portfolios, access research and powerful reports.</p>
          <a href="#" className="bg-black font-nunito text-white text-center py-2 px-8 rounded focus:outline-none">Learn More</a>
        </div>
      </div>
    </>
  )
}

export default OurProducts