import { Menu, X } from "lucide-react";
import { useState } from "react";
import RivenWhiteLogo from "../assets/RivenWhiteLogo.svg";
import { navItems } from "../constants";


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };


  return (
    <nav className="fixed top-0 left-0 right-0 py-3 px-4 lg:px-0 backdrop-blur-lg bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="container px-4 lg:px-24 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-auto w-20 mr-2" src={RivenWhiteLogo} alt="" />
            </div>
            <ul className="hidden font-nunito lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href="{item.href}">{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwqL61OOyYNX4SfIJxYdHRsUXSPz0H_XSHTghJDHVSKJghrQ/viewform" className="py-2 px-9 border rounded-md cursor-pointer">
                Join Waitlist
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-white text-black w-full p-3 flex flex-col justify-items-start items-start lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwqL61OOyYNX4SfIJxYdHRsUXSPz0H_XSHTghJDHVSKJghrQ/viewform" className="py-2">
                  Join Waitlist
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
