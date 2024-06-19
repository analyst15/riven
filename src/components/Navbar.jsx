import { Menu, X } from "lucide-react";
import { useState } from "react";
import RivenWhiteLogo from "../assets/RivenWhiteLogo.svg";
import { navItems } from "../constants";
import Swal from 'sweetalert2'

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleClick = () => {
    Swal.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
          const githubUrl = `
            https://api.github.com/users/${login}
          `;
          const response = await fetch(githubUrl);
          if (!response.ok) {
            return Swal.showValidationMessage(`
              ${JSON.stringify(await response.json())}
            `);
          }
          return response.json();
        } catch (error) {
          Swal.showValidationMessage(`
            Request failed: ${error}
          `);
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        });
      }
    });
  }
  return (
    <nav className="sticky top-0  py-3 backdrop-blur-lg bg-black text-white">
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
              <a onClick={handleClick} className="py-2 px-9 border rounded-md cursor-pointer">
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
                <a href="#" className="py-2">
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
