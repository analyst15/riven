import React from 'react';
import logo from '../assets/RIVEN.svg'; 
import LandingPageImage from '../assets/img/LandingPageImage.jpeg'; 

const LandingPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center p-6 w-full"
      style={{
        backgroundImage: `url(${LandingPageImage})`,
        backgroundSize: '100% 100%', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
     
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

     
      <div className="w-full max-w-4xl text-center space-y-8 relative z-10">
        
        <img
          src={logo} 
          alt="Riven Logo"
          className="m-auto w-24 h-24 md:w-32 md:h-32" // Adjust size as needed
        />

        <h2 className="text-4xl md:text-4xl text-white">
          Invest in Global Markets with as little as $1
        </h2>


        <p className="text-xl text-gray-200">
          Invest from Afrika in real time
        </p>

    
        <div className="flex flex-col md:flex-row justify-center">
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full md:w-96 px-6 py-3 rounded-lg border border-gray-300"
          />
          <button className="w-full md:w-auto px-8 py-3 bg-black text-white rounded-lg">
            Get early access
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;