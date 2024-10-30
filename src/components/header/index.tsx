import React from "react";
import IHeaderProps from "./IHeader.props";
import { ReactSVG } from "react-svg";
import Search from "../../assets/search.svg";
import Profile from "../../assets/profile.svg";
import Logout from "../../assets/logout.svg";
import { useLocation } from "react-router-dom";
import AppButton from "../appButton";
import Tooltip from "../tooltip";

const Header: React.FC<IHeaderProps> = () => {
  const { pathname } = useLocation();

  console.log("myparams", location);

  return (
    <header className=" h-16 flex items-center justify-center px-4 sticky top-0 z-10">
      <div className="max-w-7xl flex items-center justify-between w-full">
        <h1 className="font-bold text-[#1B2733] text-2xl">BoöK_M</h1>
        <div className="flex-1 flex items-center justify-center">
          <nav className="bg-blue-dark rounded-full">
            <ul className="flex items-center p-1">
              <li className="px-6 py-1">
                <a
                  href="/"
                  className={`${
                    pathname === "/" ||
                    pathname === "/dashboard" ||
                    pathname === "/home"
                      ? "text-white"
                      : "text-gray-400"
                  } text-sm`}
                >
                  Home
                </a>
              </li>
              <li className="px-6 py-1">
                <a
                  href="/bookings"
                  className={`${
                    pathname === "/bookings" ? "text-white" : "text-gray-400"
                  } text-sm`}
                >
                  Bookings
                </a>
              </li>
              <li className="">
                <Tooltip content="Search" position="bottom">
                  <AppButton
                    className="rounded-full w-8 h-8 px-1 py-1 ml-4 flex items-center justify-center bg-blue-base"
                    icon={
                      <ReactSVG
                        src={Search}
                        className="text-white w-4 h-4 cursor-pointer"
                        title="Logout"
                      />
                    }
                  />
                </Tooltip>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex">
          <Tooltip content="Profile" position="bottom">
            <AppButton
              className="rounded-full w-9 h-9 text-white px-1 py-1 flex items-center justify-center bg-blue-base border-2 "
              icon={
                <ReactSVG
                  src={Profile}
                  className="text-white w-4 h-4 cursor-pointer"
                />
              }
            />
          </Tooltip>
          <Tooltip content="Logout" position="bottom">
            <AppButton
              className="rounded-full w-9 h-9 text-white px-1 py-1 flex items-center justify-center bg-blue-base border-2 ml-2"
              icon={
                <ReactSVG
                  src={Logout}
                  className="text-white w-4 h-4 cursor-pointer"
                  title="Logout"
                />
              }
            />
          </Tooltip>
        </div>
      </div>
    </header>
  );
};

export default Header;
