import React from "react";
import { logo, cart } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const UserInfo = useSelector((state) => state.bazar.UserInfo);
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className="w-full h-20 bg-white border-b-[1px]  sticky top-0 z-50 px-5 ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img src={logo} alt="" className="w-28" />
          </div>
        </Link>
        <div>
          <RxHamburgerMenu
            onClick={() => setShowMenu(true)}
            className="w-10 h-10 text-black md:hidden"
          />
        </div>
        {showMenu && (
          <div className="dropdown-menu absolute w-screen h-screen left-0 top-16 bg-white px-2 py-4 rounded-lg text-center text-xl flex flex-col ">
            <ul>
              <li
                onClick={() => setShowMenu(false)}
                className="w-full py-2 hover:bg-gray-400 hover:text-white hover:shadow-md hover:shadow-gray-700  "
              >
                CLose Menu
              </li>
              <Link to="/">
                <li
                  onClick={() => setShowMenu(false)}
                  className="w-full py-2 hover:bg-gray-400 hover:text-white hover:shadow-md hover:shadow-gray-700  "
                >
                  Home
                </li>
              </Link>
              <Link to="/cart">
                <li
                  onClick={() => setShowMenu(false)}
                  className="w-full py-2 hover:bg-gray-400 hover:text-white hover:shadow-md hover:shadow-gray-700  "
                >
                  Cart
                </li>
              </Link>
              <Link to="/login">
                <li
                  onClick={() => setShowMenu(false)}
                  className="w-full py-2 hover:bg-gray-400 hover:text-white hover:shadow-md hover:shadow-gray-700  "
                >
                  Login
                </li>
              </Link>
              <Link to="/">
                <li
                  onClick={() => setShowMenu(false)}
                  className="w-full py-2 hover:bg-gray-400 hover:text-white hover:shadow-md hover:shadow-gray-700  "
                >
                  Profile
                </li>
              </Link>
            </ul>
          </div>
        )}
        <div className=" flex items-center gap-8 font-titleFont sm:hidden">
          <ul className="flex items-center gap-8 font-titleFont">
            <Link to="/">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              profile
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img
                className="w-10"
                src="https://cdn-icons-png.flaticon.com/512/2832/2832499.png"
                alt="cart"
              />
              <span className="absolute w-6 top-4 left-4 text-sm items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              className="w-10 h-10 rounded-full"
              alt="profile"
            />
          </Link>

          {UserInfo != undefined && (
            <p className=" text-base font-titleFont font-semibold ">
              {UserInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
