import React, { MouseEvent } from "react";
import IHeaderProps from "./IHeader.props";
import { ReactSVG } from "react-svg";
import Profile from "../../assets/profile.svg";
import Logout from "../../assets/logout.svg";
import { Link, useLocation } from "react-router-dom";
import AppButton from "../appButton";
import Tooltip from "../tooltip";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { logout, setLoginModal } from "../../redux/slice/loginSlice";
import { cleatBookingSlot } from "../../redux/slice/bookingSlotSlice";
import { clearBookings } from "../../redux/slice/bookingsSlice";
import { toast } from "react-toastify";

const Header: React.FC<IHeaderProps> = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);

  const onHandleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    if (value === "logout") {
      dispatch(logout());
      dispatch(cleatBookingSlot());
      dispatch(clearBookings());
      toast("Logged out successfully!!!");
    } else {
      dispatch(setLoginModal({ isOpen: true }));
    }
  };

  return (
    <header className=" h-16 flex items-center justify-center px-4 sticky top-0 z-10">
      <div className="max-w-7xl flex items-center justify-between w-full">
        <Link
          to="/"
          className={`${
            pathname === "/" ||
            pathname === "/dashboard" ||
            pathname === "/home"
              ? "text-white"
              : "text-gray-400"
          } text-sm`}
        >
          <h1 className="font-bold text-[#1B2733] text-2xl">🎥BoöK_EM</h1>
        </Link>
        <div className="flex-1 flex items-center justify-center">
          <nav className="bg-blue-dark rounded-full">
            <ul className="flex items-center p-1">
              <li className="px-6 py-1">
                <Link
                  to="/"
                  className={`${
                    pathname === "/" ||
                    pathname === "/dashboard" ||
                    pathname === "/home"
                      ? "text-white"
                      : "text-gray-400"
                  } text-sm`}
                >
                  Home
                </Link>
              </li>
              <li className="px-6 py-1">
                <Link
                  to="/bookings"
                  className={`${
                    pathname === "/bookings" ? "text-white" : "text-gray-400"
                  } text-sm`}
                >
                  Bookings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex">
          <Tooltip content="Profile" position="bottom">
            <AppButton
              classes={{
                root: "rounded-full w-9 h-9 text-white px-1 py-1 flex items-center justify-center bg-blue-base border-2",
                text: "text-sm font-medium",
              }}
              icon={
                <ReactSVG
                  src={Profile}
                  className="text-white w-4 h-4 cursor-pointer"
                />
              }
              value={"profile"}
              onClick={onHandleClick}
            />
          </Tooltip>
          {isLoggedIn && (
            <Tooltip content="Logout" position="bottom">
              <AppButton
                classes={{
                  root: "rounded-full w-9 h-9 text-white px-1 py-1 flex items-center justify-center bg-blue-base border-2 ml-2",
                  text: "text-sm font-medium",
                }}
                icon={
                  <ReactSVG
                    src={Logout}
                    className="text-white w-4 h-4 cursor-pointer"
                    title="Logout"
                  />
                }
                value={"logout"}
                onClick={onHandleClick}
              />
            </Tooltip>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
