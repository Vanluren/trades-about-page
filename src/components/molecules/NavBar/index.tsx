import React, { ReactElement, useState } from 'react';
import { ReactComponent as LogoWhite } from 'assets/img/logo-white.svg';
import { ReactComponent as BurgerIcon } from 'assets/img/burger.svg';
import { ReactComponent as CloseIcon } from 'assets/img/x.svg';

const NavBar = (): ReactElement => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <nav className="w-full mx-auto absolute top-0 left-0 h-22">
      <div className=" container w-4/6 mx-auto py-8">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center justify-start">
            <LogoWhite />
          </div>
          <div className="hidden md:flex">
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
          <div className="md:hidden">
            <BurgerIcon
              onClick={() => setActive(true)}
              style={{ color: '#fff' }}
            />
            <div
              className={`w-screen h-screen bg-black bg-opacity-40 absolute top-0 left-0 right-0 z-10 flex flex-col justify-center items-end px-8 ${
                active ? 'flex' : 'hidden'
              }`}
            >
              <CloseIcon
                style={{ color: '#fff' }}
                onClick={() => setActive(false)}
                className="h-8 w-8 flex absolute top-8 right-6"
              />
              <a
                href="/"
                className="text-white text-4xl text-semibold capitalize  mb-8"
              >
                Services
              </a>
              <a
                href="/"
                className="text-white text-4xl text-semibold capitalize mb-8"
              >
                Support
              </a>
              <a
                href="/"
                className="text-white text-4xl text-semibold capitalize border-b-2 border-white mb-8"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
