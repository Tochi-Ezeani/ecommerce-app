import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  // State for sidebar
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex justify-between items-center font-medium py-5">
      <img src={assets.logo} className="w-36" alt="Logo" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <span>HOME</span>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <span>COLLECTION</span>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <span>ABOUT</span>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <span>CONTACT</span>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex gap-6 items-center">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        {/* dropdown */}
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="group-hover:block hidden absolute right-0 dropdown-menu pt-4">
            <div className="w-36 rounded bg-slate-100 flex flex-col gap-2 text-gray-500 px-5 py-3">
              <span className="cursor-pointer hover:text-black">
                My Profile
              </span>
              <span className="cursor-pointer hover:text-black">Orders</span>
              <span className="cursor-pointer hover:text-black">Logout</span>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <span className="absolute -right-1.25 -bottom-1.25 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            0
          </span>
        </Link>

        {/* Sidebar menu button */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 bg-white transition-all ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex gap-4 items-center cursor-pointer p-3"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <span>Back</span>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="border pl-6 py-2"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="border pl-6 py-2"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="border pl-6 py-2"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="border pl-6 py-2"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
