import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Elements/Header.css";
import { logo_img } from "../images/data";


const Header = () => {
 
  const [isActive, setIsActive] = useState(1);

  const handleNavSelected = (e) => {
    setIsActive(e.target.id)
  };

  return (
    <>
      <header class="text-slate-600 bg-white-900 body-font shadow-lg ">
        <div class="  flex justify-around p-2 flex-col md:flex-row items-center">
          <nav class="nav-menu flex  flex-wrap items-start text-base  ">
            <NavLink
              to="/"

              activeClassName="active"
              id="1"
              onClick={(e) => handleNavSelected(e)}
              class={isActive == 1 ? "active mr-5  hover:text-black  cursor-pointer ":"mr-5  hover:text-black  cursor-pointer "}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              id="2"


              activeClassName="active"
              onClick={(e) => handleNavSelected(e)}
              class={isActive == 2 ? "active mr-5  hover:text-black  cursor-pointer ":"mr-5  hover:text-black  cursor-pointer "}

            >
              About
            </NavLink>
            <NavLink
              to="/committee"

              activeClassName="active"
              id="3"
              onClick={(e) => handleNavSelected(e)}
              class={isActive == 3 ? "active mr-5  hover:text-black  cursor-pointer ":"mr-5  hover:text-black  cursor-pointer "}

            >
              Committee
            </NavLink>
          </nav>
          <NavLink class="flex order-first lg:order-none  title-font items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
            <span class="logo-ImgWrapper ml-2 text-2xl xl:block lg:block text-black">
              <img src={logo_img} alt="karan dattani" />
            </span>
          </NavLink>
          <nav class=" nav-menu flex ml-2  w-fit flex-wrap items-center text-base md:ml-5 ">
            <NavLink
              to="/facilities"

              activeClassName="active"
              id="4"
              onClick={(e) => handleNavSelected(e)}
              class={isActive == 4 ? "active mr-5  hover:text-black  cursor-pointer ":"mr-5  hover:text-black  cursor-pointer "}

            >
              Facilities
            </NavLink>
            <NavLink
              to="/expo"

              activeClassName="active"
              id="5"
              onClick={(e) => handleNavSelected(e)}
              class={isActive == 5 ? "active mr-5  hover:text-black  cursor-pointer ":"mr-5  hover:text-black  cursor-pointer "}

            >
              Expo 2024
            </NavLink>
            <NavLink
              to="/contact"
              id="6"

              activeClassName="active"
              onClick={(e) => handleNavSelected(e)}
              class={isActive == 6 ? "active mr-5  hover:text-black  cursor-pointer ":"mr-5  hover:text-black  cursor-pointer "}

            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
