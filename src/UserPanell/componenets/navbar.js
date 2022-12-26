import React from "react";
import logo from "../assessts/logo.png";
import logo_text from "../assessts/logo_text.png";
import search from "../assessts/search.png";
const Navbar = () => {
  return (
    <div className="h-14 flex px-2 items-center justify-between bg-black">
      {/* Logo */}
      {/* <div className="flex flex-row w-[8%] ">
        <img src={logo} alt="logo" className="" />
      </div>
      <div className="flex">
        <input
          type="search"
          placeholder="Search for events"
          className="w-80  px-2 rounded"
        />
        <img src={search} alt="search" className="-ml-10 w-[11%]" />
      </div>
      <div>
        <ul className="flex flex-row ">
          <li className="text-base  rounded hover:bg-purple-900">Login</li>
          <li className="text-base rounded hover:bg-purple-900">Sign up</li>
          <li className="text-base rounded hover:bg-purple-900">Help</li>
          <li className="text-base rounded hover:bg-purple-900">Contact</li>
          <li className="text-base rounded hover:bg-purple-900">
            Create Event
          </li>
        </ul>
      </div> */}
      <nav className="flex flex-row items-center justify-between">
        <div className="">
          <a className="" href="#">
            <img
              src={logo}
              alt="Logo"
              width="60"
              height="44"
              class="d-inline-block align-text-top"
            />
            <img
              src={logo_text}
              alt="Logo"
              width="130"
              height="50"
              class="d-inline-block align-text-top"
            />
          </a>
        </div>
        <div>
          <form className="flex ml-96" role="search">
            <input
              className="form-control me-2 w-60"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className=" -ml-12" type="submit">
              <img src={search} className="h-8" />
            </button>
          </form>
        </div>
        <div className="ml-10 text-white  text-xl">
          <i class="fa-regular fa-bell mx-1  p-2 bg-[#560BAD] rounded-full  "></i>
          <i class="fa-regular fa-message mx-1 p-2 bg-[#560BAD] rounded-full"></i>
        </div>
        <div class="dropdown">
          <button
            className="btn hover:bg-[#560BAD] btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Signin
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
