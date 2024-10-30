import React from "react";
import IHeaderProps from "./IHeader.props";

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className=" h-14 flex items-center justify-center px-4">
      <div className="max-w-7xl flex items-center justify-between w-full">
        <div className="flex-1 flex items-center">
          {/* <img src="/path-to-your-logo.png" alt="Logo" className="h-8 mr-4" /> */}
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Bookings
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Profile
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
