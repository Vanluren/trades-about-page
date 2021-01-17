import React from 'react';
import { ReactComponent as LogoWhite } from 'assets/img/logo-white.svg';

const NavBar = () => {
  return (
    <nav className="w-full mx-auto absolute top-0 left-0 h-22">
      <div className=" container w-4/6 mx-auto py-8">
        <div className="flex flex-row justify-evenly">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <LogoWhite />
            </div>
          </div>
          <div>
            <a
              href="/"
              className="text-white text-xl text-semibold capitalize  pb-2 ml-6"
            >
              Services
            </a>

            <a
              href="/"
              className="text-white text-xl text-semibold capitalize pb-2 ml-6 hover:border-b-2 hover:border-white"
            >
              Support
            </a>

            <a
              href="/"
              className="text-white text-xl text-semibold capitalize border-b-2 border-white pb-2 ml-6"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
