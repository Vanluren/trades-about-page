import React from 'react';
import { ReactComponent as LogoImg } from 'assets/img/logo.svg';
import { ReactComponent as Burger } from 'assets/img/burger.svg';

const NavBar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 shadow-sm sticky">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
          >
            <Burger />
          </button>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <LogoImg style={{ color: '#fff' }} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
